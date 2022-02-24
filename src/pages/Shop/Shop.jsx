import React from 'react'
import ShopItem from '../../components/ShopItem/ShopItem'
import { Pomeranian } from '../../data'
import { 
  Cont, 
  ItemsList, 
  WrapperF,
  Link, 
  WrapperS 
} from './Shop.styles'

const Shop = () => {
  return (
    <Cont>
      <WrapperF>
          <Link>Lulu de Pomerania</Link>
          <Link>Shih Tzu</Link>
          <Link>Poodle</Link>
          <Link>Golden Retriever</Link>
          <Link>Yorkshire</Link>
          <Link>Husky Siberiano</Link>
          <Link>Buldogue francês</Link>
      </WrapperF>
      <WrapperS>
          {
            Pomeranian.map(el => <ShopItem key={el.id} el={el} /> )
          }
      </WrapperS>
    </Cont>
  )
}

export default Shop