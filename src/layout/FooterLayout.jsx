import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const FooterLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default FooterLayout;
