import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "Type your api key",
    authDomain: "simple-fb-app.firebaseapp.com",
    projectId: "simple-fb-app",
    storageBucket: "simple-fb-app.appspot.com",
    messagingSenderId: "Type your sender id",
    appId: "Type your app id",
    measurementId: "Type your measurement id"
  };

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)