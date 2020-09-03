import {useState, useEffect} from 'react';

 function useFormValid(initialState, validate, authenticate) {
  const [values, setValues] = useState(initialState);
const [errors, setErrors] = useState({});
const [submitting, setSubmitting] = useState(false);

//authenticate the user only if there are no errors
useEffect(() => {
if(submitting){
const noErrors = Object.keys(errors).length === 0;
if (noErrors){
    authenticate();
    setSubmitting(false)
}
//otherwise if there are errors
else {
    setSubmitting(false)
}
}
}, [errors]) //add errors, so it will run the callback function only when errors change in some way

  //function has access to change event
  function handleChange(event){
      //persist() to access the event properties in an asynchronous way, oterwise cannot get properties of 'null'
      event.persist();
      setValues(previousValues => ({
          ...previousValues,
          [event.target.name]: event.target.value
      }))
  }

function handleBlur(){
    const validationErrors = validate(values);
    setErrors(validationErrors); 
}



function handleSubmit(event){
    //make sure the page does not reload
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true)
    //console.log({values})
}
//return function to make them available in Login, and return state object's values
  return { handleSubmit, handleBlur, handleChange, values, errors, submitting }
}
export default useFormValid;