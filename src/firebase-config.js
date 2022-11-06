import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCz9G1EOp5cl9q_zyeB2bhISkZj2OZw0iM",
    authDomain: "simple-fb-app.firebaseapp.com",
    projectId: "simple-fb-app",
    storageBucket: "simple-fb-app.appspot.com",
    messagingSenderId: "1040234307456",
    appId: "1:1040234307456:web:83f5ea0d7d756660706b65",
    measurementId: "G-HRY69W9S8P"
  };

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)