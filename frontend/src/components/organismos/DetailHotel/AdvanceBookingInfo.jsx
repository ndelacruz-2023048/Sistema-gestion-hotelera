import styled from "styled-components"
import { BookingCard } from "../../moleculas/AdvanceBooking"

export const AdvanceBooking = () => {
  return (
    <Container>
      <Section>
        <Title>Advance Booking</Title>
        <BookingCard name="Mr Dipon Nath" date="12 Ene - 15 Ene" />
        <BookingCard name="Mr Pranit Das" date="20 Ene - 24 Ene" />
        <BookingCard name="Mr Nayan Paul" date="02 Feb - 07 Feb" />
        <NewBooking>Nueva Reserva</NewBooking>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  color: white;
  background-color: ${({ theme }) => theme.colorAdvanceBooking};
  border-radius: 15px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:90%;
  height: 90%;
  margin: auto;
`

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color};
`

const NewBooking = styled.button`
    border: none;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s;
    /* color: ${({ theme, $active }) => $active ? 'white' : theme.color}; */
    color:${({ theme }) => theme.colorAdvanceBooking};
    background-color: ${({theme})=>theme.circleIconRoomDetail};
    height: 30px;
    &:hover {
        background-color: #3b73c6;
    }
`