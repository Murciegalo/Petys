import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;

`

export const Header = styled.h2`
  padding: 5%;
  text-align: center;
  font-size: 35px;
`

export const Row = styled.div`
  width: 100%;
  max-width: 1140px;
  min-width: 727px;
  margin: 0 auto;
  padding-bottom: 5%;
  display: grid;
  grid-template-columns: repeat( 4 ,1fr);
  column-gap: 2%;
`
export const Wrapper = styled.div`
  width: 100%;
  display: block;
  height: auto;
  cursor: pointer;
`

export const Link = styled.a`
`

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`

export const Header3 = styled.h3`
  text-align: center;
`