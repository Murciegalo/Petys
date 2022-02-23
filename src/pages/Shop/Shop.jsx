import React from 'react'
import ShopItem from '../../components/ShopItem/ShopItem'
import { Pomeranian } from '../../data'
import { 
  Cont, ItemsList, WrapperF, WrapperS 
} from './Shop.styles'

const Shop = () => {
  return (
    <Cont>
      <WrapperF>
        SHOP
      </WrapperF>
      <WrapperS>
        <ItemsList>
          {
            Pomeranian.map(el => <ShopItem key={el.id} el={el} /> )
          }
        </ItemsList>
      </WrapperS>
    </Cont>
  )
}

export default Shop