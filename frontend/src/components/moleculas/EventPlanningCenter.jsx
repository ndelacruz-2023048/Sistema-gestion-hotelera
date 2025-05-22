import React from 'react'
import styled from 'styled-components'
//import photo from '../../assets/photoProfile.avif'
import { generateInitialsAvatar } from '../../utils/GenerateInitialAvatar'

const calculateDuration = (startDate, endDate) => {
    if (!startDate || !endDate) {
        return 'N/A';
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = end.getTime() - start.getTime(); // Diferencia en milisegundos

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let durationString = '';
    if (days > 0) {
        durationString += `${days} día${days > 1 ? 's' : ''}`;
    }
    if (hours > 0) {
        if (durationString) {
            durationString += ', ';
        }
        durationString += `${hours} hora${hours > 1 ? 's' : ''}`;
    }

    return durationString || 'Menos de una hora';
}

export const EventPlanningCenter = ({ price, designated, startDate, endDate, onDeliveryClick }) => {
    const duration = calculateDuration(startDate, endDate)
    return (
        <Wrapper>
            <TextArea>
                <Text>
                    <Label>${typeof price === 'number' ? price.toFixed(2) : 'N/A'} (1 persona)</Label>
                    <SubText>Task Price</SubText>
                </Text>
                <SubTextType>Dura: <Delivery onClick={() => onDeliveryClick({ startDate, endDate })}>{duration}</Delivery></SubTextType>
            </TextArea>
            <DataArea>
                {designated?.profilePicture ? (
                    <Img src={designated.profilePicture}/>
                ) : (
                    designated && generateInitialsAvatar(designated.name, designated.surname)
                )}
                {/* <Img src={photo}></Img> */}
                <Text>
                    <Label>{designated?.name ? `${designated.name} ${designated.surname || ''}` : 'Sin asignar'}</Label>
                    <SubText>Assigned to</SubText>
                </Text>
            </DataArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    gap: 5px;
    display: flex;
`

const TextArea = styled.div`
`

const DataArea = styled.div`
    margin: 0 50px;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SubText = styled.span`
    font-size: 13.5px;
    color: #adb2b5;
`

const SubTextType = styled.span`
    font-size: 12.5px;
    font-weight: bold;
    color: ${({theme})=>theme.text};
`

const Delivery = styled.span`
    color: #007bff;
    font-weight: normal;
    cursor: pointer;
`

const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme})=>theme.text};
`