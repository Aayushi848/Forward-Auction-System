import React from 'react';
import { Hammer, UserCheck, ShoppingCart, CheckCircle } from 'lucide-react';

const ForwardAuction = () => {
  const stats = [
    {
      label: 'Live Auction',
      heading: 'LIVE AUCTION STARTING TODAY',
      count: 0,
      icon: <Hammer className="text-white w-6 h-6" />,
      bg: 'bg-gray-700',
    },
    {
      label: 'Today Auction',
      heading: "TODAY'S AUCTION",
      count: 67,
      icon: <UserCheck className="text-white w-6 h-6" />,
      bg: 'bg-sky-400',
    },
    {
      label: 'Current Week Auction',
      heading: 'CURRENT WEEK AUCTION',
      count: 69,
      icon: <ShoppingCart className="text-white w-6 h-6" />,
      bg: 'bg-teal-400',
    },
    {
      label: 'Current Month Auction',
      heading: 'CURRENT MONTH AUCTION',
      count: 1489,
      icon: <CheckCircle className="text-white w-6 h-6" />,
      bg: 'bg-purple-400',
    },
  ];

  return (
    <div className="p-6">
      {/* Header and Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-600">Forward Auction</h2>
        <div className="flex space-x-2">
          <button className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium text-sm hover:bg-red-200">
            📄 View Bidder T&C*
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-800">
            ➕ Create Auction
          </button>
        </div>
      </div>

      {/* Auction Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-sm">
            <div className={`${item.bg} p-4`}>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-900/30 rounded-lg p-3">{item.icon}</div>
                <div>
                  <div className="text-white text-sm font-medium">{item.heading}</div>
                  <div className="text-white text-xl font-semibold mt-1">{item.count}</div>
                </div>
              </div>
            </div>
            <div className="bg-white text-sm text-gray-800 px-4 py-2 rounded-b-xl border-t flex items-center">
              <span className="text-red-500 mr-2">📡</span> {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForwardAuction;
