import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
  max-width: 1140px;
  min-width: 727px;
  margin: 0 auto;
`;

export const Header = styled.h1`
  text-align: center;
  padding-top: 2%;
  font-size: 38px;
`;

export const Wrapper = styled.div`
  width: 35%;
  margin: 0 auto;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 23.72881%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: none;
  font-size: 1.5rem;
  font-family: inherit;
  outline: none;
  border: none;
  border-bottom: solid 2px #fff;
  transition: 0.2s ease-in-out;

  :focus {
    color: white;
    border-bottom: 4px solid #fff;
    font-weight: 900;
  }
`;

export const Btn = styled.button`
  min-width: 23.72881%;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background: none;
  font-size: 1.5rem;
  font-family: inherit;
  border: 2px solid #fff;
  transition: 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

export const Text = styled(Link)`
  width: auto;
  margin: 0 auto;
  color: black;
  font-size: 14px;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    cursor: pointer;
    color: white;
  }
`;
