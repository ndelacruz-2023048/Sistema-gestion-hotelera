import { styled } from 'styled-components'
import { useThemeStore } from '../../store/ThemeStore'
import { Icon } from "@iconify/react/dist/iconify.js";
import { Light } from '../../styles/Theme';
import { useEffect, useState } from 'react';

export const Toggle = () => {
    const {theme, setTheme} = useThemeStore()
    const [direction, setDirection] = useState('right')
    useEffect(() => {
        // Determina la dirección del movimiento según el tema
        setDirection(theme === 'light' ? 'left' : 'right');
    }, [theme]);
    return (
        <ButtonContainer>
            <ButtonIndicator onClick={()=>setTheme()}>
                <ButtonIcon>
                    <Icon icon={theme === 'light' ? "stash:sun-solid" : "ion:moon-sharp"} className={`iconStyle ${direction}`}/>
                </ButtonIcon>
            </ButtonIndicator>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    background-color: ${({ theme }) => theme.toggleContainer};
    width: 90px;
    height: 50px;
    border-radius: 50px;
    padding: 0 0.5em;
    box-shadow: inset 0 9px 70px rgba(0,0,0, .1),
                inset 0 9px 9px rgba(0,0,0, .1),
                inset 0 -5px 5px rgba(0,0,0, .1);
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    `

const ButtonIndicator = styled.div`
    background-color: ${({ theme }) => theme.toggleIndicator};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 8px 40px rgba(0,0,0, .2);
    transition: transform .3s ease;
    transform: ${(props) =>
        props.theme === Light ? 'translateX(0)' : 'translateX(50px)'};
`

const ButtonIcon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconStyle{
        color: ${({ theme }) => theme.toggleIcon};
        font-size: 25px;
    }
    .right {
        animation: rollRight 0.3s ease;
    }

  /* Rotación hacia la izquierda (cuando se mueve a la izquierda) */
    .left {
        animation: rollLeft 0.3s ease;
    }

    @keyframes rollRight {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg); /* Sentido horario */
        }
    }

    @keyframes rollLeft {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(-360deg); /* Sentido antihorario */
        }
    }
`