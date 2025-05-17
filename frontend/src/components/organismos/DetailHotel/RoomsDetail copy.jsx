import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import { BtnDetail } from "../../moleculas/BtnDetail"

export const RoomsDetail = () => {
    return(
        <Container>
            <SectionGlobal>
                <Section>
                    <Section1>
                        <Title>Room Details</Title>
                        <Icon icon="material-symbols:info-outline-rounded" className="infoIcon"/>
                        
                    </Section1>
                    <Line></Line>
                    <ContainerButtonDetail>
                        <BtnDetail iconLeft="material-symbols-light:meeting-room" title="Habitación" text="1 Dormitorio y una Sala de estar"/>
                        <BtnDetail iconLeft="famicons:bed" title="Muebles" text="Cama, sofa, mesa, etc."/>
                        <BtnDetail iconLeft="mdi:tv" title="Tecnologia" text="TV, Refrigerador, Cafetera, AC"/>
                        <BtnDetail iconLeft="solar:bath-bold" title="Baño" text="Retrete, Ducha"/>
                        <BtnDetail iconLeft="material-symbols:wifi" title="Wifi" text="Gratis"/>
                        <BtnDetail iconLeft="mdi:food" title="Comida" text="Servicio al Dormitorio"/>
                    </ContainerButtonDetail>
                </Section>
            </SectionGlobal>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 87%;
    background: ${({theme})=>theme.bgdgradient};
    width: 40%;
    border-radius: 20px;
`

const Title = styled.h2`
    margin: 0;
    color: ${({theme})=>theme.color};
`

const SectionGlobal = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 100%;
    height: 90%;
`

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 90%;

`

const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    .infoIcon{
        column-gap: 16px;
        font-size: 35px;
    }
`

const ContainerButtonDetail = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

const Line = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${({theme})=>theme.bgd};
    justify-content: center;
`


