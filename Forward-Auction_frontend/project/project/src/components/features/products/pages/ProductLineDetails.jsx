import React, { useState, useEffect } from 'react';
import '../../../common/form/CreateAuction.css'; // ✅ form styles from CreateAuction
import '../../../common/table/BidderList.css';  // ✅ table styles from BidderList
import { Link } from 'react-router-dom';

const ProductLine = () => {
  const [productLine, setProductLine] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { id: 17, name: 'Wire Rods' },
    { id: 18, name: 'Rails' },
    { id: 19, name: 'Heavy-Beams, Angle, Channels(RUBM)' },
    { id: 20, name: 'Plates & Coils' },
    { id: 21, name: 'Light-Beams, Angle, Channels (MLSM)' },
  ];

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const paginatedData = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage, searchTerm]);

  return (
    <div className="form-container">
      {/* Breadcrumb */}
       <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>

      {/* Product Line Form */}
      <div className="form-section">
        <h3>Product Line Details</h3>
        <hr />

        <div className="form-row">
          <div className="form-group">
            <label>Product Line *</label>
            <input
              type="text"
              placeholder="Enter Product Line"
              value={productLine}
              onChange={(e) => setProductLine(e.target.value)}
            />
          </div>
       
        </div>
           <div className="form-row" style={{ justifyContent: 'flex-end' }}>
  <div className="button-group">
    <button className="submit-reset-btn">Submit</button>
    <button className="submit-reset-btn">Reset</button>
  </div>
</div>
      </div>

      {/* Product Line Table */}
      <div className="form-section">
        <h3>Product Line List</h3>
        <hr />

        {/* Top Controls */}
        <div className="form-row-header">
          <div className="form-group-header" >
      <label style={{ marginRight: '8px'}}>Showing</label>
      <select style={{ marginRight: '8px', width: '80px' }}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <label>entries</label>
    </div>
          <div className="form-group-header" style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ marginRight: '8px' }}>Search:</label>
      <input
        type="text"
        placeholder="Search"
        style={{ padding: '6px', fontSize: '14px' }}
      />
    </div>
        </div>

        {/* Table */}
        <div className="bidder-table-wrapper">
          <div className="table-scroll">
            <table className="bidder-table">
              <thead>
                <tr>
                  <th>Product Line ID</th>
                  <th>Product Line Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td className="text-blue-600 cursor-pointer hover:underline">Update</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">No data found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="form-row">
          <div>
            Showing {filteredData.length === 0 ? 0 : indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className="pagination-button-group">
            <button onClick={handlePrevious} disabled={currentPage === 1} className="pagination-btn">Previous</button>{' '}
            <span className="current-page-text">{currentPage}</span>{' '}
            <button onClick={handleNext} disabled={currentPage === totalPages || totalPages === 0} className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLine;
