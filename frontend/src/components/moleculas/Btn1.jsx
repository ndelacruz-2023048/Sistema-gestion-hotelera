import styled from 'styled-components'
import { useThemeStore } from '../../store/ThemeStore'
export const Btn1 = () => {
    const {setTheme} = useThemeStore()
    return (
        <Button onClick={()=>setTheme()}>Button</Button>
    )
}

const Button = styled.button`
    background-color: ${({theme})=>theme.bg};
    color: ${({theme})=>theme.color};
    border: 1px solid ${({theme})=>theme.color};
`