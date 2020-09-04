import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FirebaseContext } from './firebase';

function InDetail({link, index, showCount, history }) {
    //bring in firebase
    const {firebase, user} = React.useContext(FirebaseContext)
    function handleVote(){
if (!user) {
history.push('/login')
} else {
    //updating document in firebase
    const voteRef = firebase.db.collection('links').doc(link.id)
//to update a document, first need to get it
    voteRef.get().then(doc => {
        if (doc.exists){   //exist is a property in firestore, available on documents
const previousVotes = doc.data().votes;
const vote = { votedBy: { id: user.uid, name: user.displayName } }
const updatedVotes = [...previousVotes, vote];
voteRef.update({ votes: updatedVotes }) //spesifying what property needs to be updated
        }
    })
}
    }
    
    
    return (
        <div className="centered">
        <div className="detail-container">
    {showCount && <h3>Link #{index}.</h3>}
    {link.description}<br /><p className="link">{link.url}</p>
<br/>
    <button onClick={handleVote}>♥</button>
        {link.votes.length} votes by {link.postedBy.name} at the moment
    {/* <Link to={`/link/${link.id}`}>
    </Link> */}
        </div>
        </div>
    )
}
export default withRouter(InDetail);