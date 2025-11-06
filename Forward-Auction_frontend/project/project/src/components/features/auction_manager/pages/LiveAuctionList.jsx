// src/pages/AuctionListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../common/table/BidderList';
import '../../../features/auctions/pages/CreateAuction';
import '../../../common/form/CreateAuction.css'; // Ensure correct path to your CreateAuction.css
import '../../../common/table/BidderList.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const LiveAuctionList = () => {
  // Dummy auction data for now
  const auctionList = [
    {
      auctionId: 'AUC1001',
      itemCode: 'ITM001',
      itemDesc: 'Steel Rods',
      quantity: 500,
      uom: 'Kg',
      openingPrice: 10000,
      reservePrice: 12000,
      lastBid: 12500,
      totalBid: 5,
      noOfBidders: 3,
      userStatus: 'Active',
      auctionStatus: 'Live',
    },
    {
      auctionId: 'AUC1002',
      itemCode: 'ITM002',
      itemDesc: 'Aluminium Sheets',
      quantity: 300,
      uom: 'Kg',
      openingPrice: 5000,
      reservePrice: 6000,
      lastBid: 6100,
      totalBid: 2,
      noOfBidders: 1,
      userStatus: 'Inactive',
      auctionStatus: 'Closed',
    },
    // Add more as needed
  ];

  return (
    <div className="form-container">
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">Auction List</span>
      </div>

      <div className="form-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Live Auctions </h3>
          <Link to="/LiveBidders" style={{ fontSize: '12px', textDecoration: 'underline', color: '#007bff' }}>
            View Live Bidders
             </Link>
             </div>
        <hr />

        <div className="bidder-table-wrapper">
          <div className="table-scroll">
            <table className="bidder-table live-auction-table">
              <thead >
                <tr>
                  <th>Auction ID</th>
                  <th>Item Code</th>
                  <th>Item Description</th>
                  <th>Quantity</th>
                  <th>UOM</th>
                  <th>Opening Price</th>
                  <th>Reserve Price</th>
                  <th>Last Bid</th>
                  <th>Total Bid</th>
                  <th>No. of Bidders</th>
                  <th>User Status</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '9.52px' }}>
                {auctionList.map((auction, index) => (
                  <tr key={index} style={{ fontSize: '9.52px' }}>
                    <td>{auction.auctionId}</td>
                    <td>{auction.itemCode}</td>
                    <td>{auction.itemDesc}</td>
                    <td>{auction.quantity}</td>
                    <td>{auction.uom}</td>
                    <td>{auction.openingPrice}</td>
                    <td>{auction.reservePrice}</td>
                    <td>{auction.lastBid}</td>
                    <td>{auction.totalBid}</td>
                    <td>{auction.noOfBidders}</td>
                    <td>{auction.userStatus}</td>
                    <td>{auction.auctionStatus}</td>
                    <td>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '8px' }}>
                        <i className="fas fa-eye" style={{ color: '#007bff' }}></i>
                      </button>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <i className="fas fa-trash" style={{ color: 'red' }}></i>
                      </button>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveAuctionList ;
