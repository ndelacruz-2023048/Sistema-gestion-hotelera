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
    align-items: center;
    gap: 20px;
    height: calc(100vh - 93px);
    .contentSidebar{
        background-color: ${({theme})=>theme.bgSidebar};
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        height: 93%;
    }
`   

const ContainerBody = styled.section`
    width: 100%;
    height: 95%;
    grid-column: 2;
`

