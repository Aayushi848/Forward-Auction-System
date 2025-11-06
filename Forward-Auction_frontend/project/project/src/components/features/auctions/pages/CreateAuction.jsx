import React, { useState,useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaPlus, FaTimes } from 'react-icons/fa';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import '../../../common/form/CreateAuction.css';
import '../../../common/table/BidderList.css';
import BidderList from '../../../common/table/BidderList';
import Dashboard from '../../../../dashboard' ;

export default function CreateAuction() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const [bidders, setBidders] = useState(
    location.state?.selectedBidders || [
      {
        id: '2343',
        name: 'Aayushi Maindalkar',
        location: 'Mumbai',
        contactPerson: 'Akhilesh Singh',
        contactNumber: '8987665330',
        email: 'intern-lnod@jindalsteel.com',
      },
      {
        id: '2344',
        name: 'Amit Sharma',
        location: 'Mumbai',
        contactPerson: 'Rohit Verma',
        contactNumber: '9876543210',
        email: 'amit.sharma@example.com',
      },
    ]
  );

 
const [itemForm, setItemForm] = useState({
  lotNumber: '',
  category: '',
  description: '',
  quantity: '',
  uom: '',
  openingPrice: '',
  reservePrice: '',
  bidIncrement: ''
});
 const [itemList, setItemList] = useState([]);
 const handleAddItem = () => {
  // Basic validation
  if (
    !itemForm.lotNumber ||
    !itemForm.category ||
    !itemForm.description ||
    !itemForm.quantity ||
    !itemForm.uom ||
    !itemForm.openingPrice ||
    !itemForm.reservePrice ||
    !itemForm.bidIncrement
  ) {
    alert('Please fill all item fields before adding.');
    return;
  }

  setItemList([...itemList, itemForm]);
  setItemForm({
    lotNumber: '',
    category: '',
    description: '',
    quantity: '',
    uom: '',
    openingPrice: '',
    reservePrice: '',
    bidIncrement: '',
  });
};

  const [showConfigurableTime, setShowConfigurableTime] = useState(false);

  const handleCheckboxChange = (label) => {
    if (label === "Allow Configurable Time") {
      setShowConfigurableTime(!showConfigurableTime);
    }
  };

  const handleAddBidder = () => {
   navigate('/FindBidderPage', { state: { selectedBidders: bidders, from: 'CreateAuction' } });

  };

  const handleRemoveBidder = (idToRemove) => {
    setBidders((prev) => prev.filter((bidder) => bidder.id !== idToRemove));
  };
  const getCurrentDateTimeLocal = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0,16);
};

const [auctionName, setAuctionName] = useState('');
const [startDate, setStartDate] = useState(null);
const [closeDate, setCloseDate] = useState(null);
const [startTime, setStartTime] = useState('');
const [closeTime, setCloseTime] = useState('');
const [currencyType, setCurrencyType] = useState('');
const [auctionLocation, setAuctionLocation] = useState('');
const [allowAutoBid, setAllowAutoBid] = useState(false);
const [allowConfigurableTime, setAllowConfigurableTime] = useState(false);
  const today = new Date();
  // For start time restriction (disable past times today)
  const minStartTime =
    startDate && startDate.toDateString() === today.toDateString()
      ? today
      : new Date().setHours(0, 0, 0, 0);
      
  // For close time restriction (should be after start time)
  const minCloseTime = React.useMemo(() => {
  if (closeDate && startDate && closeDate.toDateString() === startDate.toDateString()) {
    const startPlusOneMinute = new Date(startDate.getTime() + 60000);
    return startPlusOneMinute; // Close time at least 1 min after start time
  }
  return new Date().setHours(0, 0, 0, 0);
}, [closeDate, startDate]);
  return (
    <div className="form-container">
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>

      <div className="form-section">
        <h3>Create Auction</h3>
        <hr />

        <div className="form-row">
          {/* auction format/type/rule */}
          <div className="form-group">
            <label>Auction Format *</label>
            <select disabled className="read-only-select">
              <option>Forward Auction</option>
            </select>
          </div>
          <div className="form-group">
            <label>Auction Rule *</label>
            <select disabled className="read-only-select">
              <option>Highest Bid Wins</option>
            </select>
          </div>
          <div className="form-group">
            <label>Auction Type *</label>
            <select disabled className="read-only-select">
              <option>English</option>
            </select>
          </div>
        </div>

        <div className="checkbox-group">
          {["Hide Opening Price", "Allow Auto Bid", "Hide Quantity", "Allow Configurable Time"].map(label => (
            <label key={label}>
              <input type="checkbox" onChange={() => handleCheckboxChange(label)} />
              {label}
            </label>
          ))}
        </div>

        {showConfigurableTime && (
          <div className="form-row">
            <div className="form-group">
              <label>Configurable Time (In Minutes)</label>
              <input type="number" placeholder="Enter time in minutes" />
            </div>
            <div className="form-group">
              <label>Repetition</label>
              <input type="number" placeholder="Enter repetition count" />
            </div>
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label>Auction Name *</label>
            <input type="text" placeholder="Auction Name"
             value={auctionName}
      onChange={(e) => setAuctionName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Start Date & Time *</label>
            <DatePicker
    selected={startDate}
    onChange={(date) => {
      setStartDate(date);
      const now = new Date();
    if (date < now) {
      alert("Start time cannot be in the past.");
      return;
    }
    setStartDate(date);
      // Reset close date if it becomes invalid
      if (closeDate && date >= closeDate) {
        setCloseDate(null);
      }
    }}
    showTimeSelect
    timeIntervals={1}
    dateFormat="MMMM d, yyyy h:mm aa"
    minDate={today}
    minTime={minStartTime}
    maxTime={new Date().setHours(23, 59, 59, 999)}
    placeholderText="Select start date & time"
    className="form-group"
  />
</div>
          
          <div className="form-group">
            <label>Close Date & Time *</label>
           <DatePicker
  selected={closeDate}
  onChange={(date) => {
    if (!startDate) {
      alert("Please select Start Date & Time first.");
      return;
    } // If same date, ensure close time is strictly after start time
    if (date.toDateString() === startDate.toDateString() && date <= startDate) {
      alert("Close time must be after start time.");
      return;
  }

    
  setCloseDate(date);
}}
  
  showTimeSelect
  timeIntervals={1}
  dateFormat="MMMM d, yyyy h:mm aa"
  minDate={startDate || today} // disables dates before start date
  minTime={
    closeDate && startDate && closeDate.toDateString() === startDate.toDateString()
      ? new Date(startDate.getTime() + 60000) // +1 min to prevent equal or earlier times
      : new Date().setHours(0, 0, 0, 0)
  }
  maxTime={new Date().setHours(23, 59, 59, 999)}
  placeholderText="Select close date & time"
  className="form-group"
  disabled={!startDate}
/>
          </div>
          
          <div className="form-group">
            <label>Currency Type *</label>
            <select
            value={currencyType}
      onChange={(e) => setCurrencyType(e.target.value)}>
              <option>--Select--</option>
              <option>Rupee</option>
              <option>$ US Dollar</option>
            </select>
          </div>
          <div className="form-group">
            <label>Auction Location *</label>
            <select
            value={auctionLocation}
      onChange={(e) => setAuctionLocation(e.target.value)}>
              <option>--Select--</option>
              <option>Raigarh</option>
              <option>Angul</option>
              <option>Korba</option>
              <option>Jaipur</option>
            </select>
          </div>
          {/* reusable form-group for upload */}
          <div className="form-group"> 
  <label>Upload T&C *</label>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <input
      type="text"
      readOnly
      value={
        uploadedFiles.length
          ? `${uploadedFiles.length} file${uploadedFiles.length > 1 ? 's' : ''} uploaded`
          : ''
      }
      placeholder="Upload files"
      onClick={() => fileInputRef.current?.click()}
      className="file-name-display"
      style={{ flex: 1, cursor: 'pointer' }}
    />
    <input
      type="file"
      multiple
      ref={fileInputRef}
      onChange={(e) => {
        const files = Array.from(e.target.files);
        setUploadedFiles((prev) => [...prev, ...files]);
      }}
      style={{ display: 'none' }}
    />
    <button
      type="button"
      onClick={() => fileInputRef.current?.click()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#f0f0f0' : '#ffffff',
        border: '1px solid #456182',
        padding: '8px',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      <FaPlus style={{ color: '#456182' }} />
    </button>
  </div>

  {/* File chips preview */}
  {uploadedFiles.length > 0 && (
    <div className="uploaded-files-container">
      {uploadedFiles.map((file, index) => (
        <div key={index} className="uploaded-file-chip">
          <a
            href={URL.createObjectURL(file)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#333' }}
          >
            <span>{file.name}</span>
          </a>
          <button
            type="button"
            onClick={() => {
              const fileURL = URL.createObjectURL(file);
              URL.revokeObjectURL(fileURL);
              setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
            }}
            className="remove-file-btn"
            title="Remove file"
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  )}
</div>

        </div>
      </div>

    
      <div className="bidder-list-container">
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
         <h3 style={{ margin: 0 }}>Bidder List</h3>
       
    <button
      onClick={handleAddBidder}
      className="add-bidder-btn"
    >
      + Add Bidder
    </button>
    </div>
     

        <BidderList
          bidders={bidders}
          handleRemoveBidder={handleRemoveBidder}
        />
      </div>
      
      <div
        className="form-section">
            <h3>Item List</h3>
            <hr/>
             <div className="form-row">
    <div className="form-group">
      <label>Lot Number</label>
      <input type="text" placeholder="Enter lot number" value={itemForm.lotNumber}
       onChange={(e) => setItemForm({ ...itemForm, lotNumber: e.target.value })} />
    </div>

    <div className="form-group">
      <label>Product Category</label>
      <select value={itemForm.category}
  onChange={(e) => setItemForm({ ...itemForm, category: e.target.value })}
>
        <option>--Select--</option>
        <option>Scrap</option>
        <option>Raw Material</option>
        <option>Machinery</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <div className="form-group">
  <label>Description</label>
  <input
    type="text"
    placeholder="Description of item"
    value={itemForm.description}
    onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
  />
</div>



    <div className="form-group">
      <label>Quantity</label>
      <input type="number" placeholder="Enter quantity" 
      min="0"
  value={itemForm.quantity}
  onChange={(e) => setItemForm({ ...itemForm, quantity: e.target.value })}
/>
    </div>

    <div className="form-group">
      <label>UOM</label>
      <select value={itemForm.uom}
  onChange={(e) => setItemForm({ ...itemForm, uom: e.target.value })}
>
        <option>--Select--</option>
        <option>Kg</option>
        <option>Ton</option>
        <option>Piece</option>
      </select>
    </div>

    <div className="form-group">
  <label>Opening Price</label>
  <input
    type="number"
    placeholder="Enter opening price"
    min="0"
    value={itemForm.openingPrice}
    onChange={(e) => setItemForm({ ...itemForm, openingPrice: e.target.value })}
  />
</div>

    <div className="form-group">
  <label>Reserve Price</label>
  <input
    type="number"
    placeholder="Enter reserve price"
    min="0"
    value={itemForm.reservePrice}
    onChange={(e) => setItemForm({ ...itemForm, reservePrice: e.target.value })}
  />
</div>


   <div className="form-group">
  <label>Bid Increment</label>
  <input
    type="number"
    placeholder="e.g. 100 or 2%"
    min="0"
    value={itemForm.bidIncrement}
    onChange={(e) => setItemForm({ ...itemForm, bidIncrement: e.target.value })}
  />
</div>

  </div>
   <div className="form-section">
   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
         <h3 style={{ margin: 0 }}>Item List</h3>
       
    <button
      onClick={handleAddItem}
      className="add-bidder-btn"
    >
      + Add Item
    </button>
    </div>
    <div className="bidder-table-wrapper">
  <div className="table-scroll">
        
        <table className="bidder-table">

          <thead>
            <tr>
              <th>Remove</th>
              <th>Lot Number</th>
              <th>Category</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>UOM</th>
              <th>Opening Price</th>
              <th>Reserve Price</th>
              <th>Bid Increment</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, index) => (
              <tr key={index}>
                <td>
                  <button
                      onClick={() => handleRemoveBidder(b.id)}
                      className="remove-btn"
                      title="Remove bidder"
                    >
                    🗑️
                    </button>
                </td>
                <td>{item.lotNumber}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.uom}</td>
                <td>{item.openingPrice}</td>
                <td>{item.reservePrice}</td>
                <td>{item.bidIncrement}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
        </div>


</div>
      
      <div className="form-row" style={{ justifyContent: 'flex-end' }}>
  <button
    className="add-bidder-btn"
  onClick={async () => {
  const start = new Date(startDate);
  const close = new Date(closeDate);
  if (close <= start) {
    alert("Close date & time must be after start date & time.");
    return;
  }
  
  if (
    !auctionName || !startDate || !closeDate ||
    !currencyType || !auctionLocation ||
    itemList.length === 0
  ) {
    alert("Please fill all required fields and add at least one item.");
    return;
  }

  // Take first item for now
  const item = itemList[0];

  const auctionData = {
    ItemCode: item.lotNumber,
    ItemDesc: item.description,
    AuctionQty: parseFloat(item.quantity),
    UOM: item.uom,
    RequiredDate: new Date(startDate).toISOString().slice(0, 19).replace('T', ' '), // converts the iso standard date to sql supported format
    OpeningPrice: parseFloat(item.openingPrice),
    ReservePrice: parseFloat(item.reservePrice),
    BidDecrement: parseFloat(item.bidIncrement),
    bidDecrementType: "Fixed", // You can make this dynamic later
    AuctionDesc: auctionName
  };

  try {
    const res = await axios.post('http://localhost:5000/api/auction/create', auctionData);
    //const auctionId = res.data.auctionId;
    //alert("Auction Created with ID: " + auctionId);
   navigate('/ViewAuction', {
  state: {
  
    previewOnly: true, 
    auctionData: {
      auctionName,
      startDate: startDate.toISOString(),
      closeDate: closeDate.toISOString(),
      currency: currencyType,
      location: auctionLocation,
      allowAutoBid,
      allowConfigurableTime,
      auctionFormat: 'Forward Auction',
      auctionType: 'English',
      auctionRule: 'Highest Bid Wins',
      bidders,
      itemList,
    }
    
  }
});

  } catch (err) {
    console.error(err);
    alert("Error creating auction");
  }
}}
 >
    Add Auction
  </button>
</div>
</div>
  //bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 font-medium
  );
}
