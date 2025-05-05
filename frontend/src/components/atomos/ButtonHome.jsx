import styled from "styled-components"
import {NavLink } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";

export const ButtonHome = () => {
  return (
    <ButtonHomeStyled to="/">
      <ArrowLeft />
    </ButtonHomeStyled>
  )
}

const ButtonHomeStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    margin-top: -20px;
    
    cursor: pointer;
`
const ArrowLeft = styled(SlArrowLeftCircle)`
  color: ${({ theme }) => theme.color};
  font-size: 35px;
  display: flex;
  margin-top: 12px;
`
