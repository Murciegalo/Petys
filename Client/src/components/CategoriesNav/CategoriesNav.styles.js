import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cont = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4px;
  padding: 2px;
  background: linear-gradient(to right, #8ed4e8 0, #8f7be8 100%);
  background-color: rgba(0, 0, 0, 0);
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-attachment: scroll;
  background-image: linear-gradient(
    to right,
    rgb(142, 212, 232) 0px,
    rgb(142, 230, 235) 50%,
    rgb(143, 123, 232) 100%
  );
  background-size: auto;
  background-origin: padding-box;
  background-clip: border-box;
`;

export const Option = styled(Link)`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-decoration: none;
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
    color: #f5ea77;
  }
`;
