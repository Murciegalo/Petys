import React from 'react';
import { 
  Cont, 
  Header2, 
  Header3, 
  Header4, 
  Img, 
  Left, 
  Link, 
  Right, 
  Row,
  Col,
  
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
        <Row>
          <Col>
            <Link>
              <Img src="*" />
              <Header3>Akita</Header3>
            </Link>
          </Col>
          <Col>
            <Link>
              <Img src="*" />
              <Header3>Akita</Header3>
            </Link>
          </Col>
        </Row>

      </Right>
    </Row>
  </Cont>;
};

export default GridCover;
