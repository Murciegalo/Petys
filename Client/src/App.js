import React , {lazy,Suspense} from 'react'
import {Routes,Route} from "react-router-dom"
import Loading from './components/OnLoading/OnLoading'
import Nav from "./components/Nav/Nav";
// import ErrorBoundary from './components/Error_boundary/Error_boundary'
// import Broken from './components/Broken'
const Home = lazy(() => import ("./pages/Home/Home"))
const SignUp = lazy(() => import ("./pages/SignUp/SignUp"))
const Login = lazy(() => import ("./pages/Login/Login"))
const Footer = lazy(() => import ("./components/Footer/Footer"))
const Shop = lazy(() => import ("./pages/Shop/Shop"))
const Cart = lazy(() => import ("./pages/Cart/Cart"))
const ForgotPassword = lazy(() => import ("./pages/ForgotPassword/ForgotPassword"))

function App() {
  return (
     <div className="App">
      <Nav />
          <Suspense fallback={<Loading />}>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
      <Footer />
          </Suspense>
    </div>
  );
}

export default App;
