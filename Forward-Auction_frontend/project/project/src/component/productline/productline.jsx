import React, { useState, useEffect } from 'react';

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
    setCurrentPage(1); // Reset page on search or entries change
  }, [entriesPerPage, searchTerm]);

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Product Line</span>
      </div>

      {/* Product Line Form */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">Product Line Details</h2>
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">
            Product Line<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none"
            value={productLine}
            onChange={(e) => setProductLine(e.target.value)}
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            🔍 Submit
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            Reset
          </button>
        </div>
      </div>

      {/* Product Line Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">Product Line Details</h2>

        {/* Top Controls */}
        <div className="flex justify-between items-center mb-3">
          <div>
            Show{' '}
            <select
              className="border rounded px-2 py-1"
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
              {[10, 25, 50, 100].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>{' '}
            entries
          </div>
          <div>
            Search:{' '}
            <input
              type="text"
              className="border rounded px-2 py-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-[#151A40] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">PRODUCT LINE ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">PRODUCT LINE NAME</th>
                <th className="border border-gray-300 px-4 py-2 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-600 cursor-pointer hover:underline">Update</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center px-4 py-4">No data found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {filteredData.length === 0 ? 0 : indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              className="bg-gray-200 px-3 py-1 rounded"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              {currentPage}
            </button>
            <button
              className="bg-gray-200 px-3 py-1 rounded"
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLine;
