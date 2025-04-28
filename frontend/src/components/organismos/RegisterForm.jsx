import React from 'react'
import styled from 'styled-components'
import { SectionDataRegister } from '../moleculas/SectionDataRegister'

export const RegisterForm = () => {
    return (
        <RegisterFormWrapper>
            <SectionDataRegister/>
        </RegisterFormWrapper>
    )
}

const RegisterFormWrapper = styled.form`
    position: absolute;
    transform:  translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    transition: .3s;
    left: 50%;
`