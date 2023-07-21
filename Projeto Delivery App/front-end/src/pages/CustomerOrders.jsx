import React from 'react';
import Navbar from '../components/NavBar';
import Orders from '../components/Orders';
import './CustomerOrders.css';

export default function CustomerOrders() {
  return (
    <div>
      <Navbar />
      <Orders />
    </div>
  );
}
