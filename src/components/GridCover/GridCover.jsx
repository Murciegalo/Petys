import React from 'react';
import { 
  Cont, 
  Row,
  Header2, 
  Header3, 
  Header4, 
  Img, 
  Left, 
  Link, 
  Right,
  Col1,
  Col2
} from './GridCover.styles';

const GridCover = () => {
  return <Cont>
    <Row>
      <Left>
        <Header2>Pexys Shop</Header2>
        <Header4>Most beautiful pexys for you</Header4>
        <Link>
          <Img src="//cdn.shopify.com/s/files/1/0269/5337/products/35A0332Graded_1024x1024.jpg?v=1615803373" />
          <Header3>Lulu de Pomerania</Header3>
        </Link>
      </Left>
      <Right>
          <Col1>
            <Link>
              <Img src="//cdn.shopify.com/s/files/1/0269/5337/files/jewellery_1024x1024.jpg?v=12945860340118551329" />
              <Header3>Akita</Header3>
            </Link>
            <Link>
              <Img src="//cdn.shopify.com/s/files/1/0269/5337/products/35A9821_1024x1024.jpg?v=1635351128" />
              <Header3>Pastor Belga</Header3>
            </Link>
          </Col1>
          <Col2>
             <Link>
              <Img src="//cdn.shopify.com/s/files/1/0269/5337/products/Sea-Studio-Niall-Meehan-007A-Dalkey-Island_1024x1024.jpg?v=1635866307" />
              <Header3>Cocker</Header3>
            </Link>
             <Link>
              <Img src="//cdn.shopify.com/s/files/1/0269/5337/products/35A3628Graded_1024x1024.jpg?v=1621439986" />
              <Header3>Bulldog</Header3>
            </Link>
          </Col2>
      </Right>
    </Row>
  </Cont>;
};

export default GridCover;
