import styled from "styled-components"
import { Btn1 } from "../moleculas/Btn1"

export const LoginTemplate = () => {
    return (
        <ContainerLogin>
            <Btn1/>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    background-color: ${({theme})=>theme.bg};
`