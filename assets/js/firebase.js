// นำเข้า Firebase SDK Modules ผ่าน CDN URL ที่เบราว์เซอร์เข้าใจได้ทันที
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ค่า config ของโปรเจกต์ py จาก Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDvFnHKU6uE2St_Gdmi7gwNXBz0vPCs-js",
  authDomain: "pystart-971a2.firebaseapp.com",
  projectId: "pystart-971a2",
  storageBucket: "pystart-971a2.firebasestorage.app",
  messagingSenderId: "1058501832312",
  appId: "1:1058501832312:web:af13ec0064a5e0c878878d"
};

// เริ่มต้นการทำงานของ Firebase ตัวแอปหลัก
const app = initializeApp(firebaseConfig);

// เปิดใช้งานฟังก์ชันต่างๆ และส่งออก (Export) ให้ไฟล์อื่นเรียกใช้ได้
export const auth = getAuth(app);
export const db = getFirestore(app);
