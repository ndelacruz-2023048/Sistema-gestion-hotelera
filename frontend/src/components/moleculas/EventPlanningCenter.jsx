import React from 'react'
import styled from 'styled-components'
import { EventSection } from '../organismos/EventsHotel/EventsSection'
import photo from '../../assets/photoProfile.avif'

export const EventPlanningCenter = ({ onDeliveryClick }) => {
    return (
        <Wrapper>
            <TextArea>
                <Text>
                    <Label>$99.00 (1 credit)</Label>
                    <SubText>Task Price</SubText>
                </Text>
                <SubTextType>Delivery: <Delivery onClick={onDeliveryClick}>within 5 days</Delivery></SubTextType>
            </TextArea>
            <DataArea>
                <Img src={photo}></Img>
                <Text>
                    <Label>My name</Label>
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