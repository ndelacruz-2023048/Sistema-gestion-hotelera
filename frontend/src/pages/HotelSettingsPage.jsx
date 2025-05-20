import React from 'react'
import styled from 'styled-components'
import { ArrivalCard } from '../components/organismos/ArrivalCard'

export const HotelSettingsPage = () => {
  return (
    <Container>
      <LeftColumn>
        <SectionTitle>Arrivals</SectionTitle>
         <ArrivalCard
          name="Hotel"
          time="14:30"
          nights="7"
          room="217"
          roomType="Single"
          board="Breakfast"
          status="Booking paid"
          action="Check in"
        />
        <ArrivalCard
          name="Room"
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
        <RightBottom>
          <FreeRooms>
            <h3>Free rooms</h3>
            <RoomList>
              <RoomBox><p>4 Single</p></RoomBox>
              <RoomBox><p>7 Double</p></RoomBox>
              <RoomBox><p>7 Family Suite</p></RoomBox>
              <RoomBox><p>3 President Suite</p></RoomBox>
            </RoomList>
          </FreeRooms>
          <Sidebar>
            <ActionButton>Lock POS</ActionButton>
            <ActionButton>Support</ActionButton>
          </Sidebar>
        </RightBottom>
        
        
      </RightColumn>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
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
  height: 87vh;
`

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

const ActionButton = styled.button`
  background-color:${({ theme }) => theme.infoText};
  color: ${({ theme }) => theme.colorBackground};
  border: solid 0.5px ${({ theme }) => theme.infoText};
  padding: 50px;
  border-radius: 8px;
  cursor: pointer;

  &:hover{
    background-color: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.infoText};
    border: solid 0.5px ${({ theme }) => theme.infoText};
    transition: 0.5s;
  }
`

const TimelineBox = styled.div`
  background-color: none;
  border-radius: 12px;
  padding: 1rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  align-items: center;
`

const RightBottom = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
`

const FreeRooms = styled.div`
  background-color: ${({ theme }) => theme.colorBackground};
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  width: 50%;
  height: 100%;
`

const RoomList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`

const RoomBox = styled.div`
  display: flex;
  background: ${({ theme }) => theme.square};
  color: ${({ theme }) => theme.color};
  font-weight: bold;
  font-size: 20px;
  padding: 0.6rem;
  height: 10vh;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`