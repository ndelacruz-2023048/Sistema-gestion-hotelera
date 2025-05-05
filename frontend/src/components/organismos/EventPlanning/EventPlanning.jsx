import React, { useState } from 'react'
import { Tag } from '../../atomos/Tag'
import { Label } from '../../atomos/Label'
import { Icon } from "@iconify/react/dist/iconify.js";
import { EventPlanningLeft } from '../../moleculas/EventPlanningLeft';
import { EventPlanningCenter } from '../../moleculas/EventPlanningCenter';
import { EventPlanningRight } from '../../moleculas/EventPlanningRight';
import styled from 'styled-components';
import {DeliveryDetails} from '../../moleculas/DeliveryDetails';
import { Methods } from '../../moleculas/Methods';

export const EventPlanning = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    const handleOpen = ()=> {
        setIsOpen(!isOpen)
        setIsOptionsOpen(false)
    }

    const handleOptionsClick = () => {
        setIsOptionsOpen(!isOptionsOpen)
        setIsOpen(false)
    };
    return (
        <EventWrapper>
            <EventCard>
                <EventPlanningLeft
                    icon={"tdesign:task"}
                    textLines={["Increase confidence with", "TrustPilot reviews"]}
                    variant={'gray'}
                    children={'Custom Task'}
                />
                <EventPlanningCenter onDeliveryClick={handleOpen}/>
                <EventPlanningRight onOptionsClick={handleOptionsClick}/>
            </EventCard>

            {isOpen && <DeliveryDetails />}
            {isOptionsOpen && <Methods />}
            <Button>+ Agregar Evento</Button>

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