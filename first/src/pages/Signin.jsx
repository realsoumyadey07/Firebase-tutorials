import React, { useState } from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebase';

const auth = getAuth(app);
function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signinUser=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(value=> console.log("success"+ value))
        .catch(error=> console.log(error))
    }
  return (
    <div className='flex flex-col m-2 w-96'>
        <h1>Signin</h1>
        <label htmlFor="">Email</label>
        <input type="email" onChange={e=> setEmail(e.target.value)} required placeholder='Enter your email' className='border'/>
        <label htmlFor="">Password</label>
        <input type="password" onChange={e=>setPassword(e.target.value)} className='border' required placeholder='Enter your password' />
        <button onClick={signinUser} className='my-2 bg-slate-500 py-2 px-3 rounded-md w-40 hover:bg-slate-400'>Log in</button>
    </div>
  )
}

export default Signin