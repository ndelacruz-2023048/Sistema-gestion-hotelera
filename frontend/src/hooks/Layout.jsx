import styled from "styled-components"
import { Sidebar } from "../components/organismos/sidebar/Sidebar"
import { DashboardHeader } from "../components/organismos/SiteHeader"
import { CategoryFilterBar } from "../components/organismos/CategoryFilterBar"

export const Layout = ({children}) => {
    return (
        <Container>
            <section className="contentHeader">
                <DashboardHeader/>
                <CategoryFilterBar/>
            </section>
            <MainContent>
                <section className="contentSidebar">
                    <Sidebar/>
                </section>
                <ContainerBody>
                    {children}
                </ContainerBody>
            </MainContent>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const MainContent = styled.div`
    display: grid;
    grid-template-columns: 88px 1fr;
    background-color: gray;
    padding-top: 20px;
    .contentSidebar{
        background-color: green;
    }
    gap: 20px;
`   

const ContainerBody = styled.section`
    width: 100%;
    grid-column: 2;
`