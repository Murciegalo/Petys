import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-width: 0px;
  margin: 0px auto;
`;

export const Wrap = styled.div`
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
  background-color: #fff;
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
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

export const Section = styled.section`
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
`;

export const Title = styled.h2``;
export const Text = styled.span``;
export const Description = styled.p``;
export const Total = styled.h3``;
