import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Menu,
  X,
  Home,
  HardHat,
  Flame,
  Footprints,
  Users,
  ChevronDown,
} 
from "lucide-react";
import { NavLink } from "react-router-dom";

import BodyCard from "../BodyCard/BodyCard";
import Slider from "../Slider/Slider";
import Counter from "../cardCounter/Counter";

import profile from "../../assets/images/profile.png";
import logo from "../../assets/images/logo.png";
import favicon from "../../assets/images/favicon.png";

function TopHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const avatarRef = useRef(null);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  

  const menuConfig = [
    {
      name: "auction",
      icon: <HardHat className="w-5 h-5" />,
      label: "Forward Auction",
      items: [
        { label: "View/Edit Auction", path: "/viewauction" },
        { label: "Re-Launch Auction", path: "/relaunch" },
        { label: "Edit Live Auction", path: "/editlive" },
      ],
    },
    {
      name: "message",
      icon: <Flame className="w-5 h-5" />,
      label: "Message",
      items: [
        { label: "Create Message", path: "/createmsg" },
        { label: "View Message", path: "/viewmsg" },
      ],
    },
    {
      name: "bidder",
      icon: <Footprints className="w-5 h-5" />,
      label: "Bidder Master",
      items: [
        { label: "Create Bidder", path: "/createbidder" },
        { label: "View/Edit Bidder", path: "/viewbidder" },
      ],
    },
    {
      name: "product",
      icon: <Users className="w-5 h-5" />,
      label: "Product Master",
      items: [
        { label: "Product Line", path: "/productline" },
        { label: "Product Category", path: "/productcateg" },
      ],
    },
    {
      name: "user",
      icon: <Users className="w-5 h-5" />,
      label: "User Master",
      items: [
        { label: "Add New User", path: "/adduser" },
        { label: "View All Users", path: "/viewuser" },
      ],
    },
    {
      name: "manager",
      icon: <Users className="w-5 h-5" />,
      label: "Auction Manager",
      items: [
        { label: "Auction Live", path: "/auctionlive" },
        { label: "Auctions Notification", path: "/auctionnotif" },
        { label: "Message Board", path: "msgboard" },
        { label: "Change password", path: "/chngepswd" },
      ],
    },
    {
      name: "report",
      icon: <Users className="w-5 h-5" />,
      label: "Report",
      items: [
        { label: "Successful Details", path: "sdetails" },
        { label: "Successful summary", path: "/ssummary" },
        { label: "No Bid Report", path: "/bidrepo" },
        { label: "Message Board", path: "/msgboard" },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`transition-all duration-300 bg-blue-200 shadow-lg ${sidebarOpen ? "w-64" : "w-16"} flex flex-col`}>
        <div className="flex items-center justify-center py-2 border-b border-green-400">
          {sidebarOpen ? (
            <img src={logo} alt="Dashboard Logo" className="w-32 h-auto" />
          ) : (
            <img src={favicon} alt="Logo Icon" className="w-8 h-8" />
          )}
        </div>

        <nav className="p-4 space-y-2 text-sm text-white">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-orange-500 text-white font-medium"
                  : "hover:text-blue-600 hover:bg-blue-100 hover:font-medium"
              }`
            }
          >
            <Home className="w-5 h-5" />
            {sidebarOpen && <span>Dashboard</span>}
          </NavLink>

          {menuConfig.map((menu) => (
            <div key={menu.name}>
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="w-full flex items-center justify-between text-left p-2 rounded-md hover:text-blue-600 hover:bg-blue-100 hover:font-medium transition-all"
              >
                <div className="flex items-center space-x-2">
                  {menu.icon}
                  {sidebarOpen && <span>{menu.label}</span>}
                </div>
                {sidebarOpen && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === menu.name ? "rotate-180" : ""}`} />
                )}
              </button>

              {/* Dropdown Items */}
              <div
                className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === menu.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-1 space-y-1">
                  {menu.items.map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={item.path}
                      className="block hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all duration-300"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Nav */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-gray-700 hover:text-black">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4 relative">
            <div className="hidden md:block text-gray-600 font-medium">{time}</div>
            <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />

            <div className="relative" ref={avatarRef}>
              <button onClick={() => setAvatarDropdownOpen((prev) => !prev)} className="flex items-center space-x-2 focus:outline-none">
                <img src={profile} alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
              </button>

              {avatarDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-20"
                  onMouseEnter={() => setAvatarDropdownOpen(true)}
                  onMouseLeave={() => setAvatarDropdownOpen(false)}
                >
                  <ul className="py-2 text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-4 flex-1 overflow-y-auto">
          <Slider />
          <BodyCard />
          <Counter />
        </main>

        <footer className="bg-white p-4 text-center shadow-inner">
          © 2025 Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default TopHeader;
