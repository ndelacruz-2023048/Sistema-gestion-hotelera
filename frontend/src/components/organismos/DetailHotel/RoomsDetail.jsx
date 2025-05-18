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

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<Icon icon="material-symbols:star" key={i} className="starIcon" />)
            } else if (rating >= i - 0.5) {
                stars.push(<Icon icon="material-symbols:star-half" key={i} className="starIcon" />)
            } else {
                stars.push(<Icon icon="material-symbols:star-outline" key={i} className="starIcon" />)
            }
        }
        return stars
    }

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
                <StarsContainer>
                    {renderStars(4)}
                </StarsContainer>
                <InfoList>
                    <InfoRow>
                        <span>Precio:</span>
                        <span>${data?.room?.price ?? '---'}</span>
                    </InfoRow>
                    <InfoRow>
                        <span>T. Reserva:</span>
                        <span>{data?.room?.reservationTime ?? '---'}</span>
                    </InfoRow>
                    <InfoRow>
                        <span>L. Personas:</span>
                        <span>{data?.room?.maxPeople ?? '---'} Personas</span>
                    </InfoRow>
                </InfoList>
                <ScrollHorizontal/>
                <Section>
                    <DescriptionContainer>
                        <DescriptionTitle>Descripción del Cuarto</DescriptionTitle>
                        <DescriptionText>
                        Esta habitación está diseñada para brindar la mejor comodidad durante tu estadía. Cuenta con áreas amplias, mobiliario moderno, y todas las comodidades que podrías necesitar para una experiencia inolvidable.
                        </DescriptionText>
                    </DescriptionContainer>
                </Section>
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
    color: ${({theme})=>theme.color};
    overflow-y: auto;
    overflow-x: hidden;
    
    h3{
        margin: 2%;
    }
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

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  .starIcon {
    font-size: 24px;
    color: ${({theme})=>theme.hover};
    margin-right: 2px;
  }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
  padding: 0 10px;
`

const InfoRow = styled.div`
  margin-left: 1.5%;
  display: flex;
  color: ${({theme}) => theme.color};
  font-size: 16px;
  font-weight: 500;

  span:first-child {
    opacity: 0.7;
  }
`

const DescriptionContainer = styled.div`
  padding: 10px 15px;
  margin-top: 20px;
`

const DescriptionTitle = styled.h4`
  color: ${({ theme }) => theme.color};
  margin-bottom: 8px;
  font-size: 18px;
`

const DescriptionText = styled.p`
  color: ${({ theme }) => theme.color};
  opacity: 0.7;
  font-size: 15px;
  line-height: 1.4;
  margin: 0;
`
