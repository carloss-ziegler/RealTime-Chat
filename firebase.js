import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4qNIFrklrEgFPXgW7fTxk0DfaOaP6X2M",
  authDomain: "chat-73a8d.firebaseapp.com",
  projectId: "chat-73a8d",
  storageBucket: "chat-73a8d.appspot.com",
  messagingSenderId: "300243426649",
  appId: "1:300243426649:web:88df9d3f169d87cca48048",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
