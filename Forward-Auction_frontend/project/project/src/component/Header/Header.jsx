// function Header() {
//   return (
//     <header className="bg-white shadow p-4">
//       <h1 className="text-xl font-semibold">Header</h1>
//     </header>
//   );
// }

// export default Header;

import { useEffect, useRef, useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import profile from "../../assets/images/profile.png";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const avatarRef = useRef(null);

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

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-700 hover:text-black"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4 relative">
        <div className="hidden md:block text-gray-600 font-medium">{time}</div>
        <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />

        <div className="relative" ref={avatarRef}>
          <button
            onClick={() => setAvatarDropdownOpen((prev) => !prev)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src={profile}
              alt="User"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </button>

          {avatarDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-20">
              <ul className="py-2 text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
