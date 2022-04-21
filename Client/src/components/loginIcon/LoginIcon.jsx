import React from 'react';
import { TextItem, IconItem, Image } from '../Nav/Nav.styles';
import { ReactComponent as LoginSvg } from '../Nav/login.svg';
export const LoginIcon = ({ user, isAuth }) => {
  //PICTURE ternary operator to be added
  return user && isAuth ? (
    <TextItem to="/home">
      <Image src={`${user.photo}`} alt="profile" />
      {user.name.split(' ')[0].toUpperCase()}
    </TextItem>
  ) : (
    <IconItem to="/login" color="white">
      <LoginSvg fill={'white'} />
      <small>log in</small>
    </IconItem>
  );
};
