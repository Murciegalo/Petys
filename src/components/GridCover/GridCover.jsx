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
  Row 
} from './GridCover.styles';

const GridCover = () => {
  return <Cont>
    <Row>
      <Left>
        <Header2>Pexys Shop</Header2>
        <Header4>Most beautiful pexys for you</Header4>
        <Link>
          <Img src="*" />
          <Header3></Header3>
        </Link>
      </Left>
      <Right>

      </Right>
    </Row>
  </Cont>;
};

export default GridCover;
