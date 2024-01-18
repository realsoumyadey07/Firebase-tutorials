import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebase';

const auth = getAuth(app);
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');

  const createPage=()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(value => alert('Email has been created with '+value.user.email+ ' email.'))
    .catch(error=> console.log(error));
  }
  return (
    <div className='flex flex-col m-2 w-96'>
      <label htmlFor="">Email</label>
      <input onChange={(e)=> setEmail(e.target.value)} type="email" required placeholder='Enter your email' className='border border-gray-700'/>
      <label htmlFor="">Password</label>
      <input onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter the password' />
      <button className='my-2 bg-slate-500 py-2 px-3 rounded-md w-40 hover:bg-slate-400' onClick={createPage}>Signup</button>
    </div>
  )
}

export default Signup