import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/OnLoading/OnLoading';
import PrivateRoute from './components/Auth/PrivateRoutes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

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

            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
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
