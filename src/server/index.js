import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCn5XZbNuv-6S_BweS6XOB53-YDqoVCUI",
    authDomain: "assaxiy-ea4f4.firebaseapp.com",
    projectId: "assaxiy-ea4f4",
    storageBucket: "assaxiy-ea4f4.appspot.com",
    messagingSenderId: "671888187559",
    appId: "1:671888187559:web:75d62442196f6fdd2fbb82",
    measurementId: "G-GHEY7511P1"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
