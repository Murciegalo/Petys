import React from 'react'
import { 
  Cont,
  Row,
  Header,
  Wrapper,
  Link,
  Img
} from './GiftBoxes.styles'

const GiftBoxes = () => {
  return (
    <Cont>
      <Header>Cajas Regalo</Header>
      <Row>
        <Wrapper>
          <Link>
            <Img src="//cdn.shopify.com/s/files/1/0269/5337/files/35A9993_1400x1400_cf7d9c87-96fd-4590-8ca6-1c47310ff1af.jpg?v=7452891553331541595" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link>
            <Img src="//cdn.shopify.com/s/files/1/0269/5337/files/35A9918_1400x1400_161c974a-a69c-4621-874c-7dd9fc5d01d8.jpg?v=1536202819986992789" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link>
            <Img src="//cdn.shopify.com/s/files/1/0269/5337/files/35A9957_1400x1400_88340a46-e7b8-4a9e-a147-60a966e3bc57.jpg?v=4459268868613485212" />
          </Link>
        </Wrapper>
      </Row>
    </Cont>
  )
}

export default GiftBoxes