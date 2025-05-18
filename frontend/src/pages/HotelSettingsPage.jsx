import React from 'react'
import styled from 'styled-components'

export const HotelSettingsPage = () => {
  return (
    <Container>
      <LeftColumn>
        <SectionTitle>Arrivals</SectionTitle>
        <ArrivalCard
          name="Volodymyr Zelenskyy"
          time="14:30"
          nights="7"
          room="217"
          roomType="Single"
          board="Breakfast"
          status="Booking paid"
          action="Check in"
        />
        <ArrivalCard
          name="Boris Johnson"
          time="16:30"
          nights="2"
          room="101"
          roomType="Family Suite"
          board="Lunch"
          status="Booking paid"
          action="Proceed"
        />
        <ArrivalCard
          name="Oleksiy Reznikov"
          time="16:45"
          nights="4"
          room="224"
          roomType="Family Suite"
          board="Expedia"
          status="Payment in installments"
          action="Calculate"
        />
      </LeftColumn>

      <RightColumn>
        <SectionTitle>Today</SectionTitle>
        <TimelineBox>

        </TimelineBox>

        <FreeRooms>
          <h3>Free rooms</h3>
          <RoomList>
            <RoomBox>4 Single</RoomBox>
            <RoomBox>7 Double</RoomBox>
            <RoomBox>7 Family Suite</RoomBox>
            <RoomBox>3 President Suite</RoomBox>
          </RoomList>
        </FreeRooms>
        <Sidebar>
          <ActionButton>Lock POS</ActionButton>
          <ActionButton>Support</ActionButton>
        </Sidebar>
        
      </RightColumn>
    </Container>
  )
}

const ArrivalCard = ({ name, time, nights, room, roomType, board, status, action }) => (
  <Card>
    <TopRow>
      <Time>{time}</Time>
      <ActionButton>{action}</ActionButton>
    </TopRow>
    <Name>{name}</Name>
    <Details>
      Room {room} • {nights} nights • {roomType} • {board}
    </Details>
    <Status>{status}</Status>
  </Card>
)


const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  max-height: 70vh;
`

const LeftColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const RightColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Time = styled.span`
  font-weight: bold;
  color: #333;
`

const Name = styled.h3`
  margin: 0.5rem 0 0.2rem;
  font-size: 1.1rem;
`

const Details = styled.p`
  font-size: 0.9rem;
  color: #555;
`

const Status = styled.span`
  font-size: 0.85rem;
  color: green;
  margin-top: 0.5rem;
`

const ActionButton = styled.button`
  background-color: #007aff;
  border: none;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
`

const TimelineBox = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 1rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TimelineBar = styled.div`
  background-color: ${props => props.secondary ? '#fcd34d' : '#3b82f6'};
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
`

const Sidebar = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`

const FreeRooms = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  width: 50%;
`

const RoomList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`

const RoomBox = styled.div`
  background: #f0f0f0;
  padding: 0.6rem;
  border-radius: 8px;
  text-align: center;
`