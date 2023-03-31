import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './auth.css';
const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .min(3, 'Email must be at least 3 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password Confirmation is required'),
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  address: yup
    .string()
    .required('Address is required')
    .min(3, 'Address must be at least 3 characters'),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="auth-container">
      <h3>
        <span>Sign Up Here</span>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          {...register('name')}
          placeholder="Full Name"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Address:</label>
        <input
          type="text"
          name="address"
          {...register('address')}
          placeholder="Full Address"
        />
        {errors.address && <p>{errors.address.message}</p>}
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
        <label>Password Confirmation:</label>
        <input
          type="password"
          name="passwordConfirmation"
          {...register('passwordConfirmation')}
          placeholder="*****************"
        />
        {errors.passwordConfirmation && (
          <p>{errors.passwordConfirmation.message}</p>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
