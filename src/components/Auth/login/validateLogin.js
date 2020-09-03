import React from 'react'

 function validateLogin(values) {
     //create errors object, which is initially empty
    let errors = {}

    //Email errors
if(!values.email){
errors.email = "Email required"
} 
else if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
    errors.email = "Invalid email address"
}
    //Password error
if (!values.password){
   errors.password = "Password required" 
}
else if (values.password.length < 6) {
    errors.password = "Password must contain more than 5 characters"
}
    //return errors object to send it back to handleSubmit in the hook useFormValid
    return errors;
}
export default validateLogin;