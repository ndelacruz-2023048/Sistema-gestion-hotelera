import React from 'react';
import styled from 'styled-components';

const DeliveryDetailsWrapper = styled.div`
    position: absolute;
    bottom: calc(100% + 10px); /* Se coloca encima del disparador */
    left: 42%;
    top: 207px;
    transform: translateX(-50%);
    background-color: #283542;
    color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: 200px;
    height: 98px;
    text-align: left; /* Alinea el texto a la izquierda */

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -8px; /* Centra la flecha */
        border-top: 8px solid #283542;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 0;
    }
`;

const DateInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 0.9em;

    span {
        margin-left: 5px;
        color: #ddd;
    }
`;

const Bullet = styled.span`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #007bff;
    margin-right: 5px;
`;

const Checkmark = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    color: #00c853;
    font-weight: bold;
    font-size: 0.8em;
    margin-right: 5px;
`;

export const DeliveryDetails = ({ startDate, endDate }) => {
    const formatDate = (date) => {
        if (date) {
          return new Date(date).toLocaleString(); // Formatea la fecha localmente
        }
        return 'N/A';
    }

    console.log(startDate, endDate);
    
    return (
        <DeliveryDetailsWrapper>
        <DateInfo>
            <Bullet />
            <span>{formatDate(startDate)}</span>
        </DateInfo>
        <DateInfo>
            <Checkmark>✓</Checkmark>
            <span>Inicia</span>
        </DateInfo>
        <DateInfo>
            <span>{formatDate(endDate)}</span>
        </DateInfo>
        <DateInfo>
            <span>Finzaliza</span>
        </DateInfo>
        </DeliveryDetailsWrapper>
    );
};