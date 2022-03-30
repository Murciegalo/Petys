import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cont = styled(Link)`
  width: 100%;
  display: block;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  border: 4px solid white;
  border-radius: 5px;
  cursor: pointer;
`;
