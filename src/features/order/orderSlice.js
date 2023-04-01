import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_URL, gethAuthHeaders } from '../../components/utils/constants';
const ORDER_URL = `${API_URL}/orders`;
const headers = gethAuthHeaders();

export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
  const response = await axios.get(ORDER_URL, {
    headers,
  });
  return response.data;
});

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (order) => {
    const response = await axios.post(ORDER_URL, order, { headers });
    return response.data;
  }
);

export const getMyOrders = createAsyncThunk('order/loadMyOrders', async () => {
  const response = await axios.get(`${ORDER_URL}/myorders`);
  return response.data;
});

const initialState = {
  orders: [],
  status: 'idle',
  error: null,
  myOrders: [],
  orderDetails: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        console.log(action.error.message);
        state.error = action.error.message;
      })

      .addCase(createOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = [...state.orders, action.payload];
        state.myOrders = [...state.myOrders, action.payload];
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(getMyOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMyOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.myOrders = action.payload;
      })
      .addCase(getMyOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAllOrders = (state) => state.order.orders;
export const getOrderStatus = (state) => state.order.status;
export const getOrderError = (state) => state.order.error;
export const getMyOrdersList = (state) => state.order.myOrders;
export const getOrderDetails = (state) => state.order.orderDetails;

export const {} = orderSlice.actions;

export default orderSlice.reducer;
