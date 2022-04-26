import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
  color: #fff;
`;

export const Header = styled.h2`
  padding: 5%;
  text-align: center;
  font-size: 35px;
`;

export const Row = styled.div`
  width: 100%;
  max-width: 1140px;
  min-width: 727px;
  margin: 0 auto;
  // padding-bottom: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2%;
`;
