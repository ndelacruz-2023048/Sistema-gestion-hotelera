import React from 'react'
import { useFormContext } from "react-hook-form";
import styled from 'styled-components';
export const NewRoomForm = () => {
    const { register, formState: { errors } } = useFormContext();
  return (
    <Container>NewRoomForm</Container>
  )
}
const Container = styled.div`
    height: 80%;
`
