import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const PlaceUploadImage = () => {
  return (
    <Container>
        <Icon icon="lucide:plus" className='icon'/>
    </Container>
  )
}

const Container = styled.div`
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='black' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    border-radius: 20px;
    .icon{
        font-size: 35px;
    }
`