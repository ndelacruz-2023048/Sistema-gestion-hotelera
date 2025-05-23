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
    const [isOpenD, setIsOpenD] = useState(false)
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [currentEvent, setCurrentEvent] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const {events, isLoading, error, deleteEvents} = useEvents()

    const togglePopup = () => {
        setIsOpen(!isOpen)
        setIsOpenD(false)
        setIsOptionsOpen(false)
    }

    const handleOpen = (eventDetails)=> {
        setIsOpenD(!isOpenD)
        setIsOpen(false)
        setIsOptionsOpen(false)
        setCurrentEvent(eventDetails)
    }

    const handleOptionsClick = (event) => {
        setIsOptionsOpen(!isOptionsOpen)
        setIsOpen(false)
        setIsOpenD(false)
        setCurrentEvent(event)
    }

    const handleEdit =()=> {
        setIsEdit(true)
        setIsOpen(true)
    }   
    
    return (
        <EventWrapper>
            <HeaderEvent>
                <Title>Eventos</Title>
                <Button onClick={()=> {
                            setCurrentEvent(null)
                            togglePopup()
                            setIsEdit(false)
                        }
                    }
                >+ Agregar Evento</Button>
            </HeaderEvent>
            <div className="cardSection">
                {isLoading ? (
                    <p>Cargando eventos...</p>
                ) : events.length === 0 ? (
                    <p>No hay eventos disponibles o creados</p>
                ) : error ? (
                    <p>Error al cargar eventos</p>
                ) : (
                    events.map(event => (
                        <EventCard key={event._id}>
                        <EventPlanningLeft
                            icon="tdesign:task"
                            textLines={[event.name, event.description]}
                            children={event.hotel?.name}
                        />
                        <EventPlanningCenter
                            price={event.price}
                            designated={event.designated}
                            startDate={event.startDate}
                            endDate={event.endDate}
                            onDeliveryClick={() => handleOpen(event)}
                        />
                        <EventPlanningRight onOptionsClick={() => handleOptionsClick(event)} />
                        {isOpenD && currentEvent?._id === event._id && (
                            <DeliveryDetails
                            startDate={currentEvent.startDate}
                            endDate={currentEvent.endDate}
                            />
                        )}
                        {isOptionsOpen && currentEvent?._id === event._id && (
                            <Methods
                            setIsEdit={setIsEdit}
                            togglePopup={togglePopup}
                            onEdit={handleEdit}
                            onDelete={deleteEvents}
                            eventId={event._id}
                            />
                        )}
                        </EventCard>
                    ))
                )}
            </div>

            {isOpen && (
                    <>
                        <ModalEvents togglePopup={togglePopup} isEdit={isEdit} setIsEdit={setIsEdit} event={currentEvent}/>
                    </>
            )}
        </EventWrapper>
    )
}

const EventWrapper = styled.div`
    margin-left: 200px;
    .cardSection {
        overflow-y: scroll;
        scrollbar-width: none;
        max-height: 630px;
    }
`

const HeaderEvent = styled.div`
    display: flex;
    width: 81em;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;
    font-style: normal;
    font-family: "Great Vibes", cursive;
    margin-bottom: 0.5px;
`
const EventCard = styled.div`
    background-color: ${({theme})=>theme.colorBackground};
    border-radius: 5px 5px 5px 5px;
    width: 80em;
    height: auto;
    display: flex;
    gap: 150px;
    padding: 25px 10px;
    margin-bottom: 20px;
`

const Button = styled.button`
    background-color: #B29464;
    border-radius: 50px 50px 50px 0px;
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