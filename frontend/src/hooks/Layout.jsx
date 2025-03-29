import styled from "styled-components"
import { Sidebar } from "../components/organismos/sidebar/Sidebar"

export const Layout = ({children}) => {
    return (
        <Container>
            <section className="contentSidebar">
                <Sidebar/>
            </section>
            <ContainerBody>
                {children}
            </ContainerBody>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 88px 1fr;
    .contentSidebar{
        background-color: green;
    }
`   

const ContainerBody = styled.section`
    width: 100%;
    grid-column: 2;
`