import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/OnLoading/OnLoading';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/Auth/PrivateRoutes';
import Spinner from './components/spinner/Spinner.component';
import ErrorBoundary from './components/Error_boundary/Error_boundary';
import { Error } from './Error/Error';
const Home = lazy(() => import('./pages/Home/Home'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const ProductSpecs = lazy(() => import('./pages/ProductSpecs/ProductSpecs'));
const Me = lazy(() => import('./pages/Me/Me'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/me"
            element={
              <PrivateRoute>
                <Me />
              </PrivateRoute>
            }
          />
          <Route
            path="/shop/:itemId"
            element={
              <PrivateRoute>
                <ProductSpecs />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          {/* //Error Rendering */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
