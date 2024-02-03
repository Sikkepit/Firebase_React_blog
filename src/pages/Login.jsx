import React from 'react'

// import the variabels we need to set up authentication
import { auth, provider } from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({ setIsAuth }) {

  let navigate = useNavigate();

  
  function SignInWithGoogle() {

      // Use the imported signInWithPopUp together with the auth and provider returns a promise. Once fulfilled save to
      // localStorage and change the state of isAuth to "true". We are going to use this for conditionl rendering.
      signInWithPopup(auth, provider).then(result => {
        localStorage.setItem('isAuth', true)
        setIsAuth(true)
        navigate("/")
      }) 
  }
  return (
    <div >
      <button className='login-button' onClick={SignInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login