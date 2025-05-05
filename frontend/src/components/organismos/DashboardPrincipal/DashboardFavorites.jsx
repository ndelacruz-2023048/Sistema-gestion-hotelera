import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
import styled from "styled-components"
import { useThemeStore } from "../../../store/ThemeStore"
import ModalEvents from '../../../modal/modalEvents'

export const DashboardFavorites = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    const {setTheme}= useThemeStore()
    return (
        <Container>
            <Container1>
                <h1>Favorites</h1>
                <p>Here you can find your favorite items.</p>
            </Container1>
            <Container2>
                <Icon icon="tabler:access-point" width="24" height="24" className="IconoDeLocalizacion"/>
                <button onClick={togglePopup}>cAMBIAR</button>

                {isOpen && (
                    <>
                        <ModalEvents togglePopup={togglePopup}/>
                    </>
                )}
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