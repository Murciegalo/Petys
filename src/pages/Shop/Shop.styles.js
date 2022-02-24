import styled from 'styled-components'

export const Cont = styled.div`
  
`

export const WrapperF = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 4%;
  padding-bottom: 1%;
  border-bottom: 1px solid aliceblue;
  color: aliceblue;
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 23px;
  padding: .5%;
  cursor: pointer;
  &: hover{
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid aliceblue;
    border-right: 1px solid aliceblue;
  }
`

export const WrapperS = styled.div`
  display: grid;
  grid-template-columns: repeat( 4 ,1fr);
  column-gap: 2%;
  padding: 2%;
`

export const ItemsList = styled.div`

`

export const Item = styled.div`

`