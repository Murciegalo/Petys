import React from 'react';
import { TextItem, IconItem, Image } from '../Nav/Nav.styles';
import { ReactComponent as LoginSvg } from '../Nav/login.svg';
export const LoginIcon = ({ user, isAuth }) => {
  const src = user?.photo
    ? require(`../../assets/users/${user.photo}`)
    : require(`../../assets/users/default.jpg`);

  const display =
    user && isAuth ? (
      <TextItem to="/home">
        <Image src={src} alt="profile" />
        {user?.name.split(' ')[0].toUpperCase()}
      </TextItem>
    ) : (
      <IconItem to="/login" color="white">
        <LoginSvg fill={'white'} />
        <small>log in</small>
      </IconItem>
    );
  return display;
};
