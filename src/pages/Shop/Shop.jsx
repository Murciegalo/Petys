import React from 'react'
import { 
  Cont, Filter, Item, ItemsList, WrapperF, WrapperS 
} from './Shop.styles'

const Shop = () => {
  return (
    <Cont>
      <WrapperF>
        <Filter>
          Raza: 
        </Filter>
        <Filter>
          Color: 
        </Filter>
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