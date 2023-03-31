import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { loginUser, selectError } from '../authSlice.js';
import * as yup from 'yup';
import './auth.css';
import { handleToast } from '../../../components/utils/constants.js';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .min(3, 'Email must be at least 3 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      handleToast({ msg: error, type: 'error' });
    }
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    dispatch(
      loginUser({
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <h3>
        <span>Login </span>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          {...register('email')}
          placeholder="test@example.com"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          {...register('password')}
          placeholder="*****************"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
