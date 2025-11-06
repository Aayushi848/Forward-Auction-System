import React, { useState } from 'react';  // form-container, form-section, form-row, form-group
import '../../../common/form/CreateAuction.css';  // bidder-list-container, bidder-table styles
import '../../../common/table/BidderList.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

import { Link } from 'react-router-dom';
const sampleData = [
  { id: 2, name: 'vishakarma Steels (Nagpur)' },
  { id: 3, name: 'tmtbars@americansteels.com' },
  { id: 4, name: 'sujitdas2@hotmail.com' },
  { id: 5, name: 'sri_sri_traders@yahoo.co.in' },
  { id: 6, name: 'sms_2833@yahoo.co.in' },
  { id: 7, name: 'sksteel@hotmail.com' },
  { id: 8, name: 'sjsteels3@yahoo.in' },
  { id: 9, name: 'siplinfo@yahoo.com' },
  { id: 10, name: 'shri bajrang alloys ltd' },
  { id: 11, name: 'shri Chari Wires' },
  { id: 12, name: 'example_user12@mail.com' },
  { id: 13, name: 'example_user13@mail.com' },
  { id: 14, name: 'example_user14@mail.com' },
  { id: 15, name: 'example_user15@mail.com' },
  { id: 16, name: 'example_user16@mail.com' },
];

export default function UserList() {
  const navigate = useNavigate();  
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = sampleData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleViewUser = (user) => {
    navigate('/AddUserForm', { state: { user } });  // NEW: Pass user to add-user page
  };
  const[selectedRows, setSelectedRows] = useState([]);
   const handleSelectRow = (id) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };
  const handleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map(user => user.id));
    }
  };
  const handleDeleteSelected = () => {
    // Your delete logic here. For demo, just clearing selection.
    alert(`Deleting ${selectedRows.length} users`);
    setSelectedRows([]);
  };




  return (
    <div className="form-container">
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>

      <div className="bidder-list-container">
        <div className="form-section">
          <h3>User List Details</h3>

          <div className="form-row-header">
            <div className="form-group-header">
              <label>Show </label>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                {[10, 25, 50, 100].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <label>Entries</label>
            </div>

            <div className="form-group-header" style={{display: 'flex', alignItems:'center'}}>
              <label style={{marginRight:'8px'}}>Search:</label>
              <input
                type="text"
                placeholder="Search"
                style={{padding:'6px', fontSize:'14px'}}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          {selectedRows.length > 0 && (
            <div className="form-row-header" style={{ marginTop: '10px', display: 'flex',
      justifyContent: 'flex-end', alignItems: 'center', }}>
              <div className="form-group-header" style={{ display: 'flex', alignItems: 'center' }}>
                <span>{selectedRows.length} rows selected</span>
                <FaTrash
                  style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
                  onClick={handleDeleteSelected}
                  title="Delete Selected"
                />
              </div>
            </div>
          )}

          <div className="bidder-table-wrapper">
            <div className="table-scroll">
              <table className="bidder-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User First Name</th>
                    <th>View Profile</th>
                     <th>
                      <input
                        type="checkbox"
                        style={{width:'18px', height:'18px'}}
                        checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                        onChange={handleSelectAll}
                      />Delete Profile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                          <button className="add-bidder-btn" onClick={() => handleViewUser(user)}>View More</button>
                        </td>
                         <td style={{ textAlign: 'center' }}>
                          <input
                            type="checkbox"
                             style={{ width: '18px', height: '18px' }} 
                            checked={selectedRows.includes(user.id)}
                            onChange={() => handleSelectRow(user.id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center' }}>No users found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="form-row" style={{ justifyContent: 'space-between' }}>
            <div>
              Showing{' '}
              {filteredData.length === 0
                ? 0
                : (currentPage - 1) * entriesPerPage + 1}{' '}
              to{' '}
              {Math.min(currentPage * entriesPerPage, filteredData.length)} of{' '}
              {filteredData.length} entries
            </div>

            <div className="pagination-button-group">
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="pagination-btn"
  >
    Previous
  </button>

  <span className="current-page-text">
    {currentPage}
  </span>

  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="pagination-btn"
  >
    Next
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
