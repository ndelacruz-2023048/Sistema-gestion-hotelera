import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import { BtnDetail } from "../../moleculas/BtnDetail"
import { HotelView } from "./HotelView"
import { useRef, useState } from 'react'
import { ScrollHorizontal } from "../../moleculas/ScrollHorizontal"

export const RoomsDetail = ({data}) => {
    console.log(data);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };
    return(
        <Container>
            <HotelView dataHotelView={data?.room?.views}/>
            <div>
                <h3>{data?.room?.nameOfTheRoom}</h3>
                <ScrollHorizontal/>
                {/* <Section>
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
                </Section> */}
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: ${({theme})=>theme.bgdgradient};
    width: 100%;
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
    height: 30%;
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


