import React ,{useState,useRef , useEffect} from 'react';
import './Login.css';
import { FaPhoneAlt } from 'react-icons/fa';
import jsplLogo from '../assets/icons/jspllogo.png';
import AuctionZone from '../assets/icons/AuctionZone.png';
import LoginSlider from './LoginSlider'; 
import LoginFormModal from '../components/LoginFormModal';
const Login = () => {
  const[showModal,setShowModal]=useState(false);
  const handleOpenModal = ()=> setShowModal(true);
  const handleCloseModal =()=> setShowModal(false);
     const [showDropdown, setShowDropdown] = useState(false);
     const dropdownRef = useRef(null); // To track dropdown area
     const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  const handleLoginType = (type) => {
    // Handle login type selection (navigation or modal opening etc.)
    console.log(`Selected: ${type}`);
    setShowDropdown(false);
  };
   // Detect clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
    <div className="login-page-wrapper">
      <div className="login-header-wrapper">
        {/* Header Strip */}
        <div className="login-header-top">
          <div className="left">
            <FaPhoneAlt size={14} /> Call us
          </div>
          <div className="right">
            <span>Contact Customer Service |</span>
            <div className="login-dropdown-wrapper">
            <span onClick={toggleDropdown} style={{cursor:'pointer'}}>Login |

            </span>
            <div className={`login-dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <div onClick={() => handleLoginType('vendor')}>Vendor Login</div>
                <div onClick={() => handleLoginType('admin')}>Admin Login</div>
              </div>
            </div>
            <span>Signup</span>
          </div>
        </div>

        {/* Logo and Download */}
        <div className="login-header-bottom">
          <img src={AuctionZone} alt="Jindal Logo" />
          <button className="download-btn">Download</button>
        </div>
      </div>

      {/* Placeholder for the login box */}
      <div style={{ padding: '0px 0px' }}>
        <div style={{
          height: '40px',
          backgroundColor: '#456182',
          borderRadius: '0px'
        }}>
          {/* Login form will go here */}
        </div>
      </div>
      <div className="slider-wrapper">
      <LoginSlider onLoginClick={handleOpenModal}/>
      </div>
       {showModal && (
        <LoginFormModal
          onClose={handleCloseModal}
          setIsAuthenticated={() => {}}
        />
      )}
      
      <footer className="login-footer">
  Copyright © 2016 Jindal Infosolutions. All rights reserved.
</footer>
</div>
    </>
  );
};

export default Login;
