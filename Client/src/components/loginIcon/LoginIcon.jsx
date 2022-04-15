import React from 'react';
import { Link } from 'react-router-dom';
import { TextItem, IconItem } from '../Nav/Nav.styles';
import { ReactComponent as LoginSvg } from '../Nav/login.svg';
export const LoginIcon = ({ user, isAuth }) => {
  return user && isAuth ? (
    <TextItem>
      <img src={`${user.photo}`} alt="profile" />
      <Link to="/me">{user.name.split(' ')[0]}</Link>
    </TextItem>
  ) : (
    <IconItem to="/login" color="white">
      <LoginSvg fill={'white'} />
      <small>log in</small>
    </IconItem>
  );
};
