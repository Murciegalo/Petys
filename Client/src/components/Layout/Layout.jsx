import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Layout = () => {
  return (
    <main className="App">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Layout;
