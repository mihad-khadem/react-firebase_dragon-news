import { initializeApp } from "firebase/app";



// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCeEF-tDQ7R2_vlKXUHk58IFi_hJF1-Avs",
  authDomain: "react-dragon-news-fireba-8dc9b.firebaseapp.com",
  projectId: "react-dragon-news-fireba-8dc9b",
  storageBucket: "react-dragon-news-fireba-8dc9b.appspot.com",
  messagingSenderId: "229445359756",
  appId: "1:229445359756:web:637713606cd62bcff603a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;