import styled from 'styled-components'
import { useThemeStore } from '../../store/ThemeStore'
export const Btn1 = () => {
    const {setTheme} = useThemeStore()
    return (
        <Button onClick={()=>setTheme()}>Cambiar color</Button>
    )/*te referis para que los botones no aparezcan juntos?. AJA */
}

const Button = styled.button`
    background-color: transparent;
    color: ${({theme})=>theme.color};
    cursor: pointer;
    font-size: 20px;
    border : none;
    padding: 10px 20px;
    &:hover {
        background-color: ${({ theme }) => theme.bgHover};
        color: ${({ theme }) => theme.colorHover};
    }
`