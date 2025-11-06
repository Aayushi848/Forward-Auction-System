// src/components/InfoCards.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';


const InfoCards = ({ role }) => { //accepting role prop to navigate as per role
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    liveCount: 0,
    todayCount: 0,
    weekCount: 0,
    monthCount: 0
  });
   useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auction/stats/counts');
        setCounts(res.data);
      } catch (err) {
        console.error('Failed to fetch auction counts', err);
      }
    };

    fetchCounts();
  }, []);
  //navigation handlers based on role
  const handleNavigate = (adminPath, bidderPath) => {
    if (role === 'bidder') {
      navigate(bidderPath);
    } else {
      navigate(adminPath);
    }
  };

  return (
    <ul className="box-info">
      <li onClick={() => handleNavigate('/LiveAuctionList', '/BidderLiveAuctionList')} style={{ cursor: 'pointer' }}>
        <div className="icon-container darkgrey">
        <i className="fas fa-gavel"></i>
        </div>
        <span className="text">
          <h3>{counts.liveCount}</h3>
          <p> Live Auctions</p>
        </span>
     </li>
   <li onClick={() => handleNavigate('/TodaysAuctionList','/BidderTodaysAuctionList')} style={{ cursor: 'pointer' }}>
        <div className="icon-container teal">
        <i className="fas fa-user-check"></i>
        </div>
        <span className="text">
          <h3>{counts.todayCount}</h3>
          <p>Today's Auction</p>
        </span>
      </li>
      
      <li onClick={() => handleNavigate('/CurrentWeekAuction', '/BidderCurrentWeekAuction')} style={{ cursor: 'pointer' }}>
        <div className="icon-container purple">
        <i className="fas fa-dolly"></i>
        </div>
        <span className="text">
          <h3>{counts.weekCount}</h3>
          <p>Current Week Auction</p>
        </span>
      </li>
       <li onClick={() =>  handleNavigate('/CurrentMonthAuction',  '/BidderCurrentMonthAuction')} style={{ cursor: 'pointer' }}>
        <div className="icon-container blue">
        <i className="bx bxs-dollar-circle"></i>
        </div>
        <span className="text">
          <h3>{counts.monthCount}</h3>
          <p>Current Month Auction</p>
        </span>
      </li>
    </ul>
  );
};

export default InfoCards;
