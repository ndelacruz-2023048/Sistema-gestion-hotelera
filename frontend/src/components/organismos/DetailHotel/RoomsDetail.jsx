import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"

export const RoomsDetail = () => {
    return(
        <Container>
            <Boton>Boton</Boton>
            <Boton>Boton</Boton>
            <Boton>Boton</Boton>
            <Boton>Boton</Boton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .juanito{
        color: red;
        font-size: 20px;
    }
`

const Boton = styled.button`
    width: 100%;
    height: 30%;
    background-color: ${({theme})=>theme.bgSidebar};
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #3b73c6;
    }
`

