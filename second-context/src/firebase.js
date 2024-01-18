import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmnC9wFQLvfrm0QYr6xzOkh0fBw5kD8eY",
  authDomain: "secondapp-usingcontext.firebaseapp.com",
  projectId: "secondapp-usingcontext",
  storageBucket: "secondapp-usingcontext.appspot.com",
  messagingSenderId: "798881548317",
  appId: "1:798881548317:web:871dfe7c90209fc6ba1ef4",
  databaseURL:'https://secondapp-usingcontext-default-rtdb.firebaseio.com'
};

export const app = initializeApp(firebaseConfig);