import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Home,
  User,
  Settings,
  BarChart2,
  MessageCircle,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import logo from "../../assets/images/logo.png";
import favicon from "../../assets/images/favicon.png";

function Sidebar({ sidebarOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Forward Auction",
      icon: <User className="w-5 h-5" />,
      children: [
        { name: "View Edit Auction", path: "/viewauction" },
        { name: "Re-Launch Auctions", path: "/relaunch" },
        { name: " Edit Live Auction", path: "/edit-live-auction" },
      ],
    },
    {
      name: "Bidder Master",
      icon: <BarChart2 className="w-5 h-5" />,
      children: [
        { name: "Craete Bidder", path: "/createbidder" },
        { name: "View/Edit Bidder", path: "/viewbidder" },
      ],
    },
    {
      name: "Product Master",
      icon: <FileText className="w-5 h-5" />,
       children: [
        { name: "Product Line", path: "/productline" },
        { name: "Product Category", path: "/productcateg" },
      ],
    },
    {
      name: "User Master",
      icon: <Settings className="w-5 h-5" />,
       children: [
        { name: "Add New User", path: "/adduser" },
        { name: "View All User", path: "/viewuser" },
      ],
    },

  {
      name: "Auction Mnagaer",
      icon: <Settings className="w-5 h-5" />,
       children: [
        { name: "Auction Live", path: "/auctionlive" },
        { name: "Auction Notification", path: "/auctionnotif" },
        { name: "Message Board", path: "/msgboard" },
        { name: "Change Password", path: "/chngepswd" },
      ],
    },
     {
      name: "Reports",
      icon: <Settings className="w-5 h-5" />,
       children: [
        { name: "Successful details", path: "/sdetails" },
        { name: "Successfully summary", path: "/ssummary" },
        { name: "No Bid Report", path: "/viewbidder" },
       
      ],
    },
  ];

  return (
    <div
      className={`transition-all duration-300 bg-blue-200 shadow-lg ${
        sidebarOpen ? "w-64" : "w-16"
      } flex flex-col h-screen`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center py-2 border-b border-green-400">
        {sidebarOpen ? (
          <img src={logo} alt="Dashboard Logo" className="w-32 h-auto" />
        ) : (
          <img src={favicon} alt="Logo Icon" className="w-8 h-8" />
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 text-sm text-white flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full flex items-center justify-between p-2 rounded-md transition-all duration-200 ${
                    openDropdown === item.name
                      ? "bg-orange-500 text-white font-semibold"
                      : "hover:bg-blue-100 hover:text-blue-800"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    {sidebarOpen && <span>{item.name}</span>}
                  </div>
                  {sidebarOpen &&
                    (openDropdown === item.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </button>
                {openDropdown === item.name &&
                  sidebarOpen &&
                  item.children.map((child) => (
                    <NavLink
                      key={child.name}
                      to={child.path}
                      className={({ isActive }) =>
                        `ml-6 flex items-center space-x-2 p-2 rounded-md transition-all duration-200 ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-white hover:font-bold"
                        }`
                      }
                    >
                      <span>{child.name}</span>
                    </NavLink>
                  ))}
              </>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                {item.icon}
                {sidebarOpen && <span>{item.name}</span>}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
