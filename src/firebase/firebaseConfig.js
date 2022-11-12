import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5QuzgdxZ0lratJWm_L0e0LDPtrMnKilM",
  authDomain: "class-test-9fb16.firebaseapp.com",
  projectId: "class-test-9fb16",
  storageBucket: "class-test-9fb16.appspot.com",
  messagingSenderId: "326080711669",
  appId: "1:326080711669:web:29a0c3d683cf684d35aebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
