import styled from "styled-components"
import { RoomsDetail } from "../organismos/DetailHotel/RoomsDetail"

export const DetailHotelTemplate = () => {
    return (
        <Container>
          <Section>
            <Image>Image</Image>
            <RDeatil><RoomsDetail/></RDeatil>
          </Section>
          <Section>
            <LeftBox>Izquierda abajo</LeftBox>
            <RightBox>Derecha abajo</RightBox>
          </Section>
        </Container>
      )
    }
    
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    `
    
    const Section = styled.div`
        display: flex;
        justify-content: space-between;
        gap: 20px;
    `
    
    const Image = styled.div`
        flex: 2;
        height: 300px;
        background-color:${({theme})=>theme.bgSidebar};
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    `
    const RDeatil = styled.div`
        flex: 1;
        height: 300px;
        background-color:${({theme})=>theme.bgSidebar};
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    `

    const LeftBox = styled.div`
        flex: 2;
        height: 150px;
        background-color: ${({theme})=>theme.bgSidebar};
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    `
    
    const RightBox = styled.div`
        flex: 1;
        height: 150px;
        background-color: ${({theme})=>theme.bgSidebar};
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    `