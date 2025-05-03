import styled from "styled-components"
import { LoginTemplate } from "../components/template/LoginTemplate"
import logo from '../assets/Logotipo_Havenis.png'
import { motion } from 'framer-motion'

export const Login = ()=>{
    return(
        <Wrapper>
            <FormContainer
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <LogoWrapper
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: -50, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                >
                    <Img src={logo}/>
                </LogoWrapper>
                <LoginTemplate/>
            </FormContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #0F1824;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 20px;
`

const FormContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoWrapper = styled(motion.div)`
    position: absolute;
    top: -10px; // Ajusta para que el logo sobresalga del contenedor
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Img = styled.img`
    width: 110px;
    height: 110px;
    background: rgba(170, 170, 170, 0.281);
    border-radius: 50%;
    object-fit: contain;
`