import React from "react";
import { FileText, Hammer } from "lucide-react";
import { FaGavel } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Counter = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const cards = [
    {
      id: 1,
      heading: "LIVE AUCTION STARTING TODAY",
      footer: "Live Auction",
      color: "bg-moss-green",
    },
    {
      id: 2,
      heading: "TODAY'S AUCTION",
      footer: "Today Auction",
      color: "bg-dark-peach",
    },
    {
      id: 3,
      heading: "CURRENT WEEK AUCTION",
      footer: "Current Week Auction",
      color: "bg-oyster-green",
    },
    {
      id: 4,
      heading: "CURRENT MONTH AUCTION",
      footer: "Current Month Auction",
      color: "bg-burgundy",
    },
  ];

  return (
    <div className="py-4">
      <div className="flex justify-end items-center gap-4 py-2 px-5 bg-gray-50 shadow-sm rounded-md">
        <h2 className="text-lg font-medium text-gray-700 mr-auto">
          Forward Auction
        </h2>

        {/* View Bidder T&C Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-red-500 bg-red-100 hover:bg-red-200 transition">
          <FileText className="w-4 h-4" />
          View Bidder T&C*
        </button>

        {/* Create Auction Button */}
        <button
          onClick={() => navigate("/createauction")}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gray-800 hover:bg-gray-700 transition"
        >
          <Hammer className="w-4 h-4" />
          Create Auction
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-5">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`${card.color} text-white rounded-2xl shadow p-4 flex flex-col justify-between`}
          >
            {/* Header with Icon and Heading */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full shadow-sm">
                <FaGavel className="w-5 h-5" />
              </div>
              <span className="text-white text-lg font-semibold">
                {card.heading}
              </span>
            </div>

            {/* Card Footer */}
            <div className="mt-auto border-t pt-3 text-sm text-white flex justify-between items-center">
              <span>{card.footer}</span>
              <div className="bg-gray-200 text-gray-800 font-bold w-6 h-6 flex items-center justify-center rounded-full shadow text-xs">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
