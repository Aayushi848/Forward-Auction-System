// src/Dashboard.jsx
import React from 'react';
import InfoCards from './components/InfoCards';
import OrdersTable from './components/OrdersTable';
import TodoList from './components/TodoList';

const Dashboard = () => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li><i className="bx bx-chevron-right"></i></li>
            <li><a className="active" href="#">Home</a></li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className="bx bxs-cloud-download"></i>
          <span className="text">Create Auction</span>
        </a>
        
      </div>

      <InfoCards />

      <div className="table-data">
        <OrdersTable />
        <TodoList />
      </div>
    </main>
  );
};

export default Dashboard;
