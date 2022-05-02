import { useSelector } from 'react-redux';
import { grabLoading, grabUser, grabAuth } from '../../redux/user/user.selector';
import { TextItem, IconItem, Image } from '../Nav/Nav.styles';
import { ReactComponent as LoginSvg } from '../Nav/login.svg';

export const LoginIcon = () => {
  const isAuth = useSelector(grabAuth);
  const isLoading = useSelector(grabLoading);
  const user = useSelector(grabUser);
  let src =
    user.photo !== null
      ? require(`../../assets/users/${user.photo}`)
      : require(`../../assets/users/default.jpg`);

  const display =
    user && isAuth && !isLoading ? (
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
