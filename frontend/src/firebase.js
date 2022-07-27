// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQnA_bAnQeom_MmfNIRV2NjpM9emOtqfI",
  authDomain: "fir-tutorial-a243e.firebaseapp.com",
  projectId: "fir-tutorial-a243e",
  storageBucket: "fir-tutorial-a243e.appspot.com",
  messagingSenderId: "1018260377324",
  appId: "1:1018260377324:web:512b7b5977eb935a3b9fc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export { db };


