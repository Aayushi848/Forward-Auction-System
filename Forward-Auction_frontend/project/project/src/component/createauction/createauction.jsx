import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAuction() {
  const navigate = useNavigate();

  const [bidders, setBidders] = useState([
    {
      id: "2343",
      name: "Vivek Chopra",
      location: "Delhi",
      contactPerson: "Akhilesh Singh",
      contactNumber: "8987665330",
      email: "vivek.chopra@jindalsteel.com",
    },
    {
      id: "2344",
      name: "Amit Sharma",
      location: "Mumbai",
      contactPerson: "Rohit Verma",
      contactNumber: "9876543210",
      email: "amit.sharma@example.com",
    },
  ]);

  const [showConfigurableTime, setShowConfigurableTime] = useState(false);

  const handleCheckboxChange = (label) => {
    if (label === "Allow Configurable Time") {
      setShowConfigurableTime(!showConfigurableTime);
    }
  };

  const handleAddBidder = () => {
    navigate("/viewbidder", { state: { bidders } });
  };

  return (
    <div className="p-6 space-y-8">
      {/* Breadcrumb */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Create Auction</span>
      </div>

      {/* Auction Settings */}
      <div className="rounded-l p-6 shadow space-y-8 bg-white">
        <h3 className="text-2xl font-bold">Create Auction</h3>
        <hr />

        <div className="flex flex-wrap gap-4 mt-2">
          <div>
            <label className="block mb-1">Auction Format *</label>
            <select
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
              disabled
            >
              <option>Forward Auction</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Auction Rule *</label>
            <select
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
              disabled
            >
              <option>Highest Bid Wins</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Auction Type *</label>
            <select
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
              disabled
            >
              <option>English</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          {[
            "Hide Opening Price",
            "Allow Auto Bid",
            "Hide Quantity",
            "Allow Configurable Time",
          ].map((label) => (
            <label key={label} className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(label)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        {showConfigurableTime && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block mb-1">
                Configurable Time (In Minutes)
              </label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter time in minutes"
              />
            </div>
            <div>
              <label className="block mb-1">Repetition</label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter repetition count"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block mb-1">Auction Name *</label>
            <input
              type="text"
              placeholder="Auction Name"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Start Date *</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Start Time</label>
            <input type="time" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Close Date *</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Close Time</label>
            <input type="time" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Currency Type *</label>
            <select className="w-full border rounded px-3 py-2">
              <option>--Select--</option>
              <option>Rupee</option>
              <option>$ US Dollar</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Auction Location *</label>
            <select className="w-full border rounded px-3 py-2">
              <option>--Select--</option>
              <option>Raigarh</option>
              <option>Angul</option>
              <option>Korba</option>
              <option>Jaipur</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Upload T&C *</label>
            <input type="file" className="w-full border rounded px-3 py-2" />
          </div>
        </div>
      </div>

      {/* Bidder List */}
      <div className="rounded-xl p-6 shadow space-y-4 bg-white">
        <h2 className="text-xl font-semibold">Bidder List</h2>
        <hr />

        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="mr-2">Show</label>
            <select className="shadow rounded px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span className="ml-2">entries</span>
          </div>
          <div>
            <label className="mr-2">Search:</label>
            <input
              type="text"
              className="border px-2 py-1 rounded"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex gap-6 mb-4">
          {["All Bidder", "Productwise Bidder", "Random Bidders"].map(
            (label) => (
              <label key={label} className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>{label}</span>
              </label>
            )
          )}
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-[1200px] border border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white text-left text-sm">
                <th className="px-4 py-2 border whitespace-nowrap">DELETE</th>
                <th className="px-4 py-2 border whitespace-nowrap">
                  BIDDER ID
                </th>
                <th className="px-4 py-2 border whitespace-nowrap">
                  BIDDER NAME
                </th>
                <th className="px-4 py-2 border whitespace-nowrap">LOCATION</th>
                <th className="px-4 py-2 border whitespace-nowrap">
                  CONTACT PERSON
                </th>
                <th className="px-4 py-2 border whitespace-nowrap">
                  CONTACT NUMBER
                </th>
                <th className="px-4 py-2 border whitespace-nowrap">EMAIL ID</th>
                <th className="px-4 py-2 border whitespace-nowrap">EMAIL ID</th>
                <th className="px-4 py-2 border whitespace-nowrap">EMAIL ID</th>
                <th className="px-4 py-2 border whitespace-nowrap">EMAIL ID</th>
                <th className="px-4 py-2 border whitespace-nowrap">EMAIL ID</th>
                <th className="px-4 py-2 border whitespace-nowrap">EMAIL ID</th>
              </tr>
            </thead>
            <tbody>
              {bidders.map((b, i) => (
                <tr key={i} className="text-sm hover:bg-gray-50">
                  <td className="border px-4 py-2 text-center whitespace-nowrap">
                    No
                  </td>
                  <td className="border px-4 py-2 whitespace-nowrap">{b.id}</td>
                  <td className="border px-4 py-2 whitespace-nowrap">
                    {b.name}
                  </td>
                  <td className="border px-4 py-2 whitespace-nowrap">
                    {b.location}
                  </td>
                  <td className="border px-4 py-2 whitespace-nowrap">
                    {b.contactPerson}
                  </td>
                  <td className="border px-4 py-2 whitespace-nowrap">
                    {b.contactNumber}
                  </td>
                  <td className="border px-4 py-2 whitespace-nowrap">
                    {b.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            Showing 1 to {bidders.length} of {bidders.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Previous
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              1
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Next
            </button>
          </div>
        </div>

        <div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleAddBidder}
          >
            + Add Bidder
          </button>
        </div>
      </div>

      {/* Item List */}
      <div className="rounded-xl p-6 shadow space-y-4 bg-white">
        <h2 className="text-xl font-semibold">Item List</h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[1200px] border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "LOT NO.",
                  "PRODUCT CATEGORY",
                  "DESCRIPTION *",
                  "QUANTITY",
                  "UOM",
                  "OPENING PRICE",
                  "RESERVE PRICE",
                  "BID INCREMENT",
                  "EXCISE DUTY",
                  "Upload packaging List",
                  "IMAGE",
                  "DRAWING",
                  "ACTION",
                ].map((col) => (
                  <th key={col} className="shadow px-3 py-2 text-left">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shadow px-3 py-2">
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1"
                    placeholder="Enter Lot No."
                  />
                </td>
                <td className="shadow px-3 py-2">
                  <select className="w-full shadow rounded px-2 py-1">
                    <option>--Select--</option>
                    <option>Plates-upto 20mm</option>
                    <option>Plates-upto 40mm</option>
                    <option>Plates-upto 60mm</option>
                  </select>
                </td>
                <td className="shadow px-3 py-2">
                  <input
                    type="text"
                    className="w-full shadow rounded px-2 py-1"
                    placeholder="Enter Description"
                  />
                </td>
                <td className="shadow px-3 py-2">
                  <input
                    type="number"
                    className="w-full shadow rounded px-2 py-1"
                    placeholder="Enter Quantity"
                  />
                </td>
                <td className="shadow px-3 py-2">
                  <select className="w-full rounded px-2 py-1">
                    <option>--Select--</option>
                    <option>MT</option>
                    <option>Nos</option>
                    <option>LTR</option>
                    <option>LOT</option>
                    <option>KG</option>
                    <option>WMT</option>
                  </select>
                </td>
                <td className="shadow px-3 py-2">
                  <input
                    type="number"
                    className="w-full shadow rounded px-2 py-1"
                    placeholder="Opening Price"
                  />
                </td>
                <td className="shadow px-3 py-2">
                  <input
                    type="number"
                    className="w-full shadow rounded px-2 py-1"
                    placeholder="Reserve Price"
                  />
                </td>
                <td className="shadow px-3 py-2">
                  <select className="w-full shadow rounded px-2 py-1">
                    <option>--Select--</option>
                    <option>Rupee</option>
                    <option>$ US Dollar</option>
                  </select>
                </td>
                <td className="shadow px-3 py-2">
                  <input
                    type="text"
                    className="w-full shadow rounded px-2 py-1"
                    placeholder="Excise Duty"
                  />
                </td>
                <td className="shadow px-3 py-2">
                  <input type="file" className="w-full" />
                </td>
                <td className="shadow px-3 py-2">
                  <input type="file" className="w-full" />
                </td>
                <td className="shadow px-3 py-2">
                  <input type="file" className="w-full" />
                </td>
                <td className="shadow px-3 py-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Add Item
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-4">
          + ADD Auction
        </button>
      </div>
    </div>
  );
}
