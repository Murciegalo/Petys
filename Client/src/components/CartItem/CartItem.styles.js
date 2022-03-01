import styled from 'styled-components';

export const Cont = styled.div`
 display: flex;
 padding-top: 20px;
 font-size: 1.2rem;
`

export const Product = styled.div`
 flex: 2;
 display: flex;
 justify-content: space-around;
`
export const ContImg = styled.div`
  width: 30%;
`

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`

export const Desc = styled.div`
  width: 40%;
  text-align: center;
  padding-top: 1rem;
`

export const Text = styled.p`
  margin: 0;
`

export const Btn = styled.button`
  min-width: 23.72881%;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background: none;
  font-size: 1.2rem;
  font-family: inherit;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  
  :hover{
    cursor: pointer;
    background-color: white;
    border: 2px solid #fff;
  }
`

export const Price = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 1rem;
`

export const Quant = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 1rem;
`

export const Total = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 1rem;
`