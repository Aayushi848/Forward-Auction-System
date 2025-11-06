import React from 'react';

const ViewEditBidder = () => {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">View Bidder</span>
      </div>

      {/* Card Box */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">View Bidder Details</h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bidder ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bidder ID<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>--Select--</option>
               <option>16</option>
                <option>17</option>
                 <option>19</option>
                  <option>20</option>
            </select>
          </div>

          {/* Bidder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bidder Name<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>--Select--</option>
               <option>Avinash Singhal</option>
                <option>Siddharth Maheshwari</option>
                 <option>Chandra Steel</option>
                 <option>MITTAL TRADERS</option>
                  
            </select>
          </div>

          {/* Bidder Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bidder Location<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>--Select--</option>
               <option>Chattisgarh</option>
                <option>Gujrat</option>
                 <option>Orissa</option>
                  <option>Karnataka</option>
            </select>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex justify-end mt-8 space-x-4">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded flex items-center"
          >
            ✔️ Submit
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded flex items-center"
          >
            🗑 Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEditBidder;
