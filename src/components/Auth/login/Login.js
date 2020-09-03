import React, {useState } from 'react';
import './login.css';
import useFormValid from "./useFormValid";

//using custom hook useValid for form validation
//creating an object to have properties and reuse it
const INITIAL_STATE = {
name: "",
email: "",
password: ""
}

export default function Login(props) {
const [login, setLogin] = useState(true);
//call the custom hook in the top, passing initial state:
const { handleSubmit, handleChange, values } = useFormValid(INITIAL_STATE);
    return (
        <div className="login-container">
            <h2>{login ? "Login" : "Create Account"}</h2>
            <form onSubmit={handleSubmit}>
                {!login && (<input name="name" value={values.name} onChange={handleChange} type="text" placeholder="Your name" autoComplete="off" />)}
                <input name="email" value={values.email} onChange={handleChange} type="email" placeholder="Your email" autoComplete="off" />
                <input name="password" value={values.password} onChange={handleChange} type="password" placeholder="Type a secure password" />
           <button type="submit">Submit</button>
           <button type="button" onClick={() => setLogin(prevLogin => !prevLogin)}>
{!login ? "Or sign in" : "Or create account"}
           </button>
            </form>
        </div>
    )
}
