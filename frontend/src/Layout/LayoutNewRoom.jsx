import React from 'react'
import styled from 'styled-components'
import { RoomCard } from '../components/organismos/Room/RoomCard'

export const LayoutNewRoom = ({children}) => {
  return (
    <Container>
        <section className='sectionMain'>
            {children}
        </section>
        <section className='sectionPreviews'>
            <div className='sectionPreviews_container'>
                <RoomCard/>
            </div>
        </section>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    height: 97%;
    .sectionMain{
        width: 70%;
    }
    .sectionPreviews{
        display: flex;
        justify-content: center;
        width:30%;
        border-left: 2px solid ${({theme})=>theme.eSBorder};
        &_container{
            display: flex;
            justify-content: center;
            gap: 10px;
            width: 95%;
        }
    }
`
