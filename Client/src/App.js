import React , {lazy,Suspense} from 'react'
import {Routes,Route} from "react-router-dom"
import Loading from './components/OnLoading/OnLoading'
// import ErrorBoundary from './components/Error_boundary/Error_boundary'
// import Broken from './components/Broken'
import Nav from "./components/Nav/Nav";
const Home = lazy(() => import ("./pages/Home/Home"))
const SignUp = lazy(() => import ("./pages/SignUp/SignUp"))
const Login = lazy(() => import ("./pages/Login/Login"))
const Footer = lazy(() => import ("./components/Footer/Footer"))
const Shop = lazy(() => import ("./pages/Shop/Shop"))

function App() {
  return (
     <div className="App">
          <Suspense fallback={<Loading />}>
      <Nav />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
          </Suspense>
    </div>
  );
}

export default App;
