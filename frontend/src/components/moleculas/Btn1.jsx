import styled from 'styled-components'

export const Btn1 = ({onClick}) => {
    return (
        <Button onClick={onClick}>Click me!</Button>
    )
}

const Button = styled.button`
    background-color: transparent;
    color: ${({theme})=>theme.color};
    font-size: 10px;
    border : none;
    padding: 10px 20px;
    &:hover {
        background-color: ${({ theme }) => theme.bgHover};
        color: ${({ theme }) => theme.colorHover};
    }
`