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
                <Icon icon="tabler:access-point" width="24" height="24" className="IconoDeLocalizacion"/>
            </Container2>
        </Container>
    )
}

const Container = styled.div`

`
const Container1 = styled.div`
    background-color: blue;
`
const Container2 = styled.div`
    .IconoDeLocalizacion {
        color: Green;
`