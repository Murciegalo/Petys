import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/OnLoading/OnLoading';
import Nav from './components/Nav/Nav';

const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const Home = lazy(() => import('./pages/Home/Home'));
const Me = lazy(() => import('./pages/Me/Me'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const ProductSpecs = lazy(() => import('./pages/ProductSpecs/ProductSpecs'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:itemId" element={<ProductSpecs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
