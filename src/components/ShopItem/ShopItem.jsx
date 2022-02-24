import React from 'react'
import { 
  Cont,
  Link,
  Img 
} from './ShopItem.styles'

const ShopItem = ({el}) => {
  return <Cont>
    <Link>
      <Img src={el.img} />
    </Link>
  </Cont>
}

export default ShopItem