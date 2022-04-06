import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
`;
export const Wrapp = styled.div`
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 1px #fff;
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  font-size: 18px;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  color: aliceblue;
`;
export const TextItem = styled.span`
  padding: 2%;
  &: hover {
    color: ${({ color }) => color};
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid aliceblue;
    border-right: 1px solid aliceblue;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  list-style: none;
  padding-left: 0;
  transition: 0.5s easy-in-out;
`;
export const IconItem = styled(Link)`
  position: relative;
  display: flex;
  color: ${({ color }) => color};
  font-size: 25px;
  margin: 0 10px;
  transition: 0.5s easy-in-out;

  &: hover {
    svg {
      cursor: pointer;
      transform: rotate(-20deg);
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
`;
export const CartNum = styled.span`
  margin-left: -1px;
  margin-top: -8px;
  font-size: 12px;
  color: aliceblue;
  transition: 0.5s easy-in-out;
`;
