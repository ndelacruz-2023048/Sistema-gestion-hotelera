import { NavLink } from "react-router"
import { Icon } from '@iconify/react'
import { useLogout } from "../../../hooks/useLogout"
import { LinksArraySidebar } from "../../../utils/dataEstatica"
import styled from "styled-components"

export const Sidebar = () => {

    const { logout, isLoadingLogout} = useLogout()

    const handleLogoutClick  = ()=> {
        logout()
    }

    return (
        <Container>
            <section className="sidebarSection1">
                {
                    LinksArraySidebar.map(({ label, icon, to }) => (
                        <div className="LinkContainer">

                            <NavLink to={to} key={label} className={({ isActive }) => `Links${isActive ? " active" : ""}`}>
                                <section>
                                    <Icon icon={icon} className="LinkIcon" />
                                </section>
                            </NavLink>
                        </div>
                    ))
                }
            </section>
            <Divider />
            <section className="sidebarSection2">
                <div className="LinkContainer">
                    <NavLink to="/help" className={({ isActive }) => `Links${isActive ? " active" : ""}`}>
                        <section>
                            <Icon icon="ci:square-help" className="LinkIcon" />
                        </section>
                    </NavLink>
                </div>
                <div className="LinkContainer">
                    <div className="Links" onClick={handleLogoutClick}>
                        <section>
                            <Icon icon="hugeicons:logout-04" className="LinkIcon" />
                        </section>
                        {isLoadingLogout && <div>Cerrando sesión...</div>} {/* O un spinner */}
                    </div>
                </div>
            </section>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .sidebarSection1{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 45%;
    }

    .sidebarSection2{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 15%;
        gap: 10px;
        padding-bottom: 20px;
    }

    .LinkContainer{
        display: flex;
        justify-content: center;
        .Links{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 55px;
            height: 55px;
            .LinkIcon{
                font-size: 25px;
                color: ${({ theme }) => theme.color};
            }
            &.active{
                display: flex;
                justify-content: center;
                align-items:center;
                background-color: ${({ theme }) => theme.activeIconBorderSidebar};
                width: 55px;
                height: 55px;
                border-radius: 10px;
                section{
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    background-color: ${({ theme }) => theme.activeIconSolidSidebar};
                    width: 47px;
                    height: 47px;
                    border-radius: 10px;
                }
                .LinkIcon{
                   font-size: 25px;
                }  
            }
        }
    }

`

const Divider = styled.div`
  height: 1px;
  width: 30%;
  background: ${({ theme }) => theme.divider};
  margin: 0 auto;
`;