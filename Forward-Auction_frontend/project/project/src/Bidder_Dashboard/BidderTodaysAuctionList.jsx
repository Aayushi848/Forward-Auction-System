// src/pages/BidderTodaysAuctionList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/common/form/CreateAuction.css';
import '../components/common/table/BidderList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BidderTodaysAuctionList = () => {
  const [todaysAuctions, setTodaysAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodaysAuctions = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auction/list/today');
        setTodaysAuctions(res.data);
      } catch (err) {
        console.error("Error fetching today's auctions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodaysAuctions();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="form-container">
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">Bidder Today's Auction List</span>
      </div>

      <div className="form-section">
        <h3>Auction Details</h3>
        <hr />

        <div className="bidder-table-wrapper">
          <div className="table-scroll">
            <table className="bidder-table live-auction-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Auction ID</th>
                  <th>Auction Description</th>
                  <th>Auction Start Date</th>
                  <th>Auction Start Time</th>
                  <th>Auction End Time</th>
                  <th>Location</th>
                  <th>Product Category</th>
                  <th>Status</th>
                  <th>Last Bid</th>
                  <th>Package List / T&C</th>
                  <th>Auction No.</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '9.52px' }}>
                {todaysAuctions.length === 0 ? (
                  <tr>
                    <td colSpan="12">There were no results found.</td>
                  </tr>
                ) : (
                  todaysAuctions.map((auction, index) => (
                    <tr key={auction.auctionId}>
                      <td>{index + 1}</td>
                      <td>{auction.auctionId}</td>
                      <td>{auction.auctionDesc}</td>
                      <td>{new Date(auction.startDate).toLocaleDateString()}</td>
                      <td>{new Date(auction.startDate).toLocaleTimeString()}</td>
                      <td>{new Date(auction.endDate).toLocaleTimeString()}</td>
                      <td>{auction.location}</td>
                      <td>{auction.productCategory}</td>
                      <td>{auction.status}</td>
                      <td>{auction.lastBid}</td>
                      <td>
                        <a href={auction.packageListURL} target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      </td>
                      <td>{auction.auctionNo}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidderTodaysAuctionList;
