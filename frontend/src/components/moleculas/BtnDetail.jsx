import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"

export const BtnDetail = ({iconLeft, title, text}) => {
    return(
        <Boton>
            <div className="circle">
                <Icon icon={iconLeft} className="Icon"/>
            </div>
            <InfoText>
                <Title>{title}</Title>
                <p>{text}</p>
            </InfoText>

            <Icon icon="weui:arrow-filled" className="arrowI"/>
        </Boton>
    )
}


const Boton = styled.button`
    width: 100%;
    display: flex;
    background: none;
    color: ${({theme})=>theme.color};
    border-radius: 30px;
    transition: 0.3s;
    align-items: center;
    gap: 2px;

    .Icon{
        font-size: 25px;
        padding: 5px;
        color: ${({theme})=>theme.iconRoomDetail};
    }

    .circle{
        width: 40px;
        height: 40px;
        background-color: ${({theme})=>theme.circleIconRoomDetail};
        border-radius: 30px;
        transition: 0.3s;
    }

    .arrowI{
        font-size: 30px;
        margin-left: auto;
    }

    &:hover .circle {
        background-color: ${({theme})=>theme.bgd};
    }

    &:hover {
        background-color: ${({theme})=>theme.bgSidebar};
    }
`
const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    text-align: left;
    justify-content: center;
    padding: 5px;

    p {
        margin-top: 0;
        
    }
`
const Title = styled.div`
    font-size: 15px;
    font-weight: bold;
`