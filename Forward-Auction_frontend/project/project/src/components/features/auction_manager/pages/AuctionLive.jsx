import React from 'react';
import InfoCards from '../../../InfoCards';
import { Link } from 'react-router-dom';
const AuctionLive=()=>{
    return(
        <div className="auction-live-page">
            <div className="breadcrumb-section">
                   <Link to="/" className="home">Home</Link>
                     <span className="divider">/</span>
                    <span className="active-page">Auction Notifications</span>
                  </div>
            <InfoCards/>
        </div>
    )

}
export default AuctionLive;