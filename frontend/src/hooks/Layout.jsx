import styled from "styled-components"
import { Sidebar } from "../components/organismos/sidebar/Sidebar"
import { DashboardHeader } from "../components/organismos/SiteHeader"
import { CategoryFilterBar } from "../components/organismos/CategoryFilterBar"

export const Layout = ({children}) => {
    return (
        <Container>
            <section className="contentHeader">
                <DashboardHeader/>
                <Divider/>
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
    .contentHeader{
        position:relative;
    }
`

const MainContent = styled.div`
    display: grid;
    grid-template-columns: 88px 1fr;
    background-color: ${({theme})=>theme.bgd};//gray
    align-items: center;
    gap: 20px;
    height: calc(100vh - 146px);
    .contentSidebar{
        background-color: ${({theme})=>theme.bgSidebar};
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        height: 93%;
    }
`   

const ContainerBody = styled.section`
    width: 100%;
    height: 93%;
    grid-column: 2;
`

const Divider = styled.span`
    display:flex;
    position:absolute;
    width:96%;
    height:1px;
    left:2%;
    background-color:${({theme})=>theme.dividerHeader};
`
