// src/pages/FindBidderPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../common/table/BidderList.css';
import '../../../common/form/CreateAuction.css';

import './FindBidderPage.css';

export default function FindBidderPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [filters, setFilters] = useState({ id: '', name: '', location: '' });
  const [selected, setSelected] = useState(location.state?.selectedBidders || []);
  const [selectAll, setSelectAll] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [isSidebarOpen] = useState(true); // replace with prop or context if needed
  const layoutClass = isSidebarOpen ? 'layout sidebar-open' : 'layout sidebar-closed';

  useEffect(() => {
    axios.get('http://localhost:5000/api/vendors')
      .then((res) => setVendors(res.data))
      .catch((err) => console.error('error fetching vendors:', err));
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filtered = vendors.filter((b) =>
    (b.CONTACT_CODE || b.CONTACT_PK_ID).toString().includes(filters.id) &&
    (`${b.FIRST_NAME} ${b.LAST_NAME}`.toLowerCase().includes(filters.name.toLowerCase())) &&
    (`${b.CITY}, ${b.STATE}, ${b.COUNTRY}`.toLowerCase().includes(filters.location.toLowerCase()))
  );

  const toggleBidderFromFormatted = (b) => {
    const exists = selected.find((s) => s.id === b.id);
    if (exists) {
      setSelected(selected.filter((s) => s.id !== b.id));
    } else {
      setSelected([...selected, b]);
    }
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      const all = filtered.map((b) => ({
        id: b.CONTACT_CODE || b.CONTACT_PK_ID,
        name: `${b.FIRST_NAME} ${b.LAST_NAME}`,
        location: `${b.CITY}, ${b.STATE}, ${b.COUNTRY}`,
        contactPerson: b.ALTERNATE_CONTACT_PERSONNAME || '-',
        contactNumber: b.ALTERNATE_CONTACT_NO || b.CONTACT_NO_MOBILE || '-',
        email: b.EMAIL_ID
      }));
      setSelected(all);
    } else {
      setSelected([]);
    }
    setSelectAll(!selectAll);
  };

 
  const handleAdd = () => {
  const from = location.state?.from;

  if (from === 'MessageBoard') {
    navigate('/MessageBoard', { state: { selectedBidders: selected } });
  } else {
    navigate('/CreateAuction', { state: { selectedBidders: selected } });
  }
};


  const formattedFiltered = filtered.map((b) => ({
    id: b.CONTACT_CODE || b.CONTACT_PK_ID,
    name: `${b.FIRST_NAME} ${b.LAST_NAME}`,
    location: `${b.CITY}, ${b.STATE}, ${b.COUNTRY}`,
    contactPerson: b.ALTERNATE_CONTACT_PERSONNAME || '-',
    contactNumber: b.ALTERNATE_CONTACT_NO || b.CONTACT_NO_MOBILE || '-',
    email: b.EMAIL_ID
  }));

  return (
    <div className= "form-container" >
       <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>
    

      

      <div className="form-section">
       
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
 <h3>Find Bidder</h3>
 
        <button className="add-bidder-btn" >Find</button> 
        </div>
       

        <hr/>
        
        <div className="form-row">
        <div className="form-group">
        <input type="id" placeholder="Bidder ID" onChange={handleFilterChange} /></div>
        <div className="form-group"><input type="name" placeholder="Bidder Name" onChange={handleFilterChange} /></div>
        <div className="form-group"><input type="location" placeholder="Location" onChange={handleFilterChange} /></div>
        
      </div>
     
      </div>

     
      <div className="form-section">
        
        
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px' }}>
         <input type="checkbox" checked={selectAll} onChange={handleSelectAll} /> Select All
      
 <button className="add-bidder-btn" onClick={handleAdd}>Add Bidders</button> </div>
      <div className="bidder-table-wrapper">
       
        <div className="table-scroll">
          <table className="bidder-table">
            <thead>
              <tr>
                <th>Add</th>
                <th>Bidder ID</th>
                <th>Bidder Name</th>
                <th>Location</th>
                <th>Contact Person</th>
                <th>Contact Number</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {formattedFiltered.map((b) => (
                <tr key={b.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.some((s) => s.id === b.id)}
                      onChange={() => toggleBidderFromFormatted(b)}
                    />
                  </td>
                  <td>{b.id}</td>
                  <td>{b.name}</td>
                  <td>{b.location}</td>
                  <td>{b.contactPerson}</td>
                  <td>{b.contactNumber}</td>
                  <td>{b.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
