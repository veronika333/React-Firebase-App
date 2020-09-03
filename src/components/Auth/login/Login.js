import React, {useState } from 'react';
import './login.css';
import useFormValid from "./useFormValid";
import validateLogin from "./validateLogin";
import firebase from '../../firebase';

//using custom hook useValid for form validation
//creating an object to have properties and reuse it
const INITIAL_STATE = {
name: "",
email: "",
password: ""
}

export default function Login(props) {
const [login, setLogin] = useState(true);
const [firebaseError, setFirebaseError] = useState(null);
//call the custom hook in the top, passing initial state:
//validateLogin - second argument in the hook
const { handleSubmit, handleBlur, handleChange, values, errors, submitting } = useFormValid(INITIAL_STATE, validateLogin, authenticateUser);
   
//the function will call login or register method of firebase instance
async function authenticateUser(){
    const {name, email, password } = values;
    //first determin, which to call
    //wrap in try and catch. otherwise if try to login with user that doesn't exit, it says in console 'unhandled promise'
    try {
          const response = 
login ? await firebase.login(email, password) //if login is true, excecute login method
: await firebase.register(name, email, password); //otherwise excecute register method
//console.log({ response });
    }
    catch (err){
        console.error('Authentication error', err)
        setFirebaseError(err.message);
    }
  
}


return (
        <div className="login-container">
            <h2>{login ? "Login" : "Create Account"}</h2>
            <form onSubmit={handleSubmit}>
                {!login && (<input name="name" value={values.name} onChange={handleChange}  type="text" placeholder="Your name" autoComplete="off" />)}
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && 'error-input'} type="email" placeholder="Your email" autoComplete="off" />
                {errors.email && <p className="error-text">{errors.email}</p>}
                <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.password && 'error-input'} type="password" placeholder="Type a secure password" />
                {errors.password && <p className="error-text">{errors.password}</p>}
          
{firebaseError && <p className="error-text">{firebaseError}</p>}
           <button type="submit" disabled={submitting}>Submit</button>
           <button type="button" onClick={() => setLogin(prevLogin => !prevLogin)}>
{!login ? "Or sign in" : "Or create account"}
           </button>
            </form>
        </div>
    )
}
