import {useState} from 'react';
import { BsCart4, BsFillPersonFill, BsXCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {
  Cont,
  Wrapp,
  Left,
  Logo,
  Center,
  TextItem,
  Right,
  IconItem,
  Absol,
  Section,
  CheckoutList,
  Btn
} from './Nav.styles'

const Nav = () => {
  const [toogle, setToogle] = useState(false)
  return <Cont>
    <Wrapp>
      <Left>
        <Logo>
          <Link to='/'>
            PETXys
          </Link>
        </Logo>
      </Left>
      <Center>
        <TextItem>
          <Link to='/shop'>
            Shop
          </Link>
        </TextItem>
      </Center>
      <Right>
        <IconItem color='white'>
          <Link to='/login'>
            <BsFillPersonFill />
          </Link>
        </IconItem>
        <IconItem
          onClick={() => setToogle(!toogle)} 
          color='white'
        >
          <BsCart4 />
        </IconItem>
      </Right>
    </Wrapp>
      <Absol display={toogle}>
        <Section justify='space-between'>
          <TextItem>Your Cart</TextItem>
          <IconItem
            onClick={() => setToogle(!toogle)} 
            color='black'
          >
            <BsXCircleFill />
          </IconItem>
        </Section>
        <CheckoutList>
            <span>adfasdf</span>
            <span>adfasdf</span>
            <span>adfasdf</span>
        </CheckoutList>
        <Section justify='space-between'>
          <TextItem>TOTAL</TextItem>
          <TextItem>Money</TextItem>
        </Section>
        <Section justify='end'>
          <Btn>
            <Link to='/cart'>Checkout</Link>
          </Btn>
        </Section>
      </Absol>
  </Cont>;
};

export default Nav;
