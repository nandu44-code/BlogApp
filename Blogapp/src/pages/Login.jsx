import React from 'react';
import { auth , provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Login({setIsAuth}) {

    const siginInWithGoogle = () =>{

        let navigate = useNavigate();

        signInWithPopup(auth, provider). then((result)=>{
            
            localStorage.setItem('isAuth', true);
            setIsAuth(True);
            navigate('/')
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
