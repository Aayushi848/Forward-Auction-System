import React, { useState } from 'react';
import { FaEnvelope, FaTimes } from 'react-icons/fa';

const AuctionNotificationForm = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    fromTime: '',
    toDate: '',
    toTime: '',
    packingList: null,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      fromDate: '',
      fromTime: '',
      toDate: '',
      toTime: '',
      packingList: null,
      image: null,
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Breadcrumb */}
     <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Auction Notifications Mail Details</span>
      </div>


      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Auction Notification</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block mb-1 font-medium text-sm">From Start Date*</label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">Start Time</label>
              <input
                type="time"
                name="fromTime"
                value={formData.fromTime}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">To Start Date*</label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">Start Time--</label>
              <input
                type="time"
                name="toTime"
                value={formData.toTime}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* File Uploads Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Packing Lists</label>
              <input
                type="file"
                name="packingList"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center text-sm"
            >
              <FaEnvelope className="mr-2" /> Submit Mail
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center text-sm"
            >
              <FaTimes className="mr-2" /> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuctionNotificationForm;
