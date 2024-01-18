import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDd65qcMjGPl4XH8TN952y6Hjv5RzhBeVs",
  authDomain: "app-5b8d3.firebaseapp.com",
  projectId: "app-5b8d3",
  storageBucket: "app-5b8d3.appspot.com",
  messagingSenderId: "942640085987",
  appId: "1:942640085987:web:d213097d0dc7266e6cbed6",
  databaseURL: 'https://app-5b8d3-default-rtdb.firebaseio.com'
};

export const app = initializeApp(firebaseConfig);