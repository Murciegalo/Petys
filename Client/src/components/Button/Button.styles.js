import styled from 'styled-components';

export const BaseBtn = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  background: none;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid #000;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
`;

// NAV BTN
export const BtnNav = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  background: none;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid #000;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    cursor: pointer;
    background-color: black;
    border: 2px solid #fff;
    a {
      color: white;
    }
  }
`;

// CHECKOUT BTN
export const BtnCart = styled.button`
  min-width: 23.72881%;
  margin: 1rem 3rem;
  padding: 0.5rem 1rem;
  background: none;
  font-size: 1.5rem;
  font-family: inherit;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: white;
    border: 2px solid #fff;
  }
`;

// LOGIN/SIGNUP BTN
export const BtnLS = styled.button`
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
export const BtnII = styled.button`
  min-width: 23.72881%;
  margin: 1rem auto;
  background: none;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 1px;
  transition: 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: white;
  }
`;
