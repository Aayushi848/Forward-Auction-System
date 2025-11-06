// src/pages/ViewEditAuction.jsx
import React, {useState} from 'react';
//import './ViewEditAuction.css'; // Optional if you're separating styles, else reuse style.css
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ViewEditAuction = () => {
    const navigate = useNavigate(); 
    const location = useLocation();
   const [auctionId, setAuctionId] = useState(location.state?.auctionId || '');

    const handleAddBidderClick = () => {
    navigate('/FindBidderPage');
  };
  return (
    <div className="create-auction-container">
       <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View/Edit Auction</span>
      </div>
      <div className="bidder-list-container">
        <h2 style={{ marginBottom: '20px' }}>View Auctions</h2>
        <form className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>Auction ID</label>
              <input type="text" value={auctionId} 
              onChange={(e) => setAuctionId(e.target.value)}  /> {/* if you use react state to fetch aucttionid , then it will be readonly unless you add this, which will enable changing the fetched auction id.*/}
            </div>
            <div className="form-group">
              <label>Auction Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Creation Date From</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Creation Date To</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Start Date From</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Start Date To</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Bidder Name</label>
              <button className="add-bidder-btn" type="button" onClick={handleAddBidderClick}>
                Add Bidder
              </button>
            </div>
            <div className="form-group">
              <label>Product Code</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" />
            </div>
          </div>
         <button
           type="button"
              className="add-bidder-btn"
            style={{ marginTop: '20px' }}
            onClick={() => {
                navigate('/ViewAuction', { state: { auctionId } }); // 👈 Send auctionId if needed
                      }}
           >
             Submit
           </button>
        </form>
      </div>
    </div>
  );
};

export default ViewEditAuction;
