//import app from 'firebase/app';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './config';

//initialize firebase app in constructor
class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
        //auth() method gives access to authentification related features
       // this.auth , so that we can reference it across the class
        this.auth = app.auth()
    }

    //have to await, because these methods return promises
   async register(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        )
     return await newUser.user.updateProfile({
            displayName: name
        })
    }
     async login(email, password) {
       return await this.auth.signInWithEmailAndPassword(
            email,
            password
        )
    }

async logout() {
await this.auth.signOut()
}

//provide email parameter to reset the passport, if forgot
async resetPassword(email){
    await this.auth.sendPasswordResetEmail(email)
}

}

// instantiate class to user
const firebase = new Firebase();
export default firebase;