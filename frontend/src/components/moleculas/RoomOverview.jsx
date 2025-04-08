import styled from "styled-components"
import { Title } from "../atomos/Title"
import { Label } from "../atomos/Label"
import {Text} from "../atomos/Text"

export const RoomOverview = () => {
  return (
    <Container>
      <Title>Room Overview</Title>
      <Row><Label>Nombre de la habitacicón:</Label> <Text>Deluxe King Room</Text></Row>
      <Row><Label>Tipo:</Label> <Text>Suite con vista al mar</Text></Row>
      <Row><Label>Capacidad:</Label> <Text>2 adultos, 1 niño</Text></Row>
      <Row><Label>Tamaño:</Label> <Text>121.92 m. cuadrados</Text></Row>
      <Description>
        <Label>Descripciones y otros:</Label>
        <Text>
        Relájese en nuestra espaciosa habitación Deluxe King, que cuenta con una lujosa cama tamaño king con sábanas de primera calidad, 
        una acogedora sala de estar y una decoración moderna que combina comodidad y elegancia.
        </Text>
      </Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 10px;
`

const Row = styled.div`
  display: flex;
  gap: 3%;
`

const Description = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
