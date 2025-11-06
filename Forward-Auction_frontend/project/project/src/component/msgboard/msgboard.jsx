import React, { useState } from 'react';
import { FaPlus, FaEnvelope } from 'react-icons/fa';

const MessageBoard = () => {
  const [form, setForm] = useState({
    location: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleCancel = () => {
    setForm({ location: '', message: '', file: null });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
     <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Message Board</span>
      </div>


      {/* Bidder Table */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Bidder To Send Mail/SMS</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm flex items-center">
            <FaPlus className="mr-1" /> Add Bidder
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">DELETE</th>
                <th className="p-2 border">BIDDER ID</th>
                <th className="p-2 border">BIDDER NAME</th>
                <th className="p-2 border">LOCATION</th>
                <th className="p-2 border">CONTACT PERSON</th>
                <th className="p-2 border">CONTACT NUMBER</th>
                <th className="p-2 border">EMAIL ID</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700">
                <td className="p-2 border">1</td>
                <td className="p-2 border">Table cell</td>
                <td className="p-2 border">Table cell</td>
                <td className="p-2 border">Table cell</td>
                <td className="p-2 border">Table cell</td>
                <td className="p-2 border">Table cell</td>
                <td className="p-2 border">Table cell</td>
                <td className="p-2 border">Table cell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Compose Section */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Compose Mail/SMS Here</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Auction Location*</label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="">--Select--</option>
                <option value="Plant A">Rupee</option>
                <option value="Plant B"> $ US Dollar</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block mb-1 text-sm font-medium">Message Content*</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="1"
                className="w-full border rounded px-3 py-2 text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col justify-end">
              <label className="block mb-1 text-sm font-medium invisible">Upload</label>
              <div className="flex items-center">
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="border px-2 py-1 rounded text-sm"
                />
                <button
                  type="button"
                  className="bg-green-600 hover:bg-green-700 text-white px-2 py-2 ml-2 rounded"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm flex items-center"
            >
              <FaEnvelope className="mr-2" /> Send Mail
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageBoard;
