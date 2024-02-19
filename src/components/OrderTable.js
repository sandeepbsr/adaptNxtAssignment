// OrderTable.js
import React from 'react';

const OrderTable = () => {
  return (
    <div className="order-table">
      <table>
        {/* Table structure with dummy data */}
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td>Pending</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
