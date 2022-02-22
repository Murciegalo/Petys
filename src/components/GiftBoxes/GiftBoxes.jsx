import React from 'react'
import { giftBoxes } from '../../data'
import GiftBoxesItem from '../GiftBoxesItem/GiftBoxesItem'
import { 
  Cont,
  Row,
  Header
} from './GiftBoxes.styles'

const GiftBoxes = () => {
  return (
    <Cont>
      <Header>Cajas Regalo</Header>
      <Row>
        {
          giftBoxes.map( el => <GiftBoxesItem key={el.id} el={el} />)
        }
      </Row>
    </Cont>
  )
}

export default GiftBoxes