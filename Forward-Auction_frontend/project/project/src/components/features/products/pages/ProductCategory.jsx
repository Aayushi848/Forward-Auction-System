import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../../common/form/CreateAuction.css'; // Ensure correct path to your CreateAuction.css
import '../../../common/table/BidderList.css';   // Ensure correct path to your BidderList.css
import { Link } from 'react-router-dom';

const ProductCategory = () => {
  const [productLine, setProductLine] = useState('');

  const tableData = [
    { id: 19, line: 'Wire Rods', category: 'Wire Rods -MS - upto 15mm' },
    { id: 42, line: 'Wire Rods', category: 'Wire Rods End Cuts' },
    { id: 46, line: 'Rails', category: 'Wire Rods -MS - upto 15mm' },
  ];

  return (
    <div className="form-container">
      {/* Breadcrumb */}
       <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>

      {/* Product Category Form */}
      <div className="form-section">
        <h3>Product Category Details</h3>
        <hr />

        <div className="form-row">
          <div className="form-group">
            <label>Product Line *</label>
            <select
              value={productLine}
              onChange={(e) => setProductLine(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="Wire Rods">Plates & Coils</option>
              <option value="Rails">Light-beams.Angle,Channels(MLSM)</option>
              <option value="Rails">Heavy-beams.Angle,Channels(RUMB)</option>
              <option value="Rails">Rails</option>
            </select>
          </div>

          <div className="form-group">
            <label>Product Line *</label>
            <input type="text" placeholder="Enter Product Line" />
          </div>

        </div>
        <div className="form-row" style={{ justifyContent: 'flex-end' }}>
          <div className="button-group">
            <button className="add-bidder-btn flex items-center space-x-2">
              
              <span>Submit</span>
            </button>
          </div>

          <div className="button-group">
            <button className="add-bidder-btn">Reset</button>
          </div>
        </div>
      </div>

      {/* Product Category Table */}
      <div className="form-section">
        <h3>Product Category List</h3>
        <hr/>
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


        <div className="bidder-table-wrapper">
          <div className="table-scroll">
            <table className="bidder-table">
              <thead>
                <tr>
                  <th>PRODUCT CATEGORY ID</th>
                  <th>PRODUCT LINE NAME</th>
                  <th>PRODUCT CATEGORY NAME</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, idx) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.line}</td>
                    <td>{item.category}</td>
                    <td className="text-blue-600 cursor-pointer hover:underline">Update</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    

        {/* Pagination */}
        <div className="form-row">
          <div>Showing 1 to 3 of 3 entries</div>
          <div className="pagination-button-group">
            <button className="pagination-btn">Previous</button>
            <span className="current-page-text">1</span>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
