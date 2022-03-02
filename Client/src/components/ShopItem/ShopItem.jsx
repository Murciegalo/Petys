import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Cont,
  Img 
} from './ShopItem.styles'

const ShopItem = ({el}) => {
  return <Cont>
    <Link to={`${el.id}`}>
      <Img src={el.img} />
    </Link>
  </Cont>
}

export default ShopItem