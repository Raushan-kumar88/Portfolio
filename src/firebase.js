import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU0e3aaHlJmj1RJ4MBjgdZSXCNatthscY",
  authDomain: "raushan-kumar-8e3be.firebaseapp.com",
  projectId: "raushan-kumar-8e3be",
  storageBucket: "raushan-kumar-8e3be.appspot.com",
  messagingSenderId: "948735293473",
  appId: "1:948735293473:web:6ded5b7bd4740d0c6d4b60"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
