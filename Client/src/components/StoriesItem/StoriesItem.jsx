import React from 'react'
import {
  Wrapper,
  Link,
  Img,
  Header3
} from './StoriesItem.styles'

const StoriesItem = ({el}) => {
  return <Wrapper>
    <Link>
      <Img src={el.img} />
      <Header3>{el.title}</Header3>
    </Link>
</Wrapper>
}

export default StoriesItem