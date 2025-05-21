import React from 'react'
import {useFormContext } from 'react-hook-form';
import styled from 'styled-components';

export const NewDetailRoomForm = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
      <Container>NewDetailForm</Container>
    )
}

const Container = styled.div`
    height: 80%;
`