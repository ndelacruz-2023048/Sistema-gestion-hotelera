import React from 'react'
import styled from 'styled-components'
import { Icon } from "@iconify/react/dist/iconify.js"

export const ArrivalCard = ({ name, time, nights, room, roomType, board, status, action }) => {
    return(
        <Card>
            <TopRow>
              <Time>{time}</Time>
              <RightActions>
                <ActionButton>{action}</ActionButton>
                <Icon icon="mdi:edit-outline" className='Icon'/>
              </RightActions>
            </TopRow>
            <Name>{name}</Name>
            <Bar />
            <Details>
                <Label>Room</Label><Label>Nights</Label><Label>Room Type</Label>
                <Value>{room}</Value><Value>{nights}</Value><Value>{roomType}</Value>
        
                <Label>Board</Label><Label>Status</Label><Label>Time</Label>
                <Value>{board}</Value><Value>{status}</Value><Value>{time}</Value>
            </Details>
            <Status>{status}</Status>
        </Card>
    )
    
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.colorBackground};
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RightActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .Icon{
    font-size: 23px;
    color: #888;
    padding: 4px;
    cursor: pointer;
    border: solid 0.3px rgb(190, 190, 190);
    border-radius: 5px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(0.85);
    }
  }
`

const Time = styled.span`
  font-weight: bold;
  color: #333;
  color: ${({ theme }) => theme.color};
`

const Name = styled.h3`
  margin: 0.5rem 0 0.2rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color};
`

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  margin: 0.3%;
  background-color: #888;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px 12px;
  margin-top: 8px;
  text-align: left;
`

const Label = styled.div`
  font-size: 15px;
  color: #888;
`

const Value = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.color};
`

const Status = styled.span`
  font-size: 0.85rem;
  color: green;
  margin-top: 0.5rem;
`

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colorBackground};
  color: ${({ theme }) => theme.infoText};
  border: solid 0.5px ${({ theme }) => theme.infoText};
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover{
    background-color:${({ theme }) => theme.infoText};
    color: ${({ theme }) => theme.colorBackground};
    transition: 0.5s;
  }
`