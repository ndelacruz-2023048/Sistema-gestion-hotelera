import { Icon } from "@iconify/react/dist/iconify.js";
import { Input2 } from "../atomos/Input2"
import styled from "styled-components"
import { motion } from 'framer-motion'

export const SectionDataLogin = ({register, disabledButton, errors }) => {
    return (
        <DataWrapper>
            <DataBox
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.2, ease: "easeOut" }}
            >
                <Input2
                    type={"text"}
                    holder={"Usuario o Email"}
                    {...register('userLogin', {
                            required: {
                                value: true,
                                message: 'Usuario o email es obligatorio',
                            }
                        }
                    )}
                    error={errors.userLogin}
                />
                <Icon icon="fa:user" className="IconLabel"/>
            </DataBox>
            <DataBox
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.2, ease: "easeOut" }}
            >
                <Input2
                    type={"password"}
                    holder={"Contraseña"}
                    {...register('password', {
                        required: true,
                        message: 'La contraseña es obligatoria'
                    })}
                />
                <Icon icon="mdi:password" className="IconLabel"/>
            </DataBox>
            <DataFPassword
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.2, ease: "easeOut" }}
            >
                <A href="/*">Contraseña olvidada</A>
                <CheckContent>
                    <input type="checkbox" name="" id="" />
                    <TextCheck>Recordarme</TextCheck>
                </CheckContent>
            </DataFPassword>
            <DataBoxButton
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.3, ease: "easeOut" }}
            >
                <ButtonLogin disabled={disabledButton} type="submit">Iniciar Seción</ButtonLogin>
            </DataBoxButton>
            <Register
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.3, ease: "easeOut" }}
            >
                <A href="/register">Nuevo? Registrate Acá</A>
            </Register>
            
        </DataWrapper>
    )
}

const DataWrapper = styled.div`
    width: 100%;
`

const DataBox = styled(motion.div)`
    position: relative;
    .IconLabel{
        position: absolute;
        top: 50%;
        right: 95px;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
`

const DataBoxButton = styled(motion.div)`
    margin: 15px 0;
    position: relative;
`

const DataFPassword = styled(motion.div)`
    display: flex;
    justify-content: left;
    gap: 5px;
    margin: 8px 80px;
`

const CheckContent = styled.div`
    position: absolute;
    right: 112px;
    transform: translateY(-15%);
    display: flex;
    align-items: center;
`

const TextCheck = styled.span`
    font-size: 11px;
    color: #A6A6A6;
`

const ButtonLogin = styled.button`
    background-color: #B29464;
    border-radius: 80px;
    width: 353px;
    height: 50px;
    color: white;
    font-size: 25px;
    font-weight: 400;
    font-style: normal;
    font-family: "Great Vibes", cursive;
    cursor: pointer;
    transition: .5s ease;
    &:hover{
        background-color: #0F1824;
        transition: .5s ease;
    }
    &:disabled{
        cursor: not-allowed;
    }
    &:not(:disabled){
        cursor: pointer;
    }
`

const Register = styled(motion.div)`
    display: flex;
    justify-content: center;
`

const A = styled.a`    
    color: #B29464;
    text-decoration: none;
    font-size: 11px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`