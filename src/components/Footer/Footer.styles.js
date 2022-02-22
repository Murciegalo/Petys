import styled from 'styled-components'

export const Cont = styled.div`
  width: 100%;
  max-width: 1140px;
  min-width: 727px;
  margin: 0 auto;
  padding-top: 1%;
  padding-bottom: 2%;
  display: flex;
  justify-content: space-between;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.h3`
  font-size: 30px;
  text-align: center;
`

export const Icons = styled.div`
  margin: 0 auto;
  & svg{
    font-size: 25px;
    margin: 15px 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
      color: white;
    }
  }
`

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
`

export const Right = styled.div`
`

export const Subs = styled.form`
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  width: 70%;
  padding: 15px 20px;
  position: relative;
  font-size: 20px;
  font-family: inherit;
  color: black;
  border: 1px solid white;
`

export const Btn = styled.button`
  padding: 15px 20px;
  font-size: 20px;
  font-family: inherit;
  border: 1px solid white;
`

export const TextSubs = styled.p`
  width: 70%;
  margin: 20px auto;
  font-size: 18px;
  text-align: center;
`