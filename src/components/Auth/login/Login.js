import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="login-container">
            <h2>Create Account</h2>
            <form>
                <input type="text" placeholder="Your name" autoComplete="off" />
                <input type="email" placeholder="Your email" autoComplete="off" />
                <input type="password" placeholder="Type a secure password" />
           <button type="submit">Register</button>
           <button type="button">
Already have an account? Log in
           </button>
            </form>
        </div>
    )
}
