import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
//import { Link } from 'react-router-dom'



const P1 = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <div className="container mt-5">
                <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Log Out</button>
                <h1>PAGE1</h1>
                


            </div>
        </div>
    )
}



export default P1;