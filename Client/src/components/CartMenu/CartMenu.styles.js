import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Absol = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  padding: 1.4rem;
  width: calc(20rem + 5%);
  min-width: 20rem;
  background-color: white;
  border-radius: 20px;
  z-index: 100;
  display: ${({ $display }) => !$display && 'none'};
  transform: ${({ $display }) => ($display ? 'translateX(0)' : 'translateX(25rem)')};
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ $column }) => ($column ? $column : 'row')};
  align-items: center;
  justify-content: ${(props) => props.$justify};
  padding: 10px 0;
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #8cd0e3;
    background: linear-gradient(to right, #8cd0e3 0, #f08ccd 100%);
  }
`;
export const TextItem = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ size }) => size};
  font-weight: 300;
  text-transform: uppercase;
  &: hover {
    color: ${({ color }) => color};
    cursor: pointer;
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
