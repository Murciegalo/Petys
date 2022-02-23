import styled from 'styled-components'

export const Cont = styled.div`
  width: 100%;
`
export const Wrapp = styled.div`
  // width: 80%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 1px #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  font-size: 18px;
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  font-size: 30px;
  font-weight: bold;
  padding: 5px;
  &: hover{
    cursor: pointer;
  }
`

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  font-size: 22px;
  color: aliceblue;
`
export const TextItem = styled.div`
  padding: 2%;
  &: hover{
    color: aliceblue;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid aliceblue;
    border-right: 1px solid aliceblue;
  }
`

export const Right = styled.ul`
  display: flex;
  list-style: none;
  flex: .5;
`
export const IconItem = styled.li`
  display: flex;
  margin-left: 20px;
  color: aliceblue;
  font-size: 20px;

  &: hover{
    svg{
      cursor: pointer;
      transform: scale(1.5);
    }
  }
`
export const CartNum = styled.span`
  margin-left: -1px;
  margin-top: -8px;
  font-size: 12px;
  color: aliceblue;
`