import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cont = styled.div`
  position: relative;
  width: 100%;
  min-height: 160px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-bottom: 2px solid #fff;
`;
export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem 2rem;
  transition: 1s ease-in-out;
`;
export const Bottom = styled.div`
  position: absolute;
  top: 112px;
  right: 10px;
  font-weight: 600;
  a {
    font-size: 17px;
  }
`;

export const Logo = styled(Link)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
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
  font-size: 15px;
  font-weight: lighter;
  text-decoration: none;
  color: #fff;
  transition: 1s easy-in-out;
  padding: 5px 15px;
  &: hover {
    border-right: 1px solid #f5ea77;
    border-bottom: 1px solid #f5ea77;
    color: #f5ea77;
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
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  padding: 5px;
  src: ${({ src }) => src};
`;

export const Flag = styled.p`
  text-align: center;
  background-color: #fff;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.8rem;
`;
