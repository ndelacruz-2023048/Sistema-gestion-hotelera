import React from 'react'
import styled from 'styled-components'

export const ArrivalCard = ({ name, time, nights, room, roomType, board, status, action }) => {
    return(
        <Card>
            <TopRow>
                <Time>{time}</Time>
                <ActionButton>{action}</ActionButton>
            </TopRow>
            <Name>{name}</Name>
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
  background-color:${({ theme }) => theme.infoText};
  border: none;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
`