import React, { useState } from "react";
import { Link } from 'react-router-dom';
const ViewAuction = () => {
  const [formData, setFormData] = useState({
    auctionId: "",
    auctionName: "",
    creationDateFrom: "",
    creationDateTo: "",
    startFromDate: "",
    startToDate: "",
    productCode: "",
    productName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-6">
      {/* Main Card Container */}
      <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">View User</span>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        
        

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Edit Live Auctions
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Auction ID*
            </label>
            <input
              type="text"
              name="auctionId"
              placeholder="Auction ID"
              value={formData.auctionId}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Auction Name*
            </label>
            <input
              type="text"
              name="auctionName"
              placeholder="Auction Name"
              value={formData.auctionName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Creation Date From*
            </label>
            <input
              type="date"
              name="creationDateFrom"
              value={formData.creationDateFrom}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Creation Date To*
            </label>
            <input
              type="date"
              name="creationDateTo"
              value={formData.creationDateTo}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start From Date*
            </label>
            <input
              type="date"
              name="startFromDate"
              value={formData.startFromDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date To*
            </label>
            <input
              type="date"
              name="startToDate"
              value={formData.startToDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Code*
            </label>
            <input
              type="text"
              name="productCode"
              placeholder="Product Code"
              value={formData.productCode}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name*
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          {/* Buttons - Right aligned */}
          <div className="md:col-span-4 flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => alert("Add Bidder Name clicked")}
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded shadow"
            >
              + Add Bidder Name
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewAuction;
