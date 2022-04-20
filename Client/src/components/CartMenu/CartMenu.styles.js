import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Absol = styled.div`
  position: absolute;
  top: 5rem;
  right: -3rem;
  padding: 1.4rem;
  width: calc(18rem + 5%);
  min-width: 20rem;
  background-color: white;
  border-radius: 20px;
  opacity: 0.8;
  z-index: 100;
  display: ${({ $display }) => !$display && 'none'};
  transform: ${({ $display }) => ($display ? 'translateX(0)' : 'translateX(25rem)')};
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justify};
`;
export const TextItem = styled.span`
  padding: 2%;
  font-size: 30px;
  font-weight: 300;
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

export const IconItem = styled.li`
  display: flex;
  margin-left: 20px;
  color: ${({ color }) => color};
  font-size: 20px;

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

export const CheckoutList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const Btn = styled(Link)`
  margin: 1rem;
  padding: 0.5rem;
  background: none;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid #000;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  :hover {
    cursor: pointer;
    background-color: black;
    border: 2px solid #fff;
    color: white;
  }
`;
