import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import UserRoleContext from "../../src/UserRoleContext";
import '../style.css';


import jsplFlag from '../assets/icons/flag_jspl.svg';
import jspllogo from '../assets/icons/jspllogo.png';

const Sidebar = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);
 const { userRole, setUserRole  } = useContext(UserRoleContext);

  // Collapse all dropdowns when sidebar collapses
  useEffect(() => {
    if (!isOpen) {
      setOpenMenu(null);
    }
  }, [isOpen]);
  // Load userRole after component mounts
  useEffect(() => {
    const role = localStorage.getItem('userRole')?.trim();
    console.log('Loaded userRole:', role);
    setUserRole(role);
  }, []);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };



  return (
    <section id="sidebar" className={isOpen ? '' : 'collapsed'}>
      <a href="#" className="brand">
        {!isOpen ? (
          <img src={jsplFlag} alt="JSPL Flag" className="jspl-logo-collapsed" />
        ) : (
          <img src={jspllogo} alt="JSPL Logo" className="jspl-logo" />
        )}
      </a>
 {userRole === 'admin' && (
  <>
      <ul className="side-menu top">
        
           
           <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </NavLink>
        </li>

        <li className={`dropdown ${openMenu === 'auction' ? 'open' : ''}`}>
          <div className="dropdown-toggle" onClick={() => toggleMenu('auction')}>
            <i className="bx bxs-shopping-bag-alt" onClick={(e) => e.stopPropagation()}></i>
            <span className="text">Forward Auction</span>
             <i className={`bx ${openMenu === 'auction' ? 'bx-chevron-up' : 'bx-chevron-down'} arrow-icon`}></i>

          </div>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/CreateAuction" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">Create Auction</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ViewEditAuction" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">View/Edit Auction</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/RelaunchAuction" className={({ isActive}) => isActive ? 'active' : ''}>
              <span className="text">Relaunch Auction</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ViewEditAuction" className={({ isActive }) => isActive ? 'active' : ''}>
             
                <span className="text">Edit Live Auction</span>
              </NavLink>
            </li>
            
          </ul>
        </li>

        <li className={`dropdown ${openMenu === 'bidder' ? 'open' : ''}`}>
          <div className="dropdown-toggle" onClick={() => toggleMenu('bidder')}>
            <i className="bx bxs-doughnut-chart" onClick={(e) => e.stopPropagation()}></i>
            <span className="text">Bidder Master</span>
            <i className={`bx ${openMenu === 'bidder' ? 'bx-chevron-up' : 'bx-chevron-down'} arrow-icon`}></i>

          </div>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/createbidder" className={({ isActive }) => isActive ? 'active' : ''}>
               
                <span className="text">Create Bidder</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ViewEditBidder" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">View/Edit Bidder</span>
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={`dropdown ${openMenu === 'product' ? 'open' : ''}`}>
          <div className="dropdown-toggle" onClick={() => toggleMenu('product')}>
            <i className="bx bxs-message-dots" onClick={(e) => e.stopPropagation()}></i>
            
            <span className="text">Product Master</span>
            <i className={`bx ${openMenu === 'product' ? 'bx-chevron-up' : 'bx-chevron-down'} arrow-icon`}></i>

          </div>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/ProductLine" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">Product Line</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ProductCategory" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">Product Category</span>
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={`dropdown ${openMenu === 'user' ? 'open' : ''}`}>
          <div className="dropdown-toggle" onClick={() => toggleMenu('user')}>
            <i className="bx bxs-group" onClick={(e) => e.stopPropagation()}></i>
            <span className="text">User Master</span>
             <i className={`bx ${openMenu === 'user' ? 'bx-chevron-up' : 'bx-chevron-down'} arrow-icon`}></i>

          </div>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/AddUserForm" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">Add New User</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/UserList" className={({ isActive }) => isActive ? 'active' : ''}>
               
                <span className="text">View All User</span>
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={`dropdown ${openMenu === 'auctionManager' ? 'open' : ''}`}>
          <div className="dropdown-toggle" onClick={() => toggleMenu('auctionManager')}>
            <i className="bx bxs-group" onClick={(e) => e.stopPropagation()}></i>
            <span className="text">Auction Manager</span>
             <i className={`bx ${openMenu === 'auctionManager' ? 'bx-chevron-up' : 'bx-chevron-down'} arrow-icon`}></i>

          </div>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/AuctionLive" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">Auction Live</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/AuctionNotificationForm" className={({ isActive }) => isActive ? 'active' : ''}>
              
                <span className="text">Auction Notification</span>
              </NavLink>
              </li>
              <li>
              <NavLink to="/MessageBoard" className={({ isActive }) => isActive ? 'active' : ''}>
               
                <span className="text">Message Board</span>
              </NavLink>
               </li>
               <li>
              <NavLink to="/ChangePassword" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">Change Password</span>
              </NavLink>
               </li>
          
          </ul>
        </li>
         
      </ul>
        </>
 )}
 {userRole === 'bidder' && (
  <>
      <ul className="side-menu top">
         <li>
          <NavLink to="/BidderDashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </NavLink>
        </li>
        <li className={`dropdown ${openMenu === 'auction' ? 'open' : ''}`}>
          <div className="dropdown-toggle" onClick={() => toggleMenu('auction')}>
            <i className="bx bxs-shopping-bag-alt" onClick={(e) => e.stopPropagation()}></i>
            <span className="text">Auctions</span>
             <i className={`bx ${openMenu === 'auction' ? 'bx-chevron-up' : 'bx-chevron-down'} arrow-icon`}></i>

          </div>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/CreateAuction" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">All Products</span>
              </NavLink>
            </li>
            
            
            
            
          </ul>
        </li>
        <li className={`dropdown ${openMenu === 'bidder' ? 'open' : ''}`}>
          <div className="dropdown-toggle" onClick={() => toggleMenu('bidder')}>
            <i className="bx bxs-doughnut-chart" onClick={(e) => e.stopPropagation()}></i>
            <span className="text">Bidder</span>
            <i className={`bx ${openMenu === 'bidder' ? 'bx-chevron-up' : 'bx-chevron-down'} arrow-icon`}></i>

          </div>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/createbidder" className={({ isActive }) => isActive ? 'active' : ''}>
               
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ViewEditBidder" className={({ isActive }) => isActive ? 'active' : ''}>
                
                <span className="text">Change Password</span>
              </NavLink>
            </li>
          </ul>
        </li>

        

       
      </ul>
       </>
 )}
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Reports</span>
          </a>
        </li>
        
      </ul>
    </section>
  );
};

export default Sidebar;
