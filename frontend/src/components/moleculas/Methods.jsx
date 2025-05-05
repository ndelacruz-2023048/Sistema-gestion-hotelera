import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
    bottom: calc(100% + 10px); /* Se coloca encima del disparador */
    left: 90%;
    top: 180px;
    transform: translateX(-50%);
    background-color: #283542;
    color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: 200px;
    height: 70px;
    text-align: left; /* Alinea el texto a la izquierda */

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: -3.5%;
        margin-top: -25%; /* Centra la flecha */
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #283542;
        border-left: 0;
    }
`;

const Option = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Methods = () => {
  return (
    <Wrapper>
      <Option>Edit</Option>
      <Option>Delete</Option>
    </Wrapper>
  );
};
