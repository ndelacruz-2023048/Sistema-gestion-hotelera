import styled from "styled-components"
import {Title} from "../atomos/Title"

const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
const dates = Array.from({ length: 31 }, (_, i) => i + 1)

export const Calendar = () => {
  return (
    <Container>
      <Title>Calendario - Enero 2025</Title>
      <Weekdays>
        {days.map((day) => (
          <Day key={day}>{day}</Day>
        ))}
      </Weekdays>
      <Grid>
        {dates.map((date) => (
          <DateCell key={date} isHighlighted={[12, 13, 14, 15, 20, 21, 22, 23, 24].includes(date)}>
            {date.toString().padStart(2, "0")}
          </DateCell>
        ))}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Weekdays = styled.div`
  display: flex;
  justify-content: space-between;
`

const Day = styled.div`
  width: 40px;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary || "#aaa"};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`

const DateCell = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ isHighlighted, theme }) => 
    isHighlighted ? theme.primary || "tomato" : theme.bgCard || "#333"};
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`