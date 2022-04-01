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
const OneProduct = lazy(() => import('./pages/OneProduct/OneProduct'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/me" element={<Me />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/shop/:itemId" element={<OneProduct />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
