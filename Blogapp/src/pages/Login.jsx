// import React from 'react';
import { auth , provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Login({setIsAuth}) {
  const navigate = useNavigate();
  const siginInWithGoogle = () =>{
  
    signInWithPopup(auth, provider). then((result)=>{
            console.log("hi trying to sign in ")
            localStorage.setItem('isAuth', true);
            setIsAuth(true)
            console.log("is woking heere")
            navigate('/')
            console.log("is also working here")
        })
    };

  return (
    <div className='loginPage'>
      <p>sign in with google to continue</p>
      <button onClick={siginInWithGoogle} className='login-with-google-btn'>Sign in with Google</button>
    </div>
  )
}

export default Login
