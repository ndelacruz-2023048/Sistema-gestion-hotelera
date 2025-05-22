import React from 'react'
import styled from 'styled-components'
import { ArrivalCard } from '../components/organismos/ArrivalCard'
import { useHotelStore } from '../store/HotelStore'
import { useRoomStore } from "../store/RoomsStore"
import * as Select from '@radix-ui/react-select'
import { useEffect, useState } from 'react'

export const HotelSettingsPage = () => {

  const [selectedHotelId, setSelectedHotelId] = useState(null)
  const [selectedRoomId, setSelectedRoomId] = useState(null)

  const { hotels, fetchHotels } = useHotelStore()
  const { roomsByHotel, fetchRoomsByHotel } = useRoomStore()

  useEffect(() => {
    fetchHotels()
  }, [])

  useEffect(() => {
    if (selectedHotelId) {
      fetchRoomsByHotel(selectedHotelId)
    }
  }, [selectedHotelId])

  const handleHotelChange = (value) => {
    setSelectedHotelId(value)
    setSelectedRoomId(null)
  }

  const handleRoomChange = (value) => {
    setSelectedRoomId(value)
  }

  const selectedHotel = hotels?.hotels?.find(h => h._id === selectedHotelId)

  const selectedRoom = roomsByHotel?.room?.find(r => r._id === selectedRoomId)

  useEffect(() => {
    if (selectedRoom) {
      console.log("Room seleccionado:", selectedRoom)
    }
  }, [selectedRoom])

  return (
    <Container>
      <LeftColumn>
        <div>
          <Select.Root onValueChange={handleHotelChange}>
            <StyledTrigger>
              <Select.Value placeholder="Selecciona un hotel..." />
            </StyledTrigger>
            <Select.Portal>
              <StyledContent>
                <Select.Viewport>
                  {hotels?.hotels?.map(hotel => (
                    <StyledItem key={hotel._id} value={hotel._id}>
                      <Select.ItemText>{hotel.name}</Select.ItemText>
                    </StyledItem>
                  ))}
                </Select.Viewport>
              </StyledContent>
            </Select.Portal>
          </Select.Root>
          {selectedHotelId && (
            <Select.Root onValueChange={handleRoomChange}>
              <StyledTrigger>
                <Select.Value placeholder="Selecciona una habitación..." />
              </StyledTrigger>
              <Select.Portal>
                <StyledContent>
                  <Select.Viewport>
                    {roomsByHotel?.room?.map(room => (
                      <StyledItem key={room._id} value={room._id}>
                        <Select.ItemText>{room.nameOfTheRoom}</Select.ItemText>
                      </StyledItem>
                    ))}
                  </Select.Viewport>
                </StyledContent>
              </Select.Portal>
            </Select.Root>
          )}
        </div>
        
        {selectedHotel && (
          <ArrivalCard title="Hotel" data={selectedHotel} />
        )}
        {selectedRoom && (
          <ArrivalCard title="Room" data={selectedRoom} />
        )}
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
  display: flex;  
  background-color: none;
  border-radius: 12px;
  padding: 1rem;
  height: 20%;
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
  height: 40%;
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


const StyledTrigger = styled(Select.Trigger)`
  all: unset;
  background-color: #f1f1f1;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  color: #333;
  width: 250px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;

  &:hover {
    background-color: #eaeaea;
  }
`;

const StyledContent = styled(Select.Content)`
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22,23,24,0.35), 0px 10px 20px -15px rgba(22,23,24,0.2);
  z-index: 999;
`;

const StyledItem = styled(Select.Item)`
  font-size: 14px;
  line-height: 1;
  color: #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &[data-highlighted] {
    background-color: #e1e1e1;
  }
`;

const StyledIcon = styled(Select.Icon)`
  color: #555;
`;
