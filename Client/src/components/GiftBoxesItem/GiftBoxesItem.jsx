import React from 'react'
import {
  Wrapper,
  Link,
  Img
} from './GiftBoxesItem.styles'

const GiftBoxesItem = ({el}) => {
  return <Wrapper>
    <Link>
      <Img src={el.img} />
    </Link>
  </Wrapper>
}

export default GiftBoxesItem