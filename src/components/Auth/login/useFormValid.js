import React, {useState} from 'react';

 function useFormValid(initialState) {
  const [values, setValues] = useState(initialState);

  //function has access to change event
  function handleChange(event){
      //persist() to access the event properties in an asynchronous way, oterwise cannot get properties of 'null'
      event.persist();
      setValues(previousValues => ({
          ...previousValues,
          [event.target.name]: event.target.value
      }))
  }

function handleSubmit(event){
    //make sure the page does not reload
    event.preventDefault();
    console.log({values})
}
//return function to make them available in Login, and return state object's values
  return { handleSubmit, handleChange, values }
}
export default useFormValid;