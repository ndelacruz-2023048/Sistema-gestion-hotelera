import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"

export const RoomsDetail = () => {
    return(
        <Container>
            <Title>
                <Span className="spanRoom">Rooms</Span> 
                <Span>Rooms</Span> 
                <Span>Rooms</Span> 
                <Span>Rooms</Span> 
            </Title>
            <Title>Rooms</Title>

            <Icon icon="hugeicons:ai-cloud-01" className="juanito" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    .juanito{
        color: red;
        font-size: 350px;
    }
`

const Title = styled.h1`
    font-size: 54px;
    background-color: ${({theme})=>theme.bgSidebar};
    display: flex;
    justify-content: space-between;
    .spanRoom{
        color: pink;
    }
`

const Span = styled.span`
    font-size: 24px;
    color: white;
    font-weight: 500;
`

