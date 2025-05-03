import React from 'react'
import { LoginForm } from '../organismos/LoginForm'
import styled from 'styled-components'
import { motion } from 'framer-motion'


export const LoginTemplate = () => {

  return (
    <Wrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
    >
        <LoginColumn>
            <Title
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
            >
                Iniciar Seción
            </Title>
            <LoginForm/>
        </LoginColumn>
    </Wrapper>
  )
}

const Wrapper = styled(motion.section)`
    display: flex;
    width: 526px;
    height: 585px;
    border: none;
    border-radius: 30px;
    background: rgba(190, 190, 190, 0.219);
    text-align: center;
`

const LoginColumn = styled.div`
    position: relative;
    width: 100%;
    margin: 30px 0;
`

const Title = styled(motion.h1)`
    font-weight: 400;
    font-style: normal;
    font-family: "Great Vibes", cursive;
    display: inline-block;
    cursor: pointer; /* Indica que es interactivo */
    font-size: 40px;
    color: #A6A6A6;
    margin: 40px 0;
`