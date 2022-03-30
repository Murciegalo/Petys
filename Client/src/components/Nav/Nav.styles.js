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
  justify-content: end;
  color: aliceblue;
`;
export const TextItem = styled.span`
  padding: 2%;
  font-size: 22px;
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

export const Right = styled.ul`
  display: flex;
  list-style: none;
  flex: 1;
`;
export const IconItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: ${({ color }) => color};
  font-size: 25px;

  &: hover {
    svg {
      cursor: pointer;
      transform: scale(1.5);
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  span {
    position: absolute;
    top: -8px;
    right: -14px;
  }
`;
export const CartNum = styled.span`
  display: flex;
  align-items: center;
  margin-left: -1px;
  margin-top: -8px;
  font-size: 12px;
  color: aliceblue;
`;
