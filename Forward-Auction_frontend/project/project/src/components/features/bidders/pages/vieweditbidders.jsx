import React, { useState } from 'react';
import '../../../common/form/CreateAuction.css';
import BidderList from '../../../common/table/BidderList';
import { Link } from 'react-router-dom';

const ViewEditBidder = () => {
  const [selectedBidder, setSelectedBidder] = useState(null);

  const bidders = [
    {
      id: '16',
      name: 'Aayushi Maindalkar',
      location: 'Angul',
      contactPerson: 'Akhilesh Singh',
      contactNumber: '8987665330',
      email: 'intern-lnod@jindalsteel.com',
    },
    {
      id: '17',
      name: 'Avinash Singhal',
      location: 'Raigarh',
      contactPerson: 'Akhilesh Singh',
      contactNumber: '8987665330',
      email: 'intern-lnod@jindalsteel.com',
    },
    {
      id: '18',
      name: 'Siddharth Maheshwari',
      location: 'Karnataka',
      contactPerson: 'Akhilesh Singh',
      contactNumber: '8987665330',
      email: 'intern-lnod@jindalsteel.com',
    },
    {
      id: '19',
      name: 'Chandra Steel',
      location: 'Raigarh',
      contactPerson: 'Akhilesh Singh',
      contactNumber: '8987665330',
      email: 'intern-lnod@jindalsteel.com',
    },
    {
      id: '20',
      name: 'Mittal Traders',
      location: 'Chhattisgarh',
      contactPerson: 'Akhilesh Singh',
      contactNumber: '8987665330',
      email: 'intern-lnod@jindalsteel.com',
    },
    // ➕ add other bidders here
  ];

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selected = bidders.find(b => b.id === selectedId);
    setSelectedBidder(selected ? [selected] : []);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log('Submitted Bidder:', selectedBidder);
    if (!selectedBidder || selectedBidder.length === 0) {
      alert("Please select a bidder before submitting.");
    } else {
      alert("Bidder submitted: " + selectedBidder[0].name);
    }
  };

  const handleReset = () => {
    setSelectedBidder(null);
  };

  return (
    <div className="form-container">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>

      {/* Card Box */}
      <div className="form-section">
        <h3>View Bidder Details</h3>
        <hr />

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Bidder ID*</label>
              <select onChange={handleSelectChange}>
                <option value="">--Select--</option>
                {bidders.map(b => (
                  <option key={b.id} value={b.id}>{b.id}</option>
                ))}
              </select>
            </div>
             <div className="form-group">
              <label>Bidder Name*</label>
              <select onChange={handleSelectChange}>
                <option value="">--Select--</option>
                {bidders.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>
             <div className="form-group">
              <label>Bidder Location*</label>
              <select onChange={handleSelectChange}>
                <option value="">--Select--</option>
                {bidders.map(b => (
                  <option key={b.id} value={b.id}>{b.location}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="form-row" style={{ justifyContent: 'flex-end' }}>
            <div className="button-group">
              <button type="submit" className="submit-reset-btn">Submit</button>
              <button type="button" onClick={handleReset} className="submit-reset-btn">Reset</button>
            </div>
          </div>
        </form>
        </div>

        {/* BidderList Table render */}
       
      
         
        
    
 
   {selectedBidder && selectedBidder.length > 0 && (
<div className= "form-section">
  <h3>Bidder List</h3>
         <hr/>
          
             <div className="form-row-header">
          <div className="form-group-header" >
      <label style={{ marginRight: '8px'}}>Showing</label>
      <select style={{ marginRight: '8px', width: '80px' }}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <label>entries</label>
    </div>
     <div className="form-group-header" style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ marginRight: '8px' }}>Search:</label>
      <input
        type="text"
        placeholder="Search"
        style={{ padding: '6px', fontSize: '14px' }}
      />
    </div>
     </div>
     
            <BidderList bidders={selectedBidder} handleRemoveBidder={() => setSelectedBidder(null)} />
          </div>
        
        )}
        </div>
    
  );
};

export default ViewEditBidder;
