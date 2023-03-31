import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, selectProduct } from '../productSlice';
import { useNavigate } from 'react-router-dom';

import './product.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(getAllProducts);

  const handleProductClick = (productId) => {
    const response = products.filter((product) => product.id === productId);
    dispatch(selectProduct(response));
    navigate(`/products/${productId}`);
  };

  return (
    <div
      key={product.id}
      className="product"
      onClick={() => handleProductClick(product.id)}
    >
      <img src={product.img} alt={product.name} />
      <h6>{product.name}</h6>
      <p>${product.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
