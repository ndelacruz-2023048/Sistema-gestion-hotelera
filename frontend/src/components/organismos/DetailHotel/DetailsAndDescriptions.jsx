import { styled } from "styled-components"

export const EventSection = () => {
    return(
        <EventContainer/>
    )
}

const EventContainer = styled.div`
    background-color: ${({theme})=>theme.bgd};
`