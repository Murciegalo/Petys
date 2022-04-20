import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/OnLoading/OnLoading';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/Auth/PrivateRoutes';
import Error from './components/Error/Error';
const Layout = lazy(() => import('./pages/Layout/Layout'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const SingleProduct = lazy(() => import('./pages/SingleProduct/SingleProduct'));
const Me = lazy(() => import('./pages/Me/Me'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/*" element={<Shop />} />

            {/* Route to be protected again after implementing logic */}
            {/* shop will work in production? */}
            <Route path=":category/:itemId" element={<SingleProduct />} />
            <Route element={<PrivateRoute />}>
              <Route path="/me" element={<Me />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
