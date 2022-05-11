import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Loading from './components/OnLoading/OnLoading';
import PrivateRoute from './components/Auth/PrivateRoutes';
import { activeUserStart } from './redux/user/user.actions';

const Cover = lazy(() => import('./pages/Cover/Cover'));
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const Unauthorized = lazy(() => import('./pages/Unauthorized/Unauthorized'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const SingleProduct = lazy(() => import('./pages/SingleProduct/SingleProduct'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Home = lazy(() => import('./pages/Home/Home'));
const Error = lazy(() => import('./pages/Error/Error'));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeUserStart());
  }, [location, dispatch]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Cover />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="cart" element={<Cart />} />

            <Route path=":category/:itemId" element={<SingleProduct />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
