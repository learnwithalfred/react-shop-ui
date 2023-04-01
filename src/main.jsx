import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import ErrorPage from './error-page';
import About from './routes/about';
import Root from './routes/root';
import ProductDetails from './features/product/components/ProductDetails';
import SignUpForm from './features/auth/forms/SignUpForm';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './features/auth/forms/LoginForm';
import ProductForm from './features/product/components/ProductForm';
import OrderIndex from './features/order/order';
import { useAuth } from './components/utils/constants';

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  if (!auth) return <Navigate to="/auth/login" />;
  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
    errorElement: <ErrorPage />,
  },

  {
    path: 'auth/signup',
    element: <SignUpForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'auth/login',
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'orders',
    element: (
      <PrivateRoute>
        <OrderIndex />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'products/new',
    element: (
      <PrivateRoute>
        <ProductForm />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
