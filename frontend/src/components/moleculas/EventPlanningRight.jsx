import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CommentIcon } from './CommentIcon'
import { Icon } from "@iconify/react/dist/iconify.js";

export const EventPlanningRight = ({ onOptionsClick }) => {
    const [comment, setComment] = useState(false)
    

    useEffect(() => {
        const interval = setInterval(() => {
            setComment(Math.random() > 0.5);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <Wrapper>
            <Status>
                <TextArea>
                    <Circle></Circle> Verify
                </TextArea>
            </Status>
            <Icons>
                <CommentIcon hasComment={comment}/>
                <div onClick={onOptionsClick}>
                    <Icon icon="ri:more-fill" width="30" height="30" />
                </div>
            </Icons>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
`

const Circle = styled.div`
    width: 12px; /* Define el diámetro */
    height: 12px; /* Define el diámetro (igual al ancho para un círculo) */
    border-radius: 50%; /* La clave para hacerlo círculo */
    background-color: #007bff; /* El color que desees */
`

const Status = styled.div`
    background-color: transparent;
    border-radius: 0px 50px 50px 50px;
    border: 2px solid #d0d8da;
    width: 12em;
    height: 3em;
    display: flex;
`

const TextArea = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 20px;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({theme})=>theme.text};
    cursor: pointer;
`