import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const ProductCategory = () => {
  const [productLine, setProductLine] = useState('');

  const tableData = [
    { id: 19, line: 'Wire Rods', category: 'Wire Rods -MS - upto 15mm' },
    { id: 42, line: 'Wire Rods', category: 'Wire Rods End Cuts' },
    { id: 46, line: 'Rails', category: 'Wire Rods -MS - upto 15mm' },
  ];

  return (
    <div className="p-6 space-y-6 bg-[#f4f6fb] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Product Category</span>
      </div>

      {/* Product Category List */}
      <div className="bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-semibold text-[#151A40] mb-4">Product Category List</h2>
        <div className="grid grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Line*</label>
            <select
              value={productLine}
              onChange={(e) => setProductLine(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none"
            >
              <option value="">--Select--</option>
              <option value="Wire Rods">Plates & Coils</option>
              <option value="Rails">Light-beams.Angle,Channels(MLSM)</option>
              <option value="Rails">Heavy-beams.Angle,Channels(RUMB)</option>
              <option value="Rails">Rails</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Line*</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              placeholder="Enter Product Line"
            />
          </div>

          <div className="flex space-x-2">
            <button className="bg-green-700 text-white px-4 py-2 rounded flex items-center space-x-2">
              <FaSearch />
              <span>Submit</span>
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Rest</button>
          </div>
        </div>
      </div>

      {/* Product Category Details Table */}
      <div className="bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-semibold text-[#151A40] mb-4">Product Category Details</h2>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <label>Show</label>
            <input
              type="number"
              value={10}
              className="w-16 border rounded px-2 py-1"
              readOnly
            />
            <span>entries</span>
          </div>
          <div className="flex items-center space-x-2">
            <label>Search:</label>
            <input
              type="text"
              className="border rounded px-3 py-1"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-[#151A40] text-white text-left">
                <th className="border border-gray-300 px-4 py-2">PRODUCT CATEGORY ID ARROW</th>
                <th className="border border-gray-300 px-4 py-2">PRODUCT LINE NAME</th>
                <th className="border border-gray-300 px-4 py-2">PRODUCT CATEGORY NAME</th>
                <th className="border border-gray-300 px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.line}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600 cursor-pointer hover:underline">Update</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div>Showing 1 to 3 of 3 entries</div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded">Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
