// src/Dashboard.jsx
import React from 'react';
import InfoCards from './components/InfoCards';
import { Link, useNavigate} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Slider from './component/Slider/Slider';
import BodyCard from './components/BodyCard/BodyCard'; // adjust path if needed




//import OrdersTable from './components/OrdersTable';
//import TodoList from './components/TodoList';

const BidderDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className = "dashboard-content">

      <BodyCard/>
<InfoCards role="bidder"/>
       
      
     
     
      
  <div style={{marginTop: '60px' }}>
  <Slider/>
     </div>
    </div>
    
  );
};

export default BidderDashboard;
/* <div className="table-data">
        <OrdersTable />
        <TodoList />
      </div>*/