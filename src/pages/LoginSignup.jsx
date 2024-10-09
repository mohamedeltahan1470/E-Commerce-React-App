import React, { useState } from 'react';
import "./LoginSignup.css";
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase/config";


const LoginSignup = () => {
  const [email , setEmail]= useState();
  const [password , setpassword]= useState();

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input onChange={(eo) => {
            setEmail(  eo.target.value);
          }} type="email"  placeholder='Email Address'/>
          <input onChange={(eo) => {
           setpassword(eo.target.value) ;
          }} type="password" placeholder='Password'/>
        </div>
        <button onClick={(eo) => {
          eo.preventDefault();
          // const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
             
              // Signed up 
              const user = userCredential.user;
              // ...
              console.log("all good")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
              // ..
            });
        }}>Continue</button>
        <p className='loginsignup-login'>Already habe an account <span> Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;