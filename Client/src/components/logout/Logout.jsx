import React from 'react';
import { TextItem } from '../Nav/Nav.styles';

export const Logout = ({ isAuth, handleLogout }) => {
  const logout = isAuth && (
    <TextItem to="/" onClick={handleLogout}>
      Logout
    </TextItem>
  );
  return logout;
};
