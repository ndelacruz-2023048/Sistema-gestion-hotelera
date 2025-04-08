import styled from "styled-components"
import { RoomsDetail } from "../organismos/DetailHotel/RoomsDetail"
import { DetailsAndDescriptions } from "../organismos/DetailHotel/DetailsAndDescriptions"
import { AdvanceBooking } from "../organismos/DetailHotel/AdvanceBookingInfo"

export const DetailHotelTemplate = () => {
    return (
        <Container>
            <MainContent>
                <Area1>
                  <Title>Room View & Details</Title>
                </Area1>
                <Area2>
                    <RoomsNumber>Rooms No: 244</RoomsNumber>
                </Area2>
                <Area3>
                    <h2>Image</h2>
                    <p>List of amenities available at the hotel.</p>
                </Area3>
                <Area4>
                    <RoomsDetail/>
                </Area4>
                <Area5>
                   <DetailsAndDescriptions/>
                </Area5>
                <Area6>
                    <h2>Advance Booking</h2>
                    <p>Contact details for the hotel.</p>
                    <AdvanceBooking/>
                </Area6>
            </MainContent>
        </Container>
      )
    }
    
const Container = styled.div`
  height: 100%;
  width: 97%;
`


const MainContent = styled.div`
    display:  grid;
    grid-template-areas: 
    "area1 area2"
    "area3 area4"
    "area5 area6";
    grid-template-columns: 70% 30% ;
    row-gap: 15px;
    column-gap: 20px;
`

const Area1 = styled.div`
  grid-area: area1;
  height: 30px;
  `

const Title = styled.h1`
  margin: 0;
  font-size: 25px;
  color:  ${({theme})=>theme.color};
  `

const Area2 = styled.div`
  display: flex;
  justify-content: end;
  grid-area: area2;
  height: 30px;
  `

const RoomsNumber = styled.p`
  margin: 0;
  color:  ${({theme})=>theme.color}; 
  font-weight: 500;
`

const Area3 = styled.div`
  grid-area: area3;
  background-color: #00ff00;
  `

const Area4 = styled.div`
  grid-area: area4;
  background-color: #0000ff;
  `

const Area5 = styled.div`
  grid-area: area5;
  background-color: #00e5ff;
  `

const Area6 = styled.div`
  grid-area: area6;
  background-color: #ff8800;
`
