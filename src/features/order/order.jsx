import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllOrders,
  getOrderStatus,
  getOrderError,
  fetchOrders,
} from './orderSlice';
import OrderList from './components/OrderLisr';
import Container from '../../components/Container';

const OrderIndex = () => {
  const dispatch = useDispatch();
  const status = useSelector(getOrderStatus);
  const error = useSelector(getOrderError);
  const orderList = useSelector(getAllOrders);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders());
    }
  }, [status, dispatch]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <h1>Orders</h1>
      <OrderList orders={orderList} />
    </Container>
  );
};

export default OrderIndex;
