import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { TextItem, IconItem } from '../Nav/Nav.styles';

export const LoginIcon = ({ user, isAuth }) => {
  return user && isAuth ? (
    <TextItem>
      <img src={`${user.photo}`} alt="profile" />
      <Link to="/me">{user.name.split(' ')[0]}</Link>
    </TextItem>
  ) : (
    <IconItem to="/login" color="white">
      <BsFillPersonFill />
    </IconItem>
  );
};
