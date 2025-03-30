import styled from 'styled-components'
import { useThemeStore } from '../../store/ThemeStore'


export const Btn2 = () => {
    return (
        <>
        <Button>Categorias</Button>
        </>
        
        
    )
}
const Button = styled.button`
    background-color: transparent;
    color: ${({theme})=>theme.color};
    cursor: pointer;
    font-size: 10px;
    border : none;
    padding: 10px 20px;
    &:hover {
        background-color: ${({ theme }) => theme.bgHover};
        color: ${({ theme }) => theme.colorHover};
    }
`;

