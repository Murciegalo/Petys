import React from 'react'
import { 
  Cont, 
  Product, 
  ContImg, 
  Desc, 
  Img,
  Btn,  
  Price, 
  Quant, 
  Text, 
  Total 
} from './CartItem.styles'

const Cartitem = ({el}) => {
  return <Cont>
    <Product>
      <ContImg>
        <Img src={el.img} />
      </ContImg>
      <Desc>
        <Text>{el.desc}</Text>
        <Btn>Remove</Btn>
      </Desc>
    </Product>
    <Price>{el.price}</Price>
    <Quant>{el.units}</Quant>
    <Total>
      {el.price} 
    </Total>
  </Cont>
}

export default Cartitem