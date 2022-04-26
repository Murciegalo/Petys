import styled from 'styled-components';

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;

export const Product = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
`;
export const ContImg = styled.div`
  width: 30%;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export const ImgSeller = styled.img`
  width: 50%;
  height: auto;
`;
export const Desc = styled.div`
  width: 40%;
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size; 1rem;
`;

export const Btn = styled.button`
  width: 2rem;
  transition: 0.2s ease-in-out
  :hover {
    cursor: pointer;
    background-color: white;
    border: 2px solid #fff;
  }
`;

export const Price = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 1rem;
`;

export const Quant = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 1rem;
`;

export const Total = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 1rem;
`;
