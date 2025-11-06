import React, { useState } from 'react';

const AuctionReport = () => {
  const [form, setForm] = useState({
    fromStartDate: '',
    fromStartTime: '',
    toStartDate: '',
    toStartTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
  };

  const handleCancel = () => {
    setForm({
      fromStartDate: '',
      fromStartTime: '',
      toStartDate: '',
      toStartTime: '',
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
     <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Auction Report</span>
      </div>


      {/* Card */}
      <div className="bg-white shadow rounded-xl">
        <div className="border-b px-6 py-4 text-xl font-semibold text-gray-800">Auction Details</div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* From Start Date */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">From Start Date*</label>
              <input
                type="date"
                name="fromStartDate"
                value={form.fromStartDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="dd-mm-yyyy"
              />
            </div>

            {/* From Start Time */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Start Time</label>
              <input
                type="time"
                name="fromStartTime"
                value={form.fromStartTime}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="--:--"
              />
            </div>

            {/* To Start Date */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">TO Start Date*</label>
              <input
                type="date"
                name="toStartDate"
                value={form.toStartDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="dd-mm-yyyy"
              />
            </div>

            {/* To Start Time */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Start Time</label>
              <input
                type="time"
                name="toStartTime"
                value={form.toStartTime}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="--:--"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded text-sm"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuctionReport;
