// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz6onWF6YNxy0VVkdI8wZP5dwpQox96L4",
  authDomain: "khalsa-dastar-center.firebaseapp.com",
  projectId: "khalsa-dastar-center",
  storageBucket: "khalsa-dastar-center.appspot.com",
  messagingSenderId: "379529586549",
  appId: "1:379529586549:web:02a4f3179400c09cc8153c",
  measurementId: "G-W6JLNWWN26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);