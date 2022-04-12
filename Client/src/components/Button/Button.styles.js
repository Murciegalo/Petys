import styled from 'styled-components';

export const BaseBtn = styled.button`
  padding: 0.5rem 1rem;
  background: none;
  font-family: inherit;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  :hover {
    cursor: pointer;
  }
`;

// NAV BTN
export const NavBtn = styled(BaseBtn)`
  margin: 1rem;
  font-size: 1rem;
  border: 2px solid #fff;
  font-size: 24px;
  color: white;
  :hover {
    background-color: black;
  }
`;

// CHECKOUT BTN
export const CheckoutBtn = styled(BaseBtn)`
  min-width: 23.72881%;
  margin: 1rem 3rem;
  font-size: 1.5rem;
  border: 2px solid #fff;
  :hover {
    background-color: white;
  }
`;

// LOGIN/SIGNUP BTN
export const LSBtn = styled(BaseBtn)`
  min-width: 23.72881%;
  margin: 1rem auto;
  font-size: 1.5rem;
  color: black;
  border: 2px solid #fff;
  :hover {
    background-color: white;
  }
`;

export const CartBtn = styled(BaseBtn)`
  margin: 1rem;
  font-size: 1rem;
  border: 2px solid #000;
  color: black;
  :hover {
    background-color: black;
    color: white;
  }
`;
