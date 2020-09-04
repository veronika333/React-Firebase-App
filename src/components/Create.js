import React from 'react';
import useFormValid from '../components/Auth/login/useFormValid'; //import custom hook
import validateCreateLink from '../components/Auth/login/validateCreateLink';
import { FirebaseContext } from '../../src/components/firebase';

const INITIAL_STATE = {  //creating object with initial state
    description: "",
    url: ""
}

export default function Create(props) {
    const { firebase, user } = React.useContext(FirebaseContext) //getting access to firebase
    //second argument is validation function
 const { handleSubmit, handleChange, values, errors } = useFormValid(INITIAL_STATE, validateCreateLink, handleCreateLink)  //executing the hook in the top of component, pass in initial state
    //authenticate users; it will be called only if the form is valid
    function handleCreateLink(){
   //check if the user is authenticated     
if(!user){
props.history.push('/login')
}
//else if we have a user
else {
const {url, description} = values;
const newLink = {
    url,
    description,
    postedBy: {
        id: user.uid,
        name: user.displayName
    },
    votes: [],
    comments: [],
    created: Date.now()
}
//the method will create a new collection if we don't have one currently
firebase.db.collection('links').add(newLink) //to add a new link, passing add method with newLink object
props.history.push('/');
}
    }

    return (
        <div className="create-container">
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleChange}
            value = {values.description}
            name="description"
            placeholder="Add description to your link"
            autoComplete="off"
            type="text"
            className={errors.description && 'error-text'}>
            </input>
    {errors.description && <p className="error-text">{errors.description}</p>}
            <input 
            onChange={handleChange}
            value={values.url}
            name="url"
            placeholder="Type URL for the link"
            autoComplete="off"
            type="url"
            className={errors.url && 'error-text'}>
            </input>
            {errors.url && <p className="error-text">{errors.url}</p>}
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
