// OrderDashboard.js
import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import OrdersTab from './OrdersTab';
import OrderTable from './OrderTable';

class OrderDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define your initial state here
    };
  }

  // Add state manipulation methods if needed

  render() {
    return (
      <div className="order-dashboard">
        <NavigationBar />
        <OrdersTab />
        <OrderTable />
      </div>
    );
  }
}

export default OrderDashboard;
