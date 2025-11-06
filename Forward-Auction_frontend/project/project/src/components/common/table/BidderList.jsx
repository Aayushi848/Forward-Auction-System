// src/pages/BidderList.jsx
import React from 'react';
import './BidderList.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

export default function BidderListPage({ bidders = [], handleRemoveBidder, handleEditBidder= () => {} }) {
  return (
    <div className="bidder-list-page">
      {/*<div className="breadcrumb">
        <span className="home">Home</span>
        <span className="divider">/</span>
        <span className="active-page">Bidder List</span>
      </div>*/}


      <div className="bidder-table-wrapper">
        
       
        <div className="table-scroll">
          <table className="bidder-table">
            <thead>
              <tr>
                <th>Bidder ID</th>
                <th>Bidder Name</th>
                <th>Location</th>
                <th>Contact Person</th>
                <th>Contact Number</th>
                <th>Email ID</th>
                <th>Action</th>
            
              </tr>
            </thead>
            <tbody>
              {bidders.map((b, i) => (
                <tr key={i}>
                  
                  <td>{b.id}</td>
                  <td>{b.name}</td>
                  <td>{b.location}</td>
                  <td>{b.contactPerson}</td>
                  <td>{b.contactNumber}</td>
                  <td>{b.email}</td>
                  
                   <td>
                    <button
                      onClick={() => handleRemoveBidder(b.id)}
                      className="remove-btn"
                      title="Remove bidder"
                    >
                    🗑️
                    </button>
                    <button onClick={() => handleEditBidder(b, i)}><FaEdit /></button>
                  </td>
                   
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
