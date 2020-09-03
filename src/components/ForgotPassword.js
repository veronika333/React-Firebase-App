import React, {useState} from 'react';
import FirebaseContext from "../components/firebase/context";

export default function ForgotPassword() {
 //bring in firebase
    const { firebase } = React.useContext(FirebaseContext) //bring in the whole firebase object    
const [resetPasswordEmail, setResetPasswordEmail] = useState('')
const [isPasswordReset, setIsPasswordReset] = React.useState(false)
const [passwordResetError, setPasswordResetError] = React.useState(null)

async function handleResetPassword(){
   try {
await firebase.resetPassword(resetPasswordEmail)
setIsPasswordReset(true)
   } catch (err) {
console.error('Error when sending email', err)
setPasswordResetError(err.message)
setIsPasswordReset(false) //pass false to hide the message 'check email to reset password'
setPasswordResetError(null); 
}
}

    return (
        <div className="forgot-container">
            <input className="forgot-input" type="email"
            placeholder="Provide your account email"
            onChange={event => setResetPasswordEmail(event.target.value)}
            />
           <div>
               <button onClick={handleResetPassword}>Reset Password</button>
           </div>
           {isPasswordReset && <p>Please check your email to reset password</p>}
    {passwordResetError && <p className="error-text">{passwordResetError}</p>}
        </div>
    )
}
