import { useEffect, useState } from 'react';
import firebase from '../../firebase';

export default function useAuth() {
    const [authUser, setAuthUser] = useState(null)
    //useEffect hook to execute listener onAuthStateChange
    useEffect(() => { //unsubscribe - to remove listener when we don't need it
const unsubscribe = firebase.auth.onAuthStateChanged(user => {
   if (user) { //if there is a user, we take him and provide to the app
setAuthUser(user) //passing user data
   } 
   else { //if we don't have user, pass initial value null
       setAuthUser(null)
   }
})

return () => unsubscribe() //so that we don'e execute listener unnecessarily
    }, [])      
     return authUser;
}
