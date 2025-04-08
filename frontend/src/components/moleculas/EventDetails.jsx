import styled from "styled-components"
import { Icon } from "@iconify/react/dist/iconify.js";

export const EventDetailForm = ()=> {
    return(
        <EventContainer>
            <ButtonForm>
                <Icon icon="fluent-color:calendar-16" className="IconEvent" />
                Programar Nuevo Evento
            </ButtonForm>
        </EventContainer>
    )
}

const EventContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

const ButtonForm = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({theme})=>theme.color};
    .IconEvent{
        width: 25px;
        height: 25px;
        margin: 0 5px;
    }
`