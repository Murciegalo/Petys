import styled from 'styled-components'

export const Cont = styled.div`
  width: 100%;
`
export const Wrapp = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 4px #fff;
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
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
  padding: 5px;
`

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  color: #FFF;
`
export const TextItem = styled.div`
  &: hover{
    color: white;
    font-weight: bold;
    text-decoration: underline;
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
  color: #FFF;
`
export const CartNum = styled.span`
  margin-left: -1px;
  margin-top: -8px;
  font-size: 12px;
  color: #FFF;
`