// import {getDatabase, ref, set} from 'firebase/database';
import {createUserWithEmailAndPassword, getAuth}from 'firebase/auth';
import {app} from './firebase';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const auth = getAuth(app);
// const db = getDatabase(app);
function App() {

  const signupUser =()=>{
    createUserWithEmailAndPassword(auth, 'soumyadipdeygmail.com', 'soumyadey')
    .then((value)=>{console.log(value);})
    .catch((error)=>{console.log(error);})
  }
  // const putData=()=>{
  //   set(ref(db, "users/soumya"),{
  //     id: 1,
  //     name: "Soumya dey",
  //     age: 21
  //   })
  // }
  return (
    <div>
      <h1 className='text-yellow-400'>Firebase react tutorials</h1>
      <button onClick={signupUser}>Add</button>
      <Signup/>
      <Signin/>
    </div>
  )
}

export default App
