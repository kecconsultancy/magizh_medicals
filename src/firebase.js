import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFhXdGc2DJjmqaN54s52ZvdCJQX4DXA20",
  authDomain: "magizhmedicals-6e897.firebaseapp.com",
  projectId: "magizhmedicals-6e897",
  storageBucket: "magizhmedicals-6e897.appspot.com",
  messagingSenderId: "700991788160",
  appId: "1:700991788160:web:9f782f2d4129cd7c284265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { db, storage };
