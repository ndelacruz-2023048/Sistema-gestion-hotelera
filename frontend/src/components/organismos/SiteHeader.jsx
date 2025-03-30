import styled from "styled-components"
import { Btn2 } from "../moleculas/Btn.Header"
import { DiAptana } from "react-icons/di";
import { CgExtensionAdd } from "react-icons/cg";
import { BiBell } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Btn1 } from "../moleculas/Btn1";
import {logo} from "../../utils/assets/img/FotoDePerfil.jpg"

export const DashboardHeader = () => {
    return (
        <Container>
            <Btn2></Btn2>
            <Btn1></Btn1>
            <CgExtensionAdd className="Icon"/>
            <DiAptana className="Config"/>
            <BiBell  className="Notification"/>
            <div className="separator" />
            <VscAccount className="Profile"/>
            <logo/>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({theme})=>theme.colorBackground};
    display: flex;
    gap: 5px; 
    padding: 10px;

    .Icon{
        font-size: 50px;
        color: ${({theme})=>theme.colorIcon};
        margin-left: auto
    }
    .Config{
        font-size: 50px;
        color: ${({theme})=>theme.colorIcon};
    }
    .Notification{
        font-size: 50px;
        color: ${({theme})=>theme.colorIcon};
    }
    .separator {
        border-left: 2px solid ; 
        height: 50px; 
        margin: 0 10px; 
        color: ${({theme})=>theme.colorIcon};
    }
    .Profile{
        font-size: 50px;
        color: ${({theme})=>theme.colorIcon};
    }
`