import styled from 'styled-components'

export const Cont = styled.div`
  width: 100%;
`
export const Wrapp = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 2px #fff;
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
  color: #000;
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
  color: #000;
`
export const TextItem = styled.div`
  &: hover{
    color: #000;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
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
  color: #000;
  &: hover{
    svg{
      cursor: pointer;
    }
  }
`
export const CartNum = styled.span`
  margin-left: -1px;
  margin-top: -8px;
  font-size: 12px;
  color: #FFF;
`