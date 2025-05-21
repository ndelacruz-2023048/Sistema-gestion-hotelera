import React from 'react'
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

export const NewRoomViewForm = () => {
const { register, formState: { errors } } = useFormContext();
  return (
    <Container>NewRoomViewForm</Container>
  )
}

const Container = styled.div`
    height: 80%;
`