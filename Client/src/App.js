import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Loading from './components/OnLoading/OnLoading';
import PrivateRoute from './components/Auth/PrivateRoutes';
import { activeUserStart } from './redux/user/user.actions';

const Layout = lazy(() => import('./pages/FrontLayout/Layout'));
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
          <Route path="/" element={<Nav />}>
            <Route index element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path=":category/:itemId" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
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
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
