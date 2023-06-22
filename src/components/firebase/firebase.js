// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD42TcYKuVX_KPqmEKYycxreQD-qtQsWmI",
  authDomain: "formapp-4d22c.firebaseapp.com",
  projectId: "formapp-4d22c",
  storageBucket: "formapp-4d22c.appspot.com",
  messagingSenderId: "1086377100670",
  appId: "1:1086377100670:web:80d75e16b7854991c61f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

