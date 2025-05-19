import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import { BtnDetail } from "../../moleculas/BtnDetail"
import { HotelView } from "./HotelView"
import { useRef, useState } from 'react'
import { ScrollHorizontal } from "../../moleculas/ScrollHorizontal"

export const RoomsDetail = ({data}) => {
    console.log(data);
    
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

    return(
        <Container>
            <HotelView dataHotelView={data?.room?.views}/>
            <div>
            <HeaderRow>
                <h2>{data?.room?.nameOfTheRoom}</h2>
                <BookButton>Book Now</BookButton>
            </HeaderRow>
                <StarsContainer>
                    {renderStars(4.5)}
                    <ScoreText>4.5 (200 opiniones)</ScoreText>
                </StarsContainer>
                <InfoList>
                    <InfoRow>
                        <span>
                            <Icon icon="basil:sand-watch-solid" />
                            <p>Available</p>
                        </span>
                        <span>{data?.room?.views[0].available ===true ? "Disponible":"No Disponible"}</span>
                    </InfoRow>
                    <InfoRow>
                        <span>
                            <Icon icon="gravity-ui:persons" />
                            <p>Quote</p>
                        </span>
                        <span>{data?.room?.maxPeople ?? '---'} Participants</span>
                    </InfoRow>
                    <InfoRow>
                        <span>
                            <Icon icon="ri:money-dollar-box-line" />
                            <p>Price</p>
                        </span>
                        <span>${data?.room?.views[0].pricePerNight?.$numberDecimal}</span>
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

/* ${({theme})=>theme.toggleIcon} */

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
`

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 30%;
    width: 90%;

`

const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% 2% 0 2%;

    h2{
        margin: 2%;
    }
`

const BookButton = styled.button`
    background-color: ${({ theme }) => theme.infoText};
    color: ${({ theme }) => theme.colorBackground};
    border: none;
    padding: 1rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.infoText};
        border: 1px solid ${({ theme }) => theme.infoText};
    }
`

const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 15px;

    .starIcon {
        font-size: 24px;
        color: ${({theme})=>theme.infoText};
        margin-right: 2px;
    }
`

const ScoreText = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.color};
    margin-left: 8px;
    opacity: 0.5;
`

const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin: 10px;
    padding: 0 10px;
`

const InfoRow = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 0px;
    color: ${({ theme }) => theme.color};
    font-size: 16px;
    font-weight: 500;
    padding: 4px 0;

    span:first-child {
        opacity: 0.5;
        display: flex;
        flex-direction: row;
        
    }

    span:first-child p{
        margin: 0;
        margin-left: 3%;
    }
`

const DescriptionContainer = styled.div`
    padding: 0px 15px;
`

const DescriptionTitle = styled.h4`
    color: ${({ theme }) => theme.color};
    margin-bottom: 8px;
    font-size: 18px;
    opacity: 0.5;
`

const DescriptionText = styled.p`
    color: ${({ theme }) => theme.color};
    font-size: 15px;
    line-height: 1.4;
    margin: 0;
`
