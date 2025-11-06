import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BidderListPage from '../../../common/table/BidderList'; // update path as per your structure
import CreateAuction from '../../auctions/pages/CreateAuction';
import { useLocation } from 'react-router-dom';


 // if needed

const AddUserForm = () => {
  const [formData, setFormData] = useState(initialState());
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [message, setMessage] = useState('');

  function initialState() {
    return {
      firstName: '',
      lastName: '',
      mobileNo: '',
      phoneNo: '',
      loginName: '',
      email: '',
      gender: '',
      address1: '',
      address2: '',
      country: '',
      state: '',
      pinCode: '',
      role: '',
    };
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setFormData(initialState());
    setEditIndex(null);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: editIndex !== null ? users[editIndex].id : Date.now().toString(),
      name: `${formData.firstName} ${formData.lastName}`,
      location: formData.state,
      contactPerson: formData.loginName,
      contactNumber: formData.mobileNo,
      email: formData.email,
      ...formData,
    };

    if (editIndex !== null || prefilledUser ) {
      const confirmUpdate = window.confirm("Are you sure you want to update the changes and add user?");
       if (!confirmUpdate) return;
      // If editing from table
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setUsers(updatedUsers);
    } else {
      // If editing from prefilled route (View More)
      setUsers(prev => {
        const updated = prev.map(u => (u.id === prefilledUser.id ? newUser : u));
        return updated.some(u => u.id === prefilledUser.id) ? updated : [...prev, newUser];
      });
    }
      setMessage('User updated successfully!');
    } else {
      setUsers(prev => [...prev, newUser]);
      setMessage('User added successfully!');
    }

    setFormData(initialState());
    setEditIndex(null);

    // Hide message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEditUser = (user, index) => {
    setFormData(user);
    setEditIndex(index);
    setMessage('');
  };

  const handleRemoveUser = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    if (editIndex !== null) setEditIndex(null);
    setMessage('');
  };
  const location = useLocation();
const prefilledUser = location.state?.user;
useEffect(() => {
  if (prefilledUser) {
    setFormData(prefilledUser);
    setEditIndex(null); // or set index if needed
  }
}, [prefilledUser]);
const isEditMode = editIndex !== null || !!prefilledUser;

  return (
    <div className="form-container">
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>

      <div className="form-section">
        <h3>{isEditMode ? 'Edit User' : 'Add User'}</h3>
        <hr />

        

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            {/* Repeat inputs */}
            <div className="form-group">
              <label>First Name*</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Last Name*</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Mobile No.*</label>
              <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Phone No.*</label>
              <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" name="loginName" value={formData.loginName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email ID*</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Gender*</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">--Select--</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Address 1*</label>
              <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Address 2</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Country*</label>
              <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">--Select--</option>
                <option>India</option>
                <option>Australia</option>
                <option>Singapore</option>
                <option>Thailand</option>
                <option>Ukraine</option>
                <option>Nepal</option>
              </select>
            </div>

            <div className="form-group">
              <label>State*</label>
              <select name="state" value={formData.state} onChange={handleChange}>
                <option value="">--Select State--</option>
                <option>Delhi</option>
                <option>Gurugram</option>
              </select>
            </div>

            <div className="form-group">
              <label>Pin Code*</label>
              <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Role*</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select Options</option>
                <option>Admin</option>
                <option>User</option>
                <option>Manager</option>
              </select>
            </div>
          </div>

          <div className="form-row" style={{ justifyContent: 'flex-end' }}>
            <div className="button-group">
              <button type="submit" className="add-bidder-btn">
                {isEditMode ? 'Update' : 'Submit'}
              </button>
              <button type="button" onClick={handleReset} className="add-bidder-btn">Reset</button>
            </div>
          </div>
        </form>
      </div>
      {message && <div className="bottom-message">{message}</div>}

      {/* Reused Table for Users */}
      {users.length > 0 && (
        <div className="form-section">
          <h3>User List</h3>
          <hr />
          <BidderListPage
            bidders={users}
            handleRemoveBidder={handleRemoveUser}
            handleEditBidder={handleEditUser}
          />
        </div>
      )}
    </div>
  );
};

export default AddUserForm;
