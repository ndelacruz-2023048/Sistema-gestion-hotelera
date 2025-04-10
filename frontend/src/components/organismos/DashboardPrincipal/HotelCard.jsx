import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"

export const HotelCard = () => {
    return (
        <Container>
            <Container1>
                <h1>Rooms</h1>
                <p>Here you can find your intrestings Rooms</p>
            </Container1>
            <Container2>
                <h1>Rooms</h1>
                <p>Here you can find your intrestings Rooms</p>
            </Container2>
            <Container3>
                <h1>Rooms</h1>
                <p>Here you can find your intrestings Rooms</p>
            </Container3>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 50px;
    padding: 25px;
`
const Container1 = styled.div`
    width: 525px;
    height: 370px;
    border: 2px solid #333;
    padding: 10px;
    background-color: ;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`

const Container2 = styled.div`
    width: 525px;
    height: 370px;
    border: 2px solid #333;
    padding: 10px;
    background-color: ;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`

const Container3 = styled.div`
    width: 525px;
    height: 370px;
    border: 2px solid #333;
    padding: 10px;
    background-color: ;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`