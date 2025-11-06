import React, { useState,useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
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
const fileInputPackingRef = useRef(null);
const fileInputImageRef = useRef(null);
const [packingFiles, setPackingFiles] = useState([]);
const [imageFiles, setImageFiles] = useState([]);
const [isHovered, setIsHovered] = useState(false);


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
        <h3>Auction Notification</h3>
        <hr />
   <div className="form-row">
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
          </div>
        
     

         <div className="form-row">
          {/* reusable form-group for upload */}
          <div className="form-group"> 
  <label>Packing Lists</label>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <input
      type="text"
      readOnly
      value={
        packingFiles.length
          ? `${packingFiles.length} file${packingFiles.length > 1 ? 's' : ''} uploaded`
          : ''
      }
      placeholder="Upload files"
      onClick={() =>fileInputPackingRef.current?.click()}
      className="file-name-display"
      style={{ flex: 1, cursor: 'pointer' }}
    />
    <input
      type="file"
      multiple
      ref={fileInputPackingRef}
      onChange={(e) => {
        const files = Array.from(e.target.files);
      setPackingFiles((prev) => [...prev, ...files]);
      }}
      style={{ display: 'none' }}
    />
    <button
      type="button"
      onClick={() => fileInputPackingRef.current?.click()}

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
  {packingFiles.length > 0 && (
    <div className="uploaded-files-container">
       {packingFiles.map((file, index) => (
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
               setPackingFiles((prev) => prev.filter((_, i) => i !== index));
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
   <div className="form-group"> 
  <label>Images</label>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <input
      type="text"
      readOnly
      value={
         imageFiles.length
          ? `${imageFiles.length} file${imageFiles.length > 1 ? 's' : ''} uploaded`
          : ''
      }
      placeholder="Upload Images"
      onClick={() => fileInputImageRef.current?.click()}
      className="file-name-display"
      style={{ flex: 1, cursor: 'pointer' }}
    />
    <input
      type="file"
      multiple
       ref={fileInputImageRef}
      onChange={(e) => {
         const files = Array.from(e.target.files);
        setImageFiles((prev) => [...prev, ...files]);
      }}
      style={{ display: 'none' }}
    />
    <button
      type="button"
     onClick={() => fileInputImageRef.current?.click()}
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
  {imageFiles.length > 0 && (
    <div className="uploaded-files-container">
      {imageFiles.map((file, index) => (
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
               setImageFiles((prev) => prev.filter((_, i) => i !== index));
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
        
    
     


   
      
      <div className="form-row" style={{ justifyContent: 'flex-end' }}>
  <button
  type="button"
  className="add-bidder-btn"
  

    

    
>
  <FaEnvelope style={{ marginRight: '6px' }} /> Send Mail
</button>
</div>
</div>
  //bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 font-medium
  );
}
