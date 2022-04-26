import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cont = styled.div`
  position: relative;
  width: 100%;
  min-height: 135px;
  margin: 0 auto;
  background-color: #8cd0e3;
`;
export const Wrapp = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  transform: translateX(-50%);
`;

export const Top = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem 2rem;
  transition: 1s ease-in-out;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: end;
  padding: 0px 20px 5px;
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

export const TextItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: lighter;
  text-decoration: none;
  color: #f5ea77;
  padding: 5px;
  &: hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const IconItem = styled(Link)`
  position: relative;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  color: #f5ea77;
  text-decoration: none;
  text-align: center;
  transition: 0.5s easy-in-out;

  &: hover {
    color: #fff;
    svg {
      cursor: pointer;
      transform: rotate(-10deg);
      g {
        path {
          fill: #fff;
          color: #f5ea77;
        }
      }
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
    g {
      path {
        fill: #f5ea77;
      }
    }
  }
  small {
    font-size: 14px;
  }
`;
export const CartNum = styled.span`
  background-color: #f5ea77;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 14px;
  color: #000;
`;

export const Image = styled.img`
  padding: 5px;
  src: ${({ src }) => src};
`;
