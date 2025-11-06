import React, { useState } from 'react';

const sampleData = [
  { id: 2, name: 'vishawkarma Steels (Nagour)' },
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

const UserList = () => {
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

  return (
    <div className="p-6 bg-[#f4f6fb] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">View user</span>
      </div>


      <div className="bg-white rounded shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">User List Details</h2>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
          <div>
            <label className="text-sm mr-2">Show</label>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1 text-sm"
            >
              {[10, 25, 50, 100].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <span className="ml-2 text-sm">entries</span>
          </div>

          <div className="flex items-center">
            <label className="text-sm mr-2">Search:</label>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead>
              <tr className="bg-[#151A40] text-white text-xs">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">User First Name</th>
                <th className="px-4 py-2 border">View Profile</th>
                <th className="px-4 py-2 border">Delete Profile</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((user, index) => (
                  <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-2 border">{user.id}</td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border text-700 cursor-pointer">
                      Profile... <span className="font-medium">View More</span>
                    </td>
                    <td className="px-4 py-2 border text-600 cursor-pointer">
                      Delete Profile...
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            Showing{' '}
            {filteredData.length === 0
              ? 0
              : (currentPage - 1) * entriesPerPage + 1}{' '}
            to{' '}
            {Math.min(currentPage * entriesPerPage, filteredData.length)} of{' '}
            {filteredData.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded border ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-black'
              }`}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-black'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              className={`px-3 py-1 rounded border ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-black'
              }`}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
