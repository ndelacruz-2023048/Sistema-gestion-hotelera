import styled from "styled-components"

export const Input2  = ({holder, type, name, id}) => {
    return (
        <InputWrapper>
            <StyledInput 
                type={type}
                name={name}
                id={id}
                placeholder={holder}
            />
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    position: relative;
`

const StyledInput = styled.input`
    width: 363px;
    height: 55px;
    margin: 15px 0;
    border: none;
    color: #A6A6A6;
    text-decoration: none;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    background-color: transparent;
    outline: none;
    border-bottom: .5px solid black; // Línea inferior como en la imagen
    padding-bottom: 5px; // Espacio entre el contenido y la línea
    &::placeholder {
        color: #A6A6A6;
        font-size: 15px;
    }
`