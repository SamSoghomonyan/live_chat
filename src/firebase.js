import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDf1qAEceHWn0ihdAsVmQqyLfcIbxMpE28",
  authDomain: "signinlivechat.firebaseapp.com",
  projectId: "signinlivechat",
  storageBucket: "signinlivechat.appspot.com",
  messagingSenderId: "793862432194",
  appId: "1:793862432194:web:21d79c718d31bc2038a25b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
