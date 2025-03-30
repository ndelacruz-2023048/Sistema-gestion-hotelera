import styled from "styled-components"
import { Btn2 } from "../moleculas/Btn.Header"
import { DiAptana } from "react-icons/di";
import { CgExtensionAdd } from "react-icons/cg";
import { BiBell } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Btn1 } from "../moleculas/Btn1";

export const DashboardHeader = () => {
    return (
        <Container>
            <ButtonWrapper>
                <Btn2 />
                <Btn1 />
            </ButtonWrapper>
            <IconWrapper>
                <CgExtensionAdd className="Icon" />
                <DiAptana className="Config" />
                <BiBell className="Notification" />
                <div className="separator" />
                <VscAccount className="Profile" />
            </IconWrapper>
        </Container>
    )
}
const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px; 
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 30px; 
    color: ${({ theme }) => theme.colorIcon};
`;

const IconStyles = `
    font-size: 20px;
`;
const Container = styled.div`
    background-color: ${({ theme }) => theme.colorBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    .Icon, .Config, .Notification, .Profile {
        ${IconStyles}
        
    }

    .separator {
        border-left: 2px solid;
        height: 20px;
        margin: 10px 10px;
        color: ${({ theme }) => theme.colorIcon};
    }
`;