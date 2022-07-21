import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCLtb9ktMdteemfcIZE0X6qeNmE4Wj9Gg",
  authDomain: "react-web-app-movie-cinema-09.firebaseapp.com",
  projectId: "react-web-app-movie-cinema-09",
  storageBucket: "react-web-app-movie-cinema-09.appspot.com",
  messagingSenderId: "54045870750",
  appId: "1:54045870750:web:ce767f969b7930563d098f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const loginWithGoogle = async (accessToken, user) => {
  try {
    const userCredential = await signInWithPopup(
      auth,
      provider,
      accessToken,
      user
    );

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);

    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const registerWithEmailPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);

    alert("Email / Password Kosong");
  }
};

const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userCredential.user.email);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);

    alert("Email / Password Kosong");
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

const signOutFromApp = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  loginWithGoogle,
  registerWithEmailPassword,
  loginWithEmailPassword,
  resetPassword,
  signOutFromApp,
};
