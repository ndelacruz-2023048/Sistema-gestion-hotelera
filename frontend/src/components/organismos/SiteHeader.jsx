import styled from "styled-components"
import { Icon } from "@iconify/react/dist/iconify.js";
import { generateInitialsAvatar } from "../../utils/GenerateInitialAvatar";
import { Toggle } from "../moleculas/Toggle";
import Logotipo_Havenis from '../../assets/Logotipo_Havenis.png'
import { useState } from "react";
import { ModalUser } from "./modal/modalUser";
import { UserAuth } from "../../context/AuthContext";
import {jwtDecode} from 'jwt-decode'

export const DashboardHeader = () => {
    
    const { user } = UserAuth()
    let name, surname, profile = ''
    if(user) {
        try {
        const decoded = jwtDecode(user)
        name = decoded?.name
        surname = decoded?.surname
        profile = decoded?.profile
        } catch (e) {
        console.error('error', e);
        
        }
    }
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Container>
            <Section1>
                <LogoContainer>
                    <section className="section">
                        <Logo src={Logotipo_Havenis}/>
                        <p className="title">Hotel</p>
                    </section>
                </LogoContainer>
                <LinksContainer>
                    <LinksHeader href="#" className="links">Categorias</LinksHeader>
                    <LinksHeader href="#" className="links">Produtos</LinksHeader>
                    <LinksHeader href="#" className="links">Sobre</LinksHeader>
                    <LinksHeader href="#" className="links">FAQS</LinksHeader>
                </LinksContainer>
            </Section1>
            <Section2>
                <ToggleContainer>
                    <Toggle/>
                </ToggleContainer>
                <IconsContainer>
                    <Icon icon="solar:widget-add-linear" className="iconHeader"/>
                    <Icon icon="qlementine-icons:settings-16" className="iconHeader"/>
                    <Icon icon="mage:notification-bell" className="iconHeader"/>
                </IconsContainer>
                <DividerContainer>
                    <Divider/>
                </DividerContainer>
                
                <ImageContainer >
                { (profile ?? "").toString().length > 0 
                    ? <Image src={profile} alt="Profile" onClick={togglePopup}/> 
                    : generateInitialsAvatar(name, surname) 
                }
                </ImageContainer>

                {isOpen && (
                    <>
                        <ModalUser togglePopup={togglePopup}/>
                    </>
                )}
            </Section2>
        </Container>
    )
}



const Container = styled.div`
    background-color: ${({ theme }) => theme.colorBackground};
    display: flex;
    width: 100%;
    height: 80px;
`;

const Section1 = styled.section`
    display: flex;
    width: 50%;
`

const Section2 = styled.section`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
`

const LinksHeader = styled.a`
    background-color: transparent;
    color: ${({theme})=>theme.color};
    font-size: 10px;
    border : none;
    `

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px; 
    .links{
        font-size: 14px;
    }
    `;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    .section{
        display: flex;
        justify-content: end;
        align-items: end;
        width: 50%;
    }
    .title{
        font-size: 17px;
        color: ${({ theme }) => theme.color};
    }   
`

const ToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    .iconHeader{
        font-size: 25px;
        color: ${({ theme }) => theme.color};
    }
`
const DividerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10%;
`

const Divider = styled.div`
    height: 15%;
    width: 1px;
    background-color: ${({ theme }) => theme.color};
`

const ImageContainer  = styled.div`
    width: 10%;
    
`
const Logo = styled.img`
    width: 60px;
    height: 60px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`