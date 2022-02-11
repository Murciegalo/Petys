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
} from './FloatCover.styles';

const GridCover = () => {
  // Refactoring into 1 comp. Link/Img/Header3
  return <Cont>
    <Row>
      <Left>
        <Header2>Pexys Shop</Header2>
        <Header4>Most beautiful pexys for you</Header4>
        <Link>
          <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fgjpahvHV2xdUHf65s2-GwHaLH%26pid%3DApi&f=1" />
          <Header3>Lulu de Pomerania</Header3>
        </Link>
      </Left>
      <Right>
          <Col1>
            <Link>
              <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GeAA0FO3BwC_e47_zDJbsgHaEo%26pid%3DApi&f=1" />
              <Header3>Akita</Header3>
            </Link>
            <Link>
              <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.U34fzTCuTbxQQEmlkTPjxgHaFj%26pid%3DApi&f=1" />
              <Header3>Pastor Belga</Header3>
            </Link>
            <Link>
              <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cyRApAS-vvcP4zKyrt6XYgHaEo%26pid%3DApi&f=1" />
              <Header3>Pastor Belga</Header3>
            </Link>
          </Col1>
          <Col2>
             <Link>
              <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb0%2F09%2F91%2Fb00991bfdfb9b4a055c0721bcd18b938.jpg&f=1&nofb=1" />
              <Header3>Cocker</Header3>
            </Link>
             <Link>
              <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.huskypuppiesinfo.com%2Fwp-content%2Fuploads%2F2018%2F03%2FChoosing-a-Husky-Puppy.jpg%3Fx59932&f=1&nofb=1" />
              <Header3>Bulldog</Header3>
            </Link>
          </Col2>
      </Right>
    </Row>
  </Cont>;
};

export default GridCover;
