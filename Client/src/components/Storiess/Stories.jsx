import React from 'react'
import { storyItems } from '../../data'
import StoriesItem from '../StoriesItem/StoriesItem'
import { 
  Cont,
  Header,
  Row
} from './Stories.styles'

const Stories = () => {
  return (
    <Cont>
      <Header>Historias PETXys</Header>
      <Row>
        {
          storyItems.map( el => <StoriesItem key={el.id} el={el} /> )
        }
      </Row>
    </Cont>
  )
}

export default Stories