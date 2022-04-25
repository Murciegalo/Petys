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
  background: #8cd0e3;
  width: 100%;
  margin: 1rem auto;
  font-size: 1rem;
  color: #fff;
  :hover {
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    border-radius: 5px;
  }
`;

export const cartMenuItemBtn = styled(BaseBtn)`
  background: #8cd0e3;
  background: linear-gradient(to right, #8cd0e3 0, #8ce0e3 100%);
  color: #fff;
  position: absolute;
  bottom: 8%;
  left: 82%;
  padding: 0.3rem 0.5rem;
  :hover {
    border: 2px solid #fff;
    border-radius: 5px;
  }
`;
