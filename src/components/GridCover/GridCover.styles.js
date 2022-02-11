import styled from 'styled-components';


export const Cont = styled.div`
  display: block !important;
  padding: 0 20px;
`

export const Row = styled.div`
  width: 100%;
  max-width: 1140px;
  min-width: 727px;
  margin: 0 auto;
  &:before {
    content: "";
    display: table;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

export const Left = styled.div`
  width: 38%;
  padding-top: 5%;
  float: left;
  min-height: 1px;
  position: relative;
`

export const Header2 = styled.h2`
  display: block !important;
  margin: 0;
  padding-bottom: 1.5%;
  font-size: 3.8rem;
  font-weight: thin;
  text-align: center;
  line-height: 5.9rem;
`

export const Header4 = styled.h4`
  display: block !important;
  margin: 0;
  padding-bottom: 5%;
  font-size: 1.8rem;
  font-weight: 100;
  text-align: center;
`

export const Link = styled.a`

`

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`

export const Header3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
`

export const Right = styled.div`
  width: 58%;
  margin-left: 4%;
  float: left;
  min-height: 1px;
  position: relative;
`

export const Col1 = styled.div`
  width: 50%;
  padding-top: 8%;
  float: left;
  min-height: 1px;
  position: relative;
`
export const Col2 = styled.div`
  width: 40%;
  padding-top: 12%;
  float: left;
  min-height: 1px;
  position: relative;
  margin-left: 7%;
`