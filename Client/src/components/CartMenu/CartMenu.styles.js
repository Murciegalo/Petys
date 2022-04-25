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
  padding-right: ${({ $padding }) => ($padding ? $padding : '0')};
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

export const Flag = styled.p`
  text-align: center;
  background: linear-gradient(to right, #8cd0e3 0, #f08ccd 100%);
  color: #fff;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.8rem;
`;
