import React from 'react'
import { Tag } from '../atomos/Tag'
import { Icon } from "@iconify/react/dist/iconify.js";
import styled from 'styled-components';

export const EventPlanningLeft = ({icon, textLines, children}) => {
    const getRandomColorVariant = () => {
        const colors = ['blue', 'red', 'gray', 'green', 'purple']; // Añade más colores si quieres
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const varianteRandom = getRandomColorVariant()

    return (
        <Wrapper>
            <Icon icon={icon} className='Icon'/>
            <Text>
                {textLines && textLines.map((line, index) => (
                    <Label key={index}>{line}</Label>
                ))}
                <Tag variant={varianteRandom}>{children}</Tag>
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    .Icon {
        font-size: 30px;
        margin-top: 16px;
        color: #c9cbcc;
    }
    `

const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme})=>theme.text};
`

const Text = styled.div`
    gap: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`