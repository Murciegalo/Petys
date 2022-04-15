import React from 'react';

export const Logout = ({ isAuth, handleLogout }) => {
  const logout = isAuth && <span onClick={handleLogout}>Logout</span>;
  return logout;
};
