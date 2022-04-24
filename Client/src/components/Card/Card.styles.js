import styled from 'styled-components';

export const Cont = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-width: 220px;
  display: flex;
  align-items: center;
  color: #ffffff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;
export const ContImg = styled.div`
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  a {
    text-decoration: none;
  }
  :hover img {
    opacity: 0.5;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
  :hover h2 {
    display: inline-block;
    top: 70%;
    left: 35%;
    transform: skew(-10deg) rotate(-10deg) translate(150%, -50%);
    -webkit-transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
  }
`;

export const Img = styled.img`
  max-width: 100%;
  position: relative;
  opacity: 0.8;
  border: 1px solid #000;
  border-radius: 25px;
`;

export const Caption = styled.figcaption`
  position: absolute;
  height: 50px;
  top: 75%;
  left: 50%;
  bottom: 0;
  right: 0;
  transform: translateX(-50%);
`;

export const Title = styled.h2`
  display: none;
  background: #000000;
  width: 100px;
  margin: 0;
  padding: 5px;
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

export const Text = styled.span`
  font-weight: 800;
`;
