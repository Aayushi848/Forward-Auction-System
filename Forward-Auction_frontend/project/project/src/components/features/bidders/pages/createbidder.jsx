import React, { useState } from 'react';
import '../../../common/form/CreateAuction.css';
import { Link } from 'react-router-dom';
import CustomMultiSelect from '../../../common/form/CustomMultiSelect';
import BidderList from '../../../common/table/BidderList';

export default function AddBidderForm() {
  const [isGuestBidder, setIsGuestBidder] = useState(false);
  const [bidders, setBidders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formKey, setFormKey] = useState(0); // used to force reset


  const initialForm = {
    companyName: '',
    sapCode: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    contactPerson: '',
    mobile: '',
    email: '',
    address1: '',
    address2: '',
    telephone: '',
    fax: '',
    gst: '',
    pan: '',
    category: [],
    isGuestBidder: false,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBidder = {
      id: editIndex !== null ? bidders[editIndex].id : Date.now().toString(),
      name: formData.companyName,
      location: formData.city,
      contactPerson: formData.contactPerson,
      contactNumber: formData.mobile,
      email: formData.email,
      ...formData,
    };

    if (editIndex !== null) {
      const updatedList = [...bidders];
      updatedList[editIndex] = updatedBidder;
      setBidders(updatedList);
      setEditIndex(null);
    } else {
      setBidders(prev => [...prev, updatedBidder]);
    }

    setFormData(initialForm);
    setIsGuestBidder(false);
  };

  const handleEdit = (bidder, index) => {
    setFormData(bidder);
    setIsGuestBidder(bidder.isGuestBidder || false);
    setEditIndex(index);
  };

  const handleRemove = (id) => {
    setBidders(prev => prev.filter(b => b.id !== id));
    if (editIndex !== null) setEditIndex(null);
  };

  const bidderCategories = [
    "Plates-upto 20mm",
    "Plates-20 to 40mm",
    "Plates-upto 40mm",
    "Plates-above 40mm",
    "Plate Mix",
    "Coils-upto 12mm"
  ];

  return (
    <div className="form-container">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">Create Bidder</span>
      </div>

      {/* Main Form */}
      <div className="form-section">
        <h3>{editIndex !== null ? "Edit Bidder" : "Add New Bidder"}</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>Company Name*</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>SAP Code*</label>
              <input type="text" name="sapCode" value={formData.sapCode} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Country*</label>
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">--Select--</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>State*</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>City*</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Postal Code*</label>
              <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-group">
              <label>Contact Person*</label>
              <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mobile No.*</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          {/* Section: Other Details */}
          <h3>Other Details</h3>
          <hr />
          <div className="form-row">
            <div className="form-group">
              <label>Address Line 1</label>
              <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Address Line 2</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
            </div>
            
          </div>

          <div className="form-row">
             <CustomMultiSelect
              
              label="Bidder Category*"
              options={bidderCategories}
              value={formData.category}
              onChange={(selected) =>
                setFormData(prev => ({ ...prev, category: selected }))
              }
            />
            
            <div className="form-group">
              <label>Is Guest Bidder</label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Is Guest Bidder"
                  value={isGuestBidder ? "Guest" : ""}
                  readOnly
                  style={{ paddingRight: "30px" }}
                />
                <input
                  type="checkbox"
                  checked={isGuestBidder}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setIsGuestBidder(checked);
                    setFormData(prev => ({
                      ...prev,
                      isGuestBidder: checked,
                      
                    }));
                  }}
                  style={{
                    position: "absolute",
                    right: "-140px",
                    top: "45%",
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                  }}
                />
              </div>
               </div>
              <div className="form-group">
              <label>Telephone</label>
              <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
            </div>
             
              
           
          </div>

          {/* Bidder Category */}
          <div className="form-row">
           
          </div>

          {/* Section: Additional Info */}
          <h3>Additional Information</h3>
          <hr />
          <div className="form-row">
            <div className="form-group">
              <label>GST</label>
              <input type="text" name="gst" value={formData.gst} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>PAN</label>
              <input type="text" name="pan" value={formData.pan} onChange={handleChange} />
            </div>
          </div>

          {/* Buttons */}
          <div className="form-row" style={{ justifyContent: 'flex-end' }}>
            <div className="button-group">
              <button type="submit" className="submit-reset-btn">{editIndex !== null ? "Update" : "Submit"}</button>
              <button type="button" className="submit-reset-btn" onClick={() => {
                setFormData(initialForm);
                setEditIndex(null);
                setIsGuestBidder(false);
                setFormKey(prev => prev + 1);
              }}>Reset</button>
            </div>
          </div>
        </form>
      </div>

      {/* Bidder Table */}
      {bidders.length > 0 && (
        <div className="form-section">
          <h3>Bidder List</h3>
          <hr />
          <BidderList
            bidders={bidders}
            handleRemoveBidder={id => handleRemove(id)}
            handleEditBidder={(bidder, index) => handleEdit(bidder, index)}
          />
        </div>
      )}
    </div>
  );
}
