import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import {
  Cont,
  Left,
  Header,
  Icons,
  Text,
  Right,
  Subs,
  Input,
  Btn,
  TextSubs,
} from './Footer.styles';

const Footer = () => {
  return (
    <Cont>
      <Left>
        <Header>Follow Petxys Shop</Header>
        <Icons>
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
          <BsWhatsapp />
        </Icons>
        <Text>411 pavao rd, Sao Paulo</Text>
      </Left>
      <Right>
        <Header>Petxys Shop Newsletter</Header>
        <Subs>
          <Input placeholder="Your email address" />
          <Btn>Subscribe</Btn>
        </Subs>
        <TextSubs>
          Subscribe to our newsletter and be first to hear about new petxys stuff, petxys advice,
          events..
        </TextSubs>
      </Right>
    </Cont>
  );
};

export default Footer;
