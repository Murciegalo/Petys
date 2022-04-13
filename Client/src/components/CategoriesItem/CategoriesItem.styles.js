import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cont = styled.div``;

export const Option = styled(Link)`
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  border: 1px solid aliceblue;
  border-radius: 8px;
  box-shadow: none;
  cursor: pointer;
  transition: 0.5s easy-in-out;
  &: hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    cursor: pointer;
    border: none;
  }
`;
