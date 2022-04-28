import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const MenuBtns = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Wrap = styled.section`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 68% 30%;
  grid-gap: 1rem;
  margin: 0 auto;
`;

export const GridPics = styled.section`
  position: relative;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Pic = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid #fff;
  :hover {
    cursor: pointer;
  }
`;

export const Section = styled.section`
  border-radius: 5px;
  padding: 1rem;
  color: #fff;
`;

export const Header = styled.h2`
  text-align: center;
`;

export const Text = styled.span`
  display: block;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Title = styled.h3`
  border-bottom: 1px solid #fff;
  padding-bottom: 2rem;
`;
