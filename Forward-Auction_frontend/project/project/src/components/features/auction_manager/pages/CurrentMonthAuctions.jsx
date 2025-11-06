// src/pages/AuctionListPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCurrentMonthAuctions } from '../service/auctionservice';
import '../../../common/table/BidderList';
import '../../../features/auctions/pages/CreateAuction';
import '../../../common/form/CreateAuction.css'; // Ensure correct path to your CreateAuction.css
import '../../../common/table/BidderList.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const CurrentMonthAuction = () => {
  const [CurrentMonthAuctionList, setCurrentMonthAuctionList] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentMonthAuctions();
        setCurrentMonthAuctionList(data);
      } catch (error) {
        console.error('Error fetching current month auctions:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div className="form-container">
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">Auction List</span>
      </div>

      <div className="form-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Current Month Auctions</h3>
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
                  <th>Auction Start Date</th>
                  <th>Auction Start Time</th>
                  <th>Auction End Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '9.52px' }}>
                {CurrentMonthAuctionList.map((auction, index) => (
                  <tr key={index} style={{ fontSize: '9.52px' }}>
                    <td>{auction.AuctionDetailId}</td>
                    <td>{auction.ItemCode}</td>
                    <td>{auction.ItemDesc}</td>
                    <td>{auction.AuctionQty}</td>
                    <td>{auction.UOM}</td>
                    <td>{auction.OpeningPrice}</td>
                    <td>{auction.ReservePrice}</td>
                    <td>{auction.formattedStartDate}</td>
                    <td>{auction.formattedStartTime}</td>
                    <td>{auction.formattedEndTime}</td>
                    <td>{auction.status}</td>
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

export default CurrentMonthAuction ;
