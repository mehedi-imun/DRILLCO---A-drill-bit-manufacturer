
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgal6g6xj5VhSSQfqnxjsfO1uU0DkmtjY",
  authDomain: "drillco-87862.firebaseapp.com",
  projectId: "drillco-87862",
  storageBucket: "drillco-87862.appspot.com",
  messagingSenderId: "27158206009",
  appId: "1:27158206009:web:2c22a7f46ce60745429fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth