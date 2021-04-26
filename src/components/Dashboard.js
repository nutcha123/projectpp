import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import { Link } from 'react-router-dom'



const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <div className="container mt-5">
                <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Log Out</button>
                <h1>FIND MY PET</h1>
                <h4>Information</h4>
            
                <div className="mb-3">
                <label for="exampleInputName" className="form-label">Name</label>
                <input type="Name" name="Name" className="form-control" id="exampleInputName" />
                </div>
                <div className="mb-3">
                <label for="exampleInputLName" className="form-label">Last Name</label>
                <input type="LName" name="LName" className="form-control" id="exampleInputLName" />
                </div>
                <div className="mb-3">
                <label for="exampleInputaddress" className="form-label">Address</label>
                <input type="address" name="address" className="form-control" id="exampleInputaddress" />
                </div>

                {currentUser ? (
                    <Link to="/page1">Click to PAGE1</Link>
                ) : (
                    <p>
                        <Link to="/dashboard" className="btn btn-primary"></Link>
                    </p> 
                )}
                
                
            </div>
        </div>
    )
}



export default DashBoard;