import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllProducts,
  fetchProducts,
  getProductStatus,
  getProductError,
} from './productSlice';

const ProductIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const status = useSelector(getProductStatus);
  const error = useSelector(getProductError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>{error}</div>;
  }

  console.log(products, 'products');

  return <div>ProductIndex</div>;
};

export default ProductIndex;
