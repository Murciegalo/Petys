import React from 'react';
import { useSelector } from 'react-redux';
import { grabAuth } from '../../redux/user/user.selector';
import { TextItem } from '../Nav/Nav.styles';

export const Logout = ({ handleLogout }) => {
  const isAuth = useSelector(grabAuth);
  const logout = isAuth && (
    <TextItem to="/" onClick={handleLogout}>
      Logout
    </TextItem>
  );
  return logout;
};
