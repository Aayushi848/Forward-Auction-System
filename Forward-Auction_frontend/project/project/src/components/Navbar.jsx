// src/components/Navbar.jsx
import React, {useState, useEffect,useRef}  from 'react';

import { useLocation, useNavigate  } from 'react-router-dom';
import '../style.css';
import image from '../assets/icons/image.png';

const Navbar = ({toggleSidebar, toggleTheme}) => {
   const location = useLocation();
    const [userName, setUserName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
 
    useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserName(parsedUser.name || '');
      } catch (e) {
        console.error('Failed to parse user from localStorage', e);
      }
    }
  }, []);
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);
    const getPageName = (path) => {
    if (path === '/') return 'Dashboard';
    return path
      .split('/')
      .filter(Boolean)
      .map((part) =>
        part
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())
      )
      .join(' > ');
  };
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem('user');
  setUserName('');
  navigate('/login_2'); 
  // or use navigate('/') if you prefer
};



  const currentPath = location.pathname;
  

  return (
   
    <nav >
      <i  className="bx bx-menu" onClick={toggleSidebar} style={{ cursor: 'pointer', fontSize: '24px', marginRight: '15px' }}></i>
      {currentPath === '/' ? (
        // If on dashboard, show only H2
        <h2 className="text-2xl font-bold">Dashboard</h2>
      ) : (
        <h2 className="text-2xl font-bold">Forward Auction</h2>
        // Otherwise, show breadcrumb
    
        )}
      {/*<form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>*/}
    {/*  <input type="checkbox" id="switch-mode" hidden onChange={toggleTheme} /> 
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <i className="bx bxs-bell"></i>
        <span className="num">8</span>
      </a>*/}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}
      ref={dropdownRef}>
       
   {/* Contact Icon */}
   <div
    style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
  onClick={() => navigate('/contact-us')}
>
  <i
    className="bx bx-phone-call"
    title="Contact Support"
    style={{ fontSize: '20px', cursor: 'pointer', color: '#456182' }}
    onClick={() => window.location.href = 'mailto:support@example.com'}
  ></i>
  <span style={{ fontSize: '14px', color: '#456182', fontWeight: '500' }}>Contact Us</span>
  </div>
    <span style={{ color: '#999', fontSize: '18px' }}>|</span>
   <i
    className="bx bx-help-circle"
    title="View Process Guide"
    style={{ fontSize: '20px', cursor: 'pointer', color: '#456182' }}
    onClick={() => window.open('/ParticipationGuide.pdf', '_blank')}
  ></i>
   <span style={{ color: '#999', fontSize: '18px' }}>|</span>
        {userName && (
          <span style={{ fontSize: '14px', fontWeight: 500,color: '#456182'}}>{userName}</span>
        )}
      <a href="#" className="profile" >
        <img src={image} alt="Profile" 
        style={{ cursor: 'pointer' }}
          onClick={() => setDropdownOpen(!dropdownOpen)}/>
      </a>
       {dropdownOpen && (
          <div className="navbar-dropdown-menu">
            <div onClick={() => navigate('/profile')} className="navbar-dropdown-item">Profile Settings</div>
            <div onClick={handleLogout} className="navbar-dropdown-item">Logout</div>
          </div>
           )}
       </div>
    </nav>
   
  );
};

export default Navbar;

/* <div className="breadcrumb">
        <span className="home">Home</span>
        <span className="divider">/</span>
        <span className="active-page">{getPageName(currentPath)}</span>
      </div>*/