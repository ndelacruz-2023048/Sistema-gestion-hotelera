import { styled } from "styled-components"
import { EventDetailForm } from "../../moleculas/EventDetails"
import { EventTable } from "../../moleculas/EventTable"

export const EventSection = () => {

    const events = [
        { name: 'Boda' },
        { name: 'XV Años' },
        { name: 'Graduación' },
    ]

    return(
        <EventContainer>
            <TitleContainer>
                <Title>Algo Name</Title>
            </TitleContainer>
            <EventDetailForm/>
            <EventTable events={events}/>
        </EventContainer>
    )
}

const EventContainer = styled.div`
    background: ${({theme})=>theme.bgd};
    width: 25rem;
    height: auto;
    text-align: center; // Fondo semitransparente
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2); // Borde sutil
`

const TitleContainer = styled.div`
    height: 50px;
    margin: 10px 0;
`

const Title = styled.span`
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 100;
    color: ${({theme})=>theme.color};
`