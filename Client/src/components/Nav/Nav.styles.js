import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cont = styled.div`
  margin: 0 auto;
  width: 90%;
`;
export const Wrapp = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 10px 20px 0px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Top = styled.div`
  display: flex;
  transition: 1s ease-in-out;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: end;
  padding: 0px 20px 5px;
  border-bottom: 1px solid white;
  font-weight: 600;
  span {
    padding: 5px;
    color: white;
    transition: 1s easy-in-out;
    :hover {
      cursor: pointer;
      font-size: 20px;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: aliceblue;
  text-decoration: none;
  padding: 5px;
  &: hover {
    cursor: pointer;
  }
`;

export const TextItem = styled.span`
  display: flex;
  margin: 0 auto;
  font-size: 25px;
  font-weight: lighter;
  &: hover {
    color: ${({ color }) => color};
    font-weight: bold;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const IconItem = styled(Link)`
  position: relative;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  text-decoration: none;
  color: ${({ color }) => color};
  transition: 0.5s easy-in-out;

  &: hover {
    svg {
      cursor: pointer;
      transform: rotate(-10deg);
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  span {
    position: absolute;
    top: -10px;
    right: -8px;
    font-size: 16px;
  }
  svg {
    margin: 0 auto;
  }
  small {
    font-size: 12px;
  }
`;
export const CartNum = styled.span`
  margin-left: -1px;
  margin-top: -8px;
  font-size: 12px;
  color: aliceblue;
  transition: 0.5s easy-in-out;
`;
