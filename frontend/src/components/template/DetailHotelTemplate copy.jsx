import styled from "styled-components"
import { RoomsDetail } from "../organismos/DetailHotel/RoomsDetail"
import { DetailsAndDescriptions } from "../organismos/DetailHotel/DetailsAndDescriptions"
import { AdvanceBooking } from "../organismos/DetailHotel/AdvanceBookingInfo"
import { HotelView } from "../organismos/DetailHotel/HotelView"

export const DetailHotelTemplateCopy = () => {
    return (
        <Container>
            <MainContent>
                <Area1>
                    <Title>Room View & Details</Title>
                    <RoomsNumber>Rooms No: 244</RoomsNumber>
                </Area1>
                <Area2>
                    <HotelView/>
                    <RoomsDetail/>
                </Area2>
                <Area3>
                   <DetailsAndDescriptions/>
                    <AdvanceBooking/>
                </Area3>
            </MainContent>
        </Container>
      )
    }
    
const Container = styled.div`
  height: 100%;
  width: 98%;
`


const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Area1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2%;
`

const Title = styled.h1`
  margin: 0;
  font-size: 25px;
  color:  ${({theme})=>theme.color};
  `

const Area2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:68%;
  `

const RoomsNumber = styled.p`
  margin: 0;
  color:  ${({theme})=>theme.color}; 
  font-weight: 500;
  `

const Area3 = styled.div`
  display: flex;
  justify-content: space-between;
  height: 32%;
`
