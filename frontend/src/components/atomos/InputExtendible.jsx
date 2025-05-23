import React, { ChangeEvent, forwardRef } from 'react';
import styled from 'styled-components';

export const InputExtendible = forwardRef(({
    placeholder,
    value,
    onChange,
    multiline = false,
    rows = 3,
    disabled = false,
    fullWidth = true,
    id,
    error,
    ...rest
}, ref) => {
    return (
        <InputContainer $fullWidth={fullWidth}>
        {multiline ? (
            <StyledTextarea
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            id={id}
            disabled={disabled}
            {...rest}
            error={error}
            />
        ) : (
            <StyledInput
            ref={ref}
            type="text"
            placeholder={placeholder}
            value={value}
            id={id}
            onChange={onChange}
            disabled={disabled}
            {...rest}
            error={error}
            />
        )}
        {error && <p className="error-message">{error.message}</p>}
        </InputContainer>
    );
});


InputExtendible.displayName = 'InputExtendible';

const InputContainer = styled.div`
    position: relative;
    width: ${props => props.$fullWidth ? '100%' : 'auto'};
    .error-message {
        color: red; // Estilo para el mensaje de error
        font-size: 12px;
    }
`;

const baseInputStyles = `
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: transparent;
    transition: all 0.2s;
    
    &:focus {
        outline: none;
        border-color: #F05123;
        box-shadow: 0 0 0 2px rgba(240, 81, 35, 0.2);
    }
    
    &:disabled {
        background-color: transparent;
        cursor: not-allowed;
    }
    
    &::placeholder {
        color: #999999;
    }
`;

const StyledInput = styled.input`
    ${baseInputStyles}
`;

const StyledTextarea = styled.textarea`
    ${baseInputStyles}
    resize: vertical;
    min-height: 80px;
`;