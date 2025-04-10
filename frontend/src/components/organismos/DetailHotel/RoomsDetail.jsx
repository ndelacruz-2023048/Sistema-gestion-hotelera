import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import { BtnDetail } from "../../moleculas/BtnDetail"

export const RoomsDetail = () => {
    return(
        <Container>
            <Section1>
                <h1>Room Details</h1>
                <Icon icon="material-symbols:info-outline-rounded" className="infoIcon"/>
                
            </Section1>
            <Line></Line>
            <BtnDetail iconLeft="material-symbols-light:meeting-room" title="Habitación" text="1 Dormitorio y una Sala de estar"/>
            <BtnDetail iconLeft="famicons:bed" title="Muebles" text="Cama, sofa, mesa, etc."/>
            <BtnDetail iconLeft="mdi:tv" title="Tecnologia" text="TV, Refrigerador, Cafetera, AC"/>
            <BtnDetail iconLeft="solar:bath-bold" title="Baño" text="Retrete, Ducha"/>
            <BtnDetail iconLeft="material-symbols:wifi" title="Wifi" text="Gratis"/>
            <BtnDetail iconLeft="mdi:food" title="Comida" text="Servicio al Dormitorio"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Section1 = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 15px;
    .infoIcon{
        column-gap: 16px;
        font-size: 35px;
        margin-left: auto;
        margin-
    }
`

const Line = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${({theme})=>theme.bgd};
    justify-content: center;
`


