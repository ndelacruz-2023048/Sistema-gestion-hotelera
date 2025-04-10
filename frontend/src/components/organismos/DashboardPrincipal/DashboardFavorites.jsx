import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"

export const DashboardFavorites = () => {
    return (
        <Container>
            <Container1>
                <h1>Favorites</h1>
                <p>Here you can find your favorite items.</p>
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

`

const Container2 = styled.div`

`