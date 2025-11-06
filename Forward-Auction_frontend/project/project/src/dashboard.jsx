// src/Dashboard.jsx
import React from 'react';
import InfoCards from './components/InfoCards';
import { Link, useNavigate} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Slider from './component/Slider/Slider';
import BodyCard from './components/BodyCard/BodyCard'; // adjust path if needed




//import OrdersTable from './components/OrdersTable';
//import TodoList from './components/TodoList';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className = "dashboard-content">
      
      <Slider/>
      <BodyCard/>
      
     <div className="head-title">
        {/* <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li><i className="bx bx-chevron-right"></i></li>
            <li><a className="active" href="#">Home</a></li>
          </ul>
        </div>*/}
        <div className="w-full flex justify-between items-center gap-4 py-2 px-5 bg-gray-50 shadow-sm rounded-md ">
        <h2 className="text-lg font-medium text-gray-700 custom-margin">
          Forward Auction
        </h2>
        {/* View Bidder T&C Button */}
        <div className="left">
        <div className="button-group">
        <Link to="/CreateAuction" className="btn-view-tc">
         <i className="fas fa-file-pdf "></i>
        <span className="text">Bidder T&C</span>
        </Link>
       {/* Create Auction Button */}
        <Link to="/CreateAuction" className="btn-download">
       <i className="fas fa-gavel"></i>
       <span className="text">Create Auction</span>
       </Link>
       </div>
       </div>
       
    </div>
       
</div>
      
 <InfoCards role="admin" />
  
     
    </div>
  );
};

export default Dashboard;
/* <div className="table-data">
        <OrdersTable />
        <TodoList />
      </div>*/