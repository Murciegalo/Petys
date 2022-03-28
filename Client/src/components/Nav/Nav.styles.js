import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
`;
export const Wrapp = styled.div`
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 1px #fff;
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  font-size: 18px;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  font-size: 30px;
  font-weight: bold;
  padding: 5px;
  &: hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  color: aliceblue;
`;
export const TextItem = styled.span`
  padding: 2%;
  font-size: 22px;
  &: hover {
    color: ${({ color }) => color};
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid aliceblue;
    border-right: 1px solid aliceblue;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Right = styled.ul`
  display: flex;
  list-style: none;
  flex: 0.5;
`;
export const IconItem = styled.li`
  display: flex;
  margin-left: 20px;
  color: ${({ color }) => color};
  font-size: 20px;

  &: hover {
    svg {
      cursor: pointer;
      transform: scale(1.5);
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  span {
    position: absolute;
    top: -8px;
    right: -14px;
  }
`;
export const CartNum = styled.span`
  margin-left: -1px;
  margin-top: -8px;
  font-size: 12px;
  color: aliceblue;
`;

export const Absol = styled.div`
  position: absolute;
  padding: 1.4rem;
  width: calc(18rem + 5%);
  min-width: 20rem;
  right: 1rem;
  background-color: white;
  opacity: 0.9;
  z-index: 100;
  transition: 1s ease-in-out;
  display: ${({ display }) => !display && 'none'};
  transform: ${({ display }) => (display ? 'translateX(0)' : 'translateX(25rem)')};
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;
export const CheckoutList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const Btn = styled.button`
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
