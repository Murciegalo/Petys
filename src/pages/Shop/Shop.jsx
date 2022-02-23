import React from 'react'
import { 
  Cont, Item, ItemsList, WrapperF, WrapperS 
} from './Shop.styles'

const Shop = () => {
  return (
    <Cont>
      <WrapperF>
        SHOP
      </WrapperF>
      <WrapperS>
        <ItemsList>
          <Item />
        </ItemsList>
      </WrapperS>
    </Cont>
  )
}

export default Shop