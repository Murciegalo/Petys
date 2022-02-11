import React from 'react'
import { 
  Cont,
  Header,
  Row,
  Wrapper, 
  Link,
  Img,
  Header3
} from './Stories.styles'

const Stories = () => {
  return (
    <Cont>
      <Header>Historias PETXys</Header>
      <Row>
        <Wrapper>
          <Link>
            <Img src="https://hypescience.com/wp-content/uploads/2013/11/313-600x401.jpg" />
            <Header3>Pickles y el futbol</Header3>
          </Link>
        </Wrapper>
        <Wrapper>
          <Link>
            <Img src="https://hypescience.com/wp-content/uploads/2013/11/120-600x398.jpg" />
            <Header3>El amor incondicional<br/> de Fido</Header3>
          </Link>
        </Wrapper>
        <Wrapper>
          <Link>
            <Img src="https://hypescience.com/wp-content/uploads/2013/11/613.jpg" />
            <Header3>Barry salvando vidas<br/> en la nieve</Header3>
          </Link>
        </Wrapper>
        <Wrapper>  
          <Link>
            <Img src="https://hypescience.com/wp-content/uploads/2013/11/812.jpg" />
            <Header3>Bob y su pasión<br/> por los trenes</Header3>
          </Link>
        </Wrapper>
      </Row>
    </Cont>
  )
}

export default Stories