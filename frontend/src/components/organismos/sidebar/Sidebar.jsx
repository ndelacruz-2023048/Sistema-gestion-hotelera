import { NavLink } from "react-router"
import styled from "styled-components"

export const Sidebar = () => {
    return (
        <Container>
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="/login">Login</NavLink></div>
            <div><NavLink>...</NavLink></div>
        </Container>       
    )
}

const Container = styled.div`
    width: 100%;
`