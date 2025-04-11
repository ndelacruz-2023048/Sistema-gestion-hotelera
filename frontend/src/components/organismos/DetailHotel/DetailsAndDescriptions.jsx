import styled from "styled-components"
import { RoomOverview } from "../../moleculas/RoomOverview"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
                <RoomOverview />
                <Calendar tileClassName={tileClassName} />
            </Container>
      </Wrapper>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  gap: 20px;
  width: 100%;
  color: #fff;
  background-color: ${({ theme }) => theme.bgSidebar};
  border-radius: 15px;
  .marked {
    background: #ff9800 !important;
    color: white !important;
    border-radius: 50%;
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
    padding: 5px 6.6667px;
 }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.bgSidebar};
  border-radius: 15px;
`

const TopRightBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.bgCard};
  padding: 10px;
  border-radius: 10px;
  z-index: 2;
`