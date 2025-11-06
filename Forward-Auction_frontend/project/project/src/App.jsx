// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserRoleContext from "./UserRoleContext";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './dashboard';
import CreateAuction from './components/features/auctions/pages/CreateAuction';
import BidderList from './components/common/table/BidderList';
import './style.css';
import FindBidderPage from './components/features/auctions/pages/FindBidderPage';
import ViewEditAuction from './components/features/auctions/pages/ViewEditAuction';
import ViewAuction from './components/features/auctions/pages/ViewAuction';
import AddBidderForm from "./components/features/bidders/pages/createbidder";
import ViewEditBidder from "./components/features/bidders/pages/vieweditbidders";
import ProductLine from './components/features/products/pages/ProductLineDetails';
import ProductCategory from './components/features/products/pages/ProductCategory';
import AddUserForm from './components/features/users/pages/AddNewUsers';
import UserList from './components/features/users/pages/UserList';
import AuctionNotificationForm from './components/features/auction_manager/pages/AuctionNotificationForm';
import MessageBoard from './components/features/auction_manager/pages/MessageBoard';
import Login_2 from "./pages/Login_2";
import AuctionLive from "./components/features/auction_manager/pages/AuctionLive";
import Infocards from "./components/InfoCards";
import RelaunchAuction from "./components/features/auctions/pages/RelaunchAuction";
import ChangePassword from "./components/features/auction_manager/pages/ChangePassword";
import ContactUs from './pages/ContactUs'; // Adjust the path based on your project structure
import LiveAuctionList from './components/features/auction_manager/pages/LiveAuctionList';
import TodaysAuctionList from './components/features/auction_manager/pages/TodaysAuctionList';
import CurrentWeekAuction from './components/features/auction_manager/pages/CurrentWeekAuctions';
import CurrentMonthAuction from './components/features/auction_manager/pages/CurrentMonthAuctions';
import BidderDashboard from './BidderDashboard';
import  BidderTodaysAuctionList from './Bidder_Dashboard/BidderTodaysAuctionList';
const App = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);
 return (
  <GoogleOAuthProvider clientId="50820545896-lb4gad6gl68l0psvhgepdbqmabshi6dd.apps.googleusercontent.com"> 
  <UserRoleContext.Provider value={{ userRole, setUserRole }}>
    <Router>
      <Routes>
         <Route path="/login_2" element={<Login_2 />} />
          <Route
          path="*"
          element={
      <div >

        <Sidebar isOpen={isSidebarOpen} />
        <section id="content" className={isSidebarOpen ? 'with-sidebar' : 'full-width'}>
          <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
          {/*<div style={{ height: '35px', backgroundColor: '#456182' }} />*/}

        <main >
           <Routes>
          {/* Dynamic page content rendered here */}
          
            <Route path="/" element={<Dashboard/>} />
            <Route path="/BidderDashboard" element={<BidderDashboard/>} />
            <Route path="/CreateAuction" element={<CreateAuction />} />
            <Route path="/BidderList" element={< BidderList/>} />
            <Route path="/FindBidderPage" element={<FindBidderPage />} />
            <Route path="createbidder" element={<AddBidderForm />} />
            <Route path="/ViewEditAuction" element={<ViewEditAuction />} />
             <Route path="/ViewAuction" element={<ViewAuction />} />
            <Route path="/ViewEditBidder" element={<ViewEditBidder/>}/>
            <Route path="/ProductLine" element={<ProductLine/>}/>
            <Route path="/ProductCategory" element={<ProductCategory/>}/>
            <Route path="/AddUserForm" element={<AddUserForm />} />
            <Route path="/UserList" element={<UserList />} />
            <Route path="/AuctionNotificationForm" element={<AuctionNotificationForm/>}/>
            <Route path="/MessageBoard" element={<MessageBoard/>}/>
            <Route path="/AuctionLive" element={<AuctionLive/>}/>
            <Route path="/RelaunchAuction" element={<RelaunchAuction/>}/>
            <Route path="/ChangePassword" element={<ChangePassword/>}/>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/LiveAuctionList" element={<LiveAuctionList/>}/>
            <Route path="/TodaysAuctionList" element={<TodaysAuctionList/>}/>
            <Route path="/CurrentWeekAuction" element={<CurrentWeekAuction/>}/>
            <Route path="/CurrentMonthAuction" element={<CurrentMonthAuction/>}/>
            <Route path="/BidderTodaysAuctionList" element={<BidderTodaysAuctionList/>}/>


          </Routes>
          </main>
        </section>
      </div>
          }
          />
          </Routes>
    </Router>
    </UserRoleContext.Provider>
       </GoogleOAuthProvider>
  );
};

export default App;
