import React from 'react'
import {createContext} from 'react';
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyCmnC9wFQLvfrm0QYr6xzOkh0fBw5kD8eY",
  authDomain: "secondapp-usingcontext.firebaseapp.com",
  projectId: "secondapp-usingcontext",
  storageBucket: "secondapp-usingcontext.appspot.com",
  messagingSenderId: "798881548317",
  appId: "1:798881548317:web:871dfe7c90209fc6ba1ef4",
  databaseURL:'https://secondapp-usingcontext-default-rtdb.firebaseio.com'
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export function FirebaseProvider(props) {
  const signupUserWithEmailAndPasswor=(email, password)=>{
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }
  return (
    <FirebaseContext.Provider value={{signupUserWithEmailAndPasswor}}>
        {props.children}
    </FirebaseContext.Provider>
  )
}

