import React from 'react';
import './order.css';
const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <img src={order.product.img} alt={order.product.name} />
      <div className="order-details">
        <h3>{order.product.name}</h3>
        <p>{order.user.name}</p>
        <p>${order.product.price}</p>
      </div>
    </div>
  );
};

export default OrderItem;
