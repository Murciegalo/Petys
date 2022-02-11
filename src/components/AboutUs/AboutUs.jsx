import React from 'react'
import { 
  Cont, 
  Header, 
  Row,
  Text
} from './AboutUs.styles'

const AboutUs = () => {
  return (
    <Cont>
      <Header>Sobre Nosotros</Header>
      <Row>
        <Text>Petxys surge con la idea de conectar a las personas con las mascotas, proteger 
          a los animales donde sea necesario y apadrinar a los que lo necesiten.
          Nuestro objetivo es convertirnos en ese enlace principal entre seres humanos y animales
          allá donde haga falta.
        </Text>
        <Text>
          Desde proporcionar a la mascota apropiada con la persona o familia 
          en busca de una hasta donar parte de nuestro beneficio para colaborar con la protección de 
          especies en peligro de extinción.
        </Text>
      </Row>
    </Cont>
  )
}

export default AboutUs