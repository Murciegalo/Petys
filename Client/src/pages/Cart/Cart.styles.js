import styled from 'styled-components';

export const Cont = styled.div`
  padding: 15px;
  text-align: end;
`

export const Header = styled.h2`
  font-size: 35px;
  text-align: center
`

export const ProductFeatures = styled.div`
  list-style: none;
  display: flex;
  font-size: 24px;
  padding: 15px; 
`

export const Product = styled.div`
  flex: 2;
  text-align: center;
`
export const List = styled.li`
  flex: 1;
  text-align: center;
`

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Total = styled.div`
  display: flex;
  justify-content: end; 
`
export const Text = styled.p`
  width: 20%;
  font-size: 2rem;
  text-align: center; 
`
export const Btn = styled.button`
  min-width: 23.72881%;
  margin: 1rem 3rem;
  padding: 0.5rem 1rem;
  background: none;
  font-size: 1.5rem;
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
