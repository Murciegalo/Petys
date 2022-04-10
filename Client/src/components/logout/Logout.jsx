import React from 'react';
import { TextItem } from '../Nav/Nav.styles';

export const Logout = ({ isAuth, isLoading, handleLogout }) => {
  const logout = isAuth && <TextItem onClick={handleLogout}>Logout</TextItem>;
  return logout;
};
