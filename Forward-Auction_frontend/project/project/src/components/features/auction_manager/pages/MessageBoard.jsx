import React, { useState, useRef } from 'react';
import { FaPlus, FaEnvelope, FaTimes} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../../common/form/CreateAuction.css';
import '../../../common/table/BidderList.css';
import '../../../common/form/CreateAuction.css'

import BidderList from '../../../common/table/BidderList';

const MessageBoard = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

const [uploadedFiles, setUploadedFiles] = useState([]);
  const [bidders, setBidders] = useState(location.state?.selectedBidders || []);
  const [form, setForm] = useState({
    location: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (name === 'file' && files?.length) {
    setUploadedFiles((prev) => [...prev, ...Array.from(files)]);
  } else {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

const handleRemoveFile = (indexToRemove) => {
  const fileToRemove = uploadedFiles[indexToRemove];
  const fileURL = URL.createObjectURL(fileToRemove);
  URL.revokeObjectURL(fileURL); // clean up
  setUploadedFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
};



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleCancel = () => {
    setForm({ location: '', message: '', file: null });
  };

  const handleAddBidder = () => {
    navigate('/FindBidderPage', {
      state: { selectedBidders: bidders, from: 'MessageBoard' },
    });
  };

  const handleRemoveBidder = (idToRemove) => {
    setBidders((prev) => prev.filter((bidder) => bidder.id !== idToRemove));
  };

  return (
    <div className="form-container">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">Message Board</span>
      </div>

      {/* Bidder Table */}
      <div className="form-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3>Bidder Send Mail To</h3>
          <button onClick={handleAddBidder} className="add-bidder-btn">
            + Add Bidder
          </button>
        </div>

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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Compose Section */}
      <div className="form-section">
        <h3>Compose Mail/SMS Here</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Select Communication Type*</label>
              <select
                name="Communication Type"
                onChange={handleChange}
              >
                <option value="">--Select--</option>
                <option value="Plant A">Mail</option>
                <option value="Plant B">SMS</option>
              </select>
            </div>
             <div className="form-group">
              <label>Upload Attachment</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <input
      type="text"
      readOnly
      value={uploadedFiles.length ? `${uploadedFiles.length} file${uploadedFiles.length > 1 ? 's' : ''} uploaded` : ''}
      placeholder="Upload files"
      onClick={() => fileInputRef.current?.click()}
      className="file-name-display"
      style={{ flex: 1, cursor: 'pointer' }}
    />
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  multiple
                  ref={fileInputRef} 
                  
                  className="file-input"
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
            </div>

            
             </div>

           <div className="form-group">
              <label>Message Content*</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="2"
              ></textarea>
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
          onClick={() => handleRemoveFile(index)}
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
         

          {/* Buttons */}
          <div className="form-row" style={{ justifyContent: 'flex-end' }}>
            <div className="button-group">
              <button
                type="submit"
                className="add-bidder-btn"
              >
                <FaEnvelope style={{ marginRight: '6px' }} /> Send Mail
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="add-bidder-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageBoard;
