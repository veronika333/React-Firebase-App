import React, { useEffect } from 'react';
import FirebaseContext from '../../src/components/firebase/context';
//import useAuth from '../components/Auth/login/useAuth';

export default function AllLinks(props) {
   const { firebase } = React.useContext(FirebaseContext)

useEffect(() => {
    getLinks()
}, []) //empty set of dependencies to make sure that it runs on componen mount
    

function getLinks(){
firebase.db.collection('links').onSnapshot(handleSnapshot) //onSnapshot - active listener, inside snapshot-reference to another function
}

function handleSnapshot(snapshot){ //passing snapshot of the data
  const links = snapshot.docs.map(doc => { //snapshot gets access to documents in collection
        return { id: doc.id, ...doc.data() } //go through the array docs, map access to each individual document
    }) //data is a method
    console.log({ links });
}

return (
        <div>
            All links
        </div>
    )
}
