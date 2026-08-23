// Shared Firestore-backed progress store. Every page that shows or edits
// learning progress (courses/lesson/quiz/dashboard/profile) imports this
// instead of touching localStorage directly, so progress is tied to the
// signed-in account rather than the browser.
import { auth, db } from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Resolves once with the current Firebase user (or null) — waits for the
// SDK's first auth-state callback instead of racing it.
export function getCurrentUser(){
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => { unsub(); resolve(user); });
  });
}

// Bounces to login.html if nobody's signed in. Call this first on every
// page that needs an account; returns the user (never null) otherwise.
export async function requireUser(){
  const user = await getCurrentUser();
  if(!user){ location.href = 'login.html'; return null; }
  return user;
}

// Keep a device-local copy as a safety net. Firebase remains the shared
// source of truth, but a temporary rejected/slow write must not stop a
// learner from completing a quiz or reviewing the answers they just chose.
function progressKey(uid){ return 'pystart-progress-'+uid; }
function normaliseProgress(data={}){
  return {
    completed: Array.isArray(data.completed) ? data.completed : [],
    unitScores: (data.unitScores && typeof data.unitScores === 'object') ? data.unitScores : {},
    finalExam: (data.finalExam && typeof data.finalExam === 'object') ? data.finalExam : null
  };
}
function readCachedProgress(uid){
  try{ return normaliseProgress(JSON.parse(localStorage.getItem(progressKey(uid))||'{}')); }
  catch(error){ return normaliseProgress(); }
}
function cacheProgress(uid, progress){
  try{ localStorage.setItem(progressKey(uid),JSON.stringify(normaliseProgress(progress))); }
  catch(error){ /* Storage can be unavailable in private browsing; Firebase still works. */ }
}
function mergeProgress(remote, cached){
  return {
    completed: [...new Set([...remote.completed,...cached.completed])],
    unitScores: {...remote.unitScores,...cached.unitScores},
    finalExam: cached.finalExam||remote.finalExam
  };
}

export async function loadProgress(uid){
  const cached=readCachedProgress(uid);
  try{
    const snap = await getDoc(doc(db, 'users', uid));
    const remote=normaliseProgress(snap.exists() ? snap.data() : {});
    const progress=mergeProgress(remote,cached);
    cacheProgress(uid,progress);
    return progress;
  }catch(error){
    return cached;
  }
}

export async function saveCompleted(uid, completed){
  const cached=readCachedProgress(uid);
  cacheProgress(uid,{...cached,completed});
  try{ await setDoc(doc(db, 'users', uid), { completed }, { merge: true }); return true; }
  catch(error){ return false; }
}

export async function saveUnitScores(uid, unitScores){
  const cached=readCachedProgress(uid);
  cacheProgress(uid,{...cached,unitScores});
  try{ await setDoc(doc(db, 'users', uid), { unitScores }, { merge: true }); return true; }
  catch(error){ return false; }
}

// { score, total, pct } for the 60-question cumulative final exam —
// separate from unitScores since it isn't tied to any single unit.
export async function saveFinalExam(uid, finalExam){
  const cached=readCachedProgress(uid);
  cacheProgress(uid,{...cached,finalExam});
  try{ await setDoc(doc(db, 'users', uid), { finalExam }, { merge: true }); return true; }
  catch(error){ return false; }
}

export async function loadProfile(uid){
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : {};
}

export async function saveProfileName(uid, name){
  await setDoc(doc(db, 'users', uid), { name }, { merge: true });
}
