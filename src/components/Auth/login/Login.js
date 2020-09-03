import React, {useState } from 'react';
import './login.css';

export default function Login() {
const [login, setLogin] = useState(true);


    return (
        <div className="login-container">
            <h2>{login ? "Login" : "Create Account"}</h2>
            <form>
                {!login && (<input type="text" placeholder="Your name" autoComplete="off" />)}
                <input type="email" placeholder="Your email" autoComplete="off" />
                <input type="password" placeholder="Type a secure password" />
           <button type="submit">Submit</button>
           <button type="button" onClick={() => setLogin(prevLogin => !prevLogin)}>
{!login ? "Or sign in" : "Or create account"}
           </button>
            </form>
        </div>
    )
}
