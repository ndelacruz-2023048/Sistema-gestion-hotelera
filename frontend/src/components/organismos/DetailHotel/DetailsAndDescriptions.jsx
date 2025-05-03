import styled from "styled-components"
import { RoomOverview } from "../../moleculas/RoomOverview"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Title } from "../../atomos/Title";
export const DetailsAndDescriptions = () => {
    const markedDates = [
        new Date(2025, 3, 15), // 15 de abril de 2025
        new Date(2025, 4, 20), // 20 de abril de 2025
      ];
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
          const isMarked = markedDates.some(
            (markedDate) => markedDate.toDateString() === date.toDateString()
          );
          return isMarked ? 'marked' : null;
        }
    };

    return (
        <Wrapper>
            <Container> 
                <Title>Room Overview</Title>
                <Section>
                  <RoomOverview />
                  <Calendar tileClassName={tileClassName} />
                </Section>
            </Container>
      </Wrapper>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  .marked {
    background: #ff9800 !important;
    color: white !important;
    border-radius: 50%;
  }
  .react-calendar{
    width: 40%;
    height: 100%;
    background-color: transparent;
    border: none;
  }

  .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
    background: transparent;
  }
  .react-calendar__tile--active {
    background: transparent;
    color: #000;
  } 

  .react-calendar button:enabled:hover {
    cursor: inherit;
  }

  .react-calendar__tile{
    padding: 0px 6.6667px;
    color:${({theme})=>theme.color}
  }

  .react-calendar__navigation{
    margin: 0;
  }

  .react-calendar__month-view__weekdays{
    color:${({theme})=>theme.color};
    font-weight: 600;
  }

  .react-calendar__navigation button{
    color:${({theme})=>theme.color};
  }

  .react-calendar__tile--now {
    background: ${({theme})=>theme.dateNow};
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 59%;
  border-radius: 15px;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`
