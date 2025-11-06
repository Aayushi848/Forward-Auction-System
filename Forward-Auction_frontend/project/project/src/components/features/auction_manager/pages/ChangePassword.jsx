import React from 'react';
import { Link } from 'react-router-dom';

const ChangePassword=()=>{
    return(
        <div className="Change-Password-Page">
            <div className="breadcrumb-section">
                <Link to ="/" className="home">Home</Link>
                <span className="divider">/</span>
                <span className="active-page">Auction Notifications</span>
            </div>
            <div className="form-section">
                <h3>Change Password</h3>
                <hr/>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" placeholder="Enter Username"/>
                </div>
                   <button
  onClick={() => {
    // Replace this logic with real password change logic later
    alert("Password changed (simulated).");
  }}
  className="add-bidder-btn"
  style={{ fontSize: '13px', padding: '10px 5px', minWidth: '150px', marginTop: '10px' }}
>
  Change Password
</button>
            </div>
         

        </div>
    )
};
export default ChangePassword;
