import React from 'react'
import styled from 'styled-components'
import photoProfile from '../../assets/photoProfile.avif'

export const DetailUser = () => {
  return (
    <Container>
        <h1>User Details</h1>
        <Square>
            <Image src={photoProfile}/>
        </Square>
        <SquareD></SquareD>
        <Square></Square>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.color};
`

const Square = styled.div`
    margin-left: 2%;
    margin-right: 2%;
    width: 95%;
    height: 20%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colorBackground};
`

const SquareD = styled.div`
    margin-left: 2%;
    margin-right: 2%;
    width: 95%;
    height: 40%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colorBackground};
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #28364b;
`