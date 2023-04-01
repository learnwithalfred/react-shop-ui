import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import {
  getAllCategories,
  getAllCampanies,
  getProductStatus,
  getProductError,
  fetchCategories,
  fetchCampanies,
  createProduct,
} from '../productSlice';
import './product.css'; // import the CSS file
import Container from '../../../components/Container';

const productSchema = yup.object().shape({
  name: yup.string().required(),
  img: yup.string().required(),
  description: yup.string().required(),
  campany_id: yup.number().required(),
  category_id: yup.number().required(),
  price: yup.number().required(),
});

const ProductForm = () => {
  const categories = useSelector(getAllCategories);
  const companies = useSelector(getAllCampanies);
  const status = useSelector(getProductStatus);
  const error = useSelector(getProductError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampanies());
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = (product) => {
    dispatch(createProduct(product));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <div className="product-container">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor="img">Image:</label>
          <input type="text" name="img" {...register('img')} />
          {errors.img && <p>{errors.img.message}</p>}

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" {...register('description')} />
          {errors.description && <p>{errors.description.message}</p>}

          <label htmlFor="category_id">Category:</label>
          <select name="category_id" {...register('category_id')}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category_id && <p>{errors.category_id.message}</p>}

          <label htmlFor="campany_id">Company:</label>
          <select name="campany_id" {...register('campany_id')}>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
          {errors.campany_id && <p>{errors.campany_id.message}</p>}

          <label htmlFor="price">Price:</label>
          <input type="number" name="price" {...register('price')} />
          {errors.price && <p>{errors.price.message}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  );
};

export default ProductForm;
