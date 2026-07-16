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

export async function loadProgress(uid){
  const snap = await getDoc(doc(db, 'users', uid));
  const data = snap.exists() ? snap.data() : {};
  return {
    completed: Array.isArray(data.completed) ? data.completed : [],
    unitScores: (data.unitScores && typeof data.unitScores === 'object') ? data.unitScores : {}
  };
}

export async function saveCompleted(uid, completed){
  await setDoc(doc(db, 'users', uid), { completed }, { merge: true });
}

export async function saveUnitScores(uid, unitScores){
  await setDoc(doc(db, 'users', uid), { unitScores }, { merge: true });
}

export async function loadProfile(uid){
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : {};
}
