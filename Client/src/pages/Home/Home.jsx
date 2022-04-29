import React from 'react';
import { useSelector } from 'react-redux';
import { grabLoading, grabRole } from '../../redux/user/user.selector';
import Spinner from '../../components/Spinner/Spinner.component';
import ProfileNav from '../../components/ProvileNav/ProfileNav';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import PasswordForm from '../../components/ProfilePassForm/PasswordForm';
import AdminNav from '../../components/AdminNav/AdminNav';
import { Nav, UserContent, UserView } from './Home.styles';

const Home = () => {
  const loading = useSelector(grabLoading);
  const role = useSelector(grabRole);
  const adminNav = !loading && role === 'admin' && <AdminNav />;
  return loading ? (
    <Spinner />
  ) : (
    <UserView>
      <Nav>
        <ProfileNav />
        {adminNav}
      </Nav>
      <UserContent>
        <ProfileForm />
        <div className="line">&nbsp;</div>
        <PasswordForm />
      </UserContent>
    </UserView>
  );
};

export default Home;
