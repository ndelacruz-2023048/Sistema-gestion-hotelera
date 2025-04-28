import React from 'react'
import { SectionData } from '../moleculas/SectionData'
import styled from 'styled-components'

export const LoginForm = () => {
  return (
    <>
        <LoginFormWrapper>
            <SectionData/>
        </LoginFormWrapper>
    </>
  )
}

const LoginFormWrapper = styled.form`
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
