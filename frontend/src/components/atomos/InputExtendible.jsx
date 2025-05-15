import React, { ChangeEvent, forwardRef, useState } from 'react';
import styled from 'styled-components';

export const InputExtendible = forwardRef(({
    placeholder,
    value,
    onChange,
    multiline = false,
    rows = 3,
    disabled = false,
    fullWidth = true,
    error,
    ...rest
}, ref) => {
    const [localValue, setLocalValue] = useState(value || '');

    const handleChange = (e) => {
        setLocalValue(e.target.value);
        if (onChange) {
        onChange(e);
        }
    };

    return (
        <InputContainer $fullWidth={fullWidth}>
        {multiline ? (
            <StyledTextarea
            ref={ref}
            placeholder={placeholder}
            value={value ?? localValue}
            onChange={handleChange}
            rows={rows}
            disabled={disabled}
            {...rest}
            error={error}
            />
        ) : (
            <StyledInput
            ref={ref}
            type="text"
            placeholder={placeholder}
            value={value ?? localValue}
            onChange={handleChange}
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
    border: 1px solid #DDDDDD;
    border-radius: 8px;
    background-color: white;
    transition: all 0.2s;
    
    &:focus {
        outline: none;
        border-color: #F05123;
        box-shadow: 0 0 0 2px rgba(240, 81, 35, 0.2);
    }
    
    &:disabled {
        background-color: #F5F5F5;
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