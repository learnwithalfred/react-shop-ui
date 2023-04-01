import React from 'react';
import './order.css';
import OrderItem from './OrderItem';

const OrderList = ({ orders }) => {
  return (
    <ol className="order-list">
      {orders.map((order) => (
        <li key={order.id}>
          <OrderItem order={order} />
        </li>
      ))}
    </ol>
  );
};

export default OrderList;
