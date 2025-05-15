import React, { useState } from 'react'
import { Tag } from '../../atomos/Tag'
import { Label } from '../../atomos/Label'
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalEvents from '../modal/modalEvents'
import { EventPlanningLeft } from '../../moleculas/EventPlanningLeft';
import { EventPlanningCenter } from '../../moleculas/EventPlanningCenter';
import { EventPlanningRight } from '../../moleculas/EventPlanningRight';
import {DeliveryDetails} from '../../moleculas/DeliveryDetails';
import { Methods } from '../../moleculas/Methods';
import { useEvents } from '../../../hooks/useEvents'
import styled from 'styled-components';

export const EventPlanning = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [currentEvent, setCurrentEvent] = useState(null)
    const {events, isLoading, error} = useEvents()

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const handleOpen = (eventDetails)=> {
        setIsOpen(!isOpen)
        setIsOptionsOpen(false)
        setCurrentEvent(eventDetails)
    }

    const handleOptionsClick = () => {
        setIsOptionsOpen(!isOptionsOpen)
        setIsOpen(false)
        setCurrentEvent(null)
    }

    if (isLoading) {
        return <p>Cargando eventos...</p>;
    }
    
    if (error) {
        return <p>Error al cargar los eventos: {error}</p>;
    }
    return (
        <EventWrapper>
            {events.length > 0 ? (
                events.map(event => (
                <EventCard>
                    <EventPlanningLeft
                        icon={"tdesign:task"}
                        textLines={[event.name, event.description]}
                        children={event.organizer}
                    />
                    <EventPlanningCenter 
                        price={event.price}
                        designated={event.designated}
                        startDate={event.startDate}
                        endDate={event.endDate}
                        onDeliveryClick={() => handleOpen({ startDate: event.startDate, endDate: event.endDate })}
                    />
                    <EventPlanningRight onOptionsClick={handleOptionsClick}/>
                </EventCard>
                ))
            ) : (
                <p>No hay Nada</p>
            )}

            {isOpen && currentEvent && ( // Renderiza DeliveryDetails solo si isOpen es true y currentEvent tiene un valor
                <DeliveryDetails startDate={currentEvent.startDate} endDate={currentEvent.endDate} />
            )}
            {isOptionsOpen && <Methods />}
            
            <Button onClick={togglePopup}>+ Agregar Evento</Button>
            {isOpen && (
                    <>
                        <ModalEvents togglePopup={togglePopup}/>
                    </>
            )}

            {/* <Tag variant={'blue'}>Integrations</Tag>
            <Tag variant={'red'}>Marketing & Sales</Tag>
            <Tag variant={'gray'}>Custom Task</Tag>
            <Tag variant={'green'}>Optimization</Tag> */}
        </EventWrapper>
    )
}

const EventWrapper = styled.div`
    margin-left: 200px;
`
const EventCard = styled.div`
    background-color: ${({theme})=>theme.colorBackground};
    border-radius: 5px 5px 5px 5px;
    width: 80em;
    height: auto;
    display: flex;
    gap: 150px;
    padding: 25px 10px;
`

const Button = styled.button`
    background-color: #B29464;
    border-radius: 0px 50px 50px 50px;
    height: 4em;
    width: 30em;
    font-weight: 400;
    font-style: normal;
    font-family: "Great Vibes", cursive;cursor: pointer;
    transition: .5s ease;
    color: ${({theme})=>theme.color};
    &:hover{
        background-color: ${({theme})=>theme.hoverB};
        color: ${({theme})=>theme.color1};
        transition: .5s ease;
    }
`