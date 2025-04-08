import styled from "styled-components"
import { BookingCard } from "../../moleculas/AdvanceBooking"

export const AdvanceBooking = () => {
  return (
    <Container>
      <Title>Advance Booking</Title>
      <BookingCard name="Mr Dipon Nath" date="12 Ene - 15 Ene" />
      <BookingCard name="Mr Pranit Das" date="20 Ene - 24 Ene" />
      <BookingCard name="Mr Nayan Paul" date="02 Feb - 07 Feb" />
      <NewBooking>Nueva Reserva</NewBooking>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgSidebar};
  color: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Title = styled.h3`
  margin: 0;
`

const NewBooking = styled.button`
  margin-top: auto;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`