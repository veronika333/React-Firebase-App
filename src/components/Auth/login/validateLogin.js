export default function validateLogin(values) {
     //create errors object, which is initially empty
    let errors = {}

    //Email errors
if(!values.email){
errors.email = "Email required";
} 
else if 
(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
{
    errors.email = "Invalid email address";
}
    //Password error
if (!values.password){
   errors.password = "Password required";
}
else if (values.password.length < 6) {
    errors.password = "Password must contain more than 5 characters"
}
    //return errors object to send it back to handleSubmit in the hook useFormValid
    return errors;
}
