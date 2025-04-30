import React from 'react'
import styled from 'styled-components'
import { Input2 } from '../atomos/Input2'
import { Icon } from "@iconify/react/dist/iconify.js";

export const SectionDataRegister = () => {
    return (
        <DataWrapper>
            <DataBox>
                <InputSection>
                    <Input2
                        type={"text"}
                        name={"name"}//Arreglar osea cambiar por el valor "value"
                        id={"name"}
                        holder={"Nombres"}
                    />
                    <Icon icon="material-symbols:id-card" className="IconLabel1"/>
                </InputSection>
                <InputSection>
                    <Input2
                        type={"text"}
                        name={"surname"}
                        id={"surname"}
                        holder={"Apellidos"}
                    />
                    <Icon icon="material-symbols:id-card" className="IconLabel"/>
                </InputSection>
            </DataBox>
            <DataBox>
                <InputSection>
                    <Input2
                        type={"text"}
                        name={"address"}
                        id={"address"}
                        holder={"Dirección"}
                    />
                    <Icon icon="mingcute:location-3-fill" className='IconLabel1'/>
                </InputSection>
                <InputSection>
                    <Input2
                        type={"text"}
                        name={"phone"}
                        id={"phone"}
                        holder={"No. Telefono"}
                    />
                    <Icon icon="line-md:phone-filled" className='IconLabel'/>
                </InputSection>
            </DataBox>
            <DataBox>
                <InputSection>
                    <Input2
                        type={"text"}
                        name={"username"}
                        id={"username"}
                        holder={"Usuario"}
                    />
                    <Icon icon="fa:user" className="IconLabel1"/>
                </InputSection>
                <InputSection>
                    <Input2
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        holder={"Correo Electrónico"}
                    />
                    <Icon icon="entypo:email" className='IconLabel'/>
                </InputSection>
            </DataBox>
            <DataBox>
                <Input2
                    type={"password"}
                    name={"password"}
                    id={"passwrod"}
                    holder={"Contraseña"}
                />
                <Icon icon="mdi:password" className="IconLabel2"/>
            </DataBox>
            <DataBoxButton>
                <ButtonLogin >Registrarme</ButtonLogin>
            </DataBoxButton>
            <Login>
                <A href="/login">Ya tienes cuenta?</A>
            </Login>
        </DataWrapper>
    )
}

const DataWrapper = styled.div`
    width: 100%;
`

const DataBox = styled.div`
    display: flex;
    position: relative;
    gap: 15px;
    margin: 0 10px;
    justify-content: center;
    .IconLabel{
        position: absolute;
        top: 50%;
        right: 95px;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
    .IconLabel1{
        position: absolute;
        top: 50%;
        left: 18em;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
    .IconLabel2{
        position: absolute;
        top: 50%;
        left: 28em;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
`
const InputSection = styled.div`
`

const DataBoxButton = styled.div`
    margin: 15px 0;
    position: relative;
`

const DataFPassword = styled.div`
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
`

const Login = styled.div`
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