import React from 'react'
import styled from 'styled-components'
import { Icon } from "@iconify/react"

export const ArrivalCard = ({ title, data }) => {
  return (
    <Card>
      <TopRow>
        <RightActions>
          <ActionButton>Upgrade</ActionButton>
          <Icon icon="mdi:edit-outline" className='Icon' />
        </RightActions>
      </TopRow>

      <Title>{title}</Title>
      <Bar />

      <Details>
  {Object.entries(data)
    .filter(([key]) => key !== '_id' && key !== '__v')
    .map(([key, value]) => (
      <FieldWrapper key={key}>
        <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
        <Input
          type="text"
          value={
            typeof value === 'object'
              ? value?.toString()
              : value
          }
          readOnly
        />
      </FieldWrapper>
    ))}
</Details>

      <Status>Hotel seleccionado</Status>
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
  justify-content: flex-end;
`

const RightActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .Icon {
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

const Title = styled.h3`
  margin: 0.5rem 0 0.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
`

const Bar = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.3rem 0;
  background-color: #888;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 8px;
`

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.label`
  font-size: 14px;
  color: #888;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
  background-color: transparent;
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

  &:hover {
    background-color: ${({ theme }) => theme.infoText};
    color: ${({ theme }) => theme.colorBackground};
    transition: 0.5s;
  }
`
