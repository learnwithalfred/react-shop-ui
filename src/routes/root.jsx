import React from 'react';
import Container from '../components/Container';
import ProductIndex from '../features/product/product';

const Root = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <ProductIndex />
    </Container>
  );
};

export default Root;
