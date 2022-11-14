// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZMH1Nv-rkVXY1P7zoNrDiAIAWFW-_LIU",
  authDomain: "portfolio-14783.firebaseapp.com",
  projectId: "portfolio-14783",
  storageBucket: "portfolio-14783.appspot.com",
  messagingSenderId: "19616977938",
  appId: "1:19616977938:web:deb0700f22c47b580cf4cb",
  measurementId: "G-DZ98G5KEHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const  db = getFirestore(app);

export  {db, collection, addDoc};