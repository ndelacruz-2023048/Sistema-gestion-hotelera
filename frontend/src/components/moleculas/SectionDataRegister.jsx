import React, { useState } from 'react'
import styled from 'styled-components'
import { Input2 } from '../atomos/Input2'
import { Icon } from "@iconify/react/dist/iconify.js";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router';
import { Controller } from 'react-hook-form'

export const SectionDataRegister = ({register, validateMobilePhone, watch, control, handleCountryCodeChange, errors }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const changeLogin = ()=> {
        navigate('/register')
    }

    return (
        <DataWrapper>
            <DataBox>
                <InputSection>
                    <Input2
                        type={"text"}
                        holder={"Nombres"}
                        {...register('name', 
                            {
                                required: {
                                    value: true,
                                    message: 'El nombre es obligatorio',
                                }
                            }
                        )}
                        error={errors.name}
                    />
                    <Icon icon="material-symbols:id-card" className="IconLabel1"/>
                </InputSection>
                <InputSection>
                    <Input2
                        type={"text"}
                        holder={"Apellidos"}
                        {...register('surname', 
                            {
                                required: {
                                    value: true,
                                    message: 'Los Apellidos es obligatorio',
                                }
                            }
                        )}
                        error={errors.surname}
                    />
                    <Icon icon="material-symbols:id-card" className="IconLabel"/>
                </InputSection>
            </DataBox>
            <DataBox>
                <InputSection>
                    <Input2
                        type={"text"}
                        holder={"Dirección"}
                        {...register('address', 
                            {
                                required: {
                                    value: true,
                                    message: 'La dirección es obligatoria',
                                }
                            }
                        )}
                        error={errors.address}
                    />
                    <Icon icon="mingcute:location-3-fill" className='IconLabel1'/>
                </InputSection>
                <InputSection1>
                    <Controller
                        name="mobilePhone"
                        control={control}
                        rules={{
                            required: "El número de teléfono es obligatorio",
                            validate: validateMobilePhone // Usa la función de validación aquí
                        }}
                        render={({ field }) => (
                            <PhoneInputStyled
                                {...field}
                                ref={undefined}
                                country={watch('countryCode') || 'gt'} // Usa watch para obtener el valor actual
                                onChange={(value, country) => {
                                    field.onChange(value);
                                    handleCountryCodeChange(country); // Llama a tu función para actualizar el estado
                                }}
                                inputClass="phone-input"
                                containerClass="phone-container"
                                dropdownClass="phone-dropdown"
                                buttonClass="phone-dbutton"
                                enableSearch
                            />
                        )}
                    />
                    {errors.mobilePhone && (
                        <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>
                        {errors.mobilePhone.message}
                        </p>
                    )}
                    <Icon icon="line-md:phone-filled" className='IconLabel'/>
                </InputSection1>
            </DataBox>
            <DataBox>
                <InputSection>
                    <Input2
                        type={"text"}
                        holder={"Usuario"}
                        {...register('username', 
                            {
                                required: {
                                    value: true,
                                    message: 'El nombre de usuario es obligatorio'
                                },
                                minLenght: {
                                    value: 4,
                                    message: 'Debe tener al menos 4 caracteres'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'No debe tener más de 10 caracteres'
                                }
                            }
                        )}
                        error={errors.username}
                    />
                    <Icon icon="fa:user" className="IconLabel1"/>
                </InputSection>
                <InputSection>
                    <Input2
                        type={"email"}
                        holder={"Correo Electrónico"}
                        {...register('email', 
                            {
                                required: {
                                    value: true,
                                    message: 'Email obligatorio'
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Correo no valido'
                                }
                            }
                        )}
                        error={errors.email}
                    />
                    <Icon icon="entypo:email" className='IconLabel'/>
                </InputSection>
            </DataBox>
            <DataBox>
                <Input2
                    type={showPassword ? "text" : "password"}
                    holder={"Contraseña"}
                    {...register('password', 
                        {
                            required: {
                                value: true,
                                message: 'La contraseña es obligatoria',
                            },
                            minLenght: {
                                value: 8,
                                message: 'Debe tener al menos 8 caracteres'
                            },
                            validate: {
                                hasUpper: value =>
                                /[A-Z]/.test(value) || "Debe contener al menos una mayúscula",
                                hasLower: value =>
                                /[a-z]/.test(value) || "Debe contener al menos una minúscula",
                                hasNumber: value =>
                                /[0-9]/.test(value) || "Debe contener al menos un número",
                                hasSymbol: value =>
                                /[^a-zA-Z0-9]/.test(value) || "Debe contener al menos un símbolo"
                            }
                        }
                    )}
                    error={errors.password}
                />
                    <span
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
        >
          {showPassword ? '🙈' : '👁️'}
        </span>
                <Icon icon="mdi:password" className="IconLabel2"/>
            </DataBox>
            <DataBoxButton>
                <ButtonRegister  onClick={changeLogin} type="submit">Registrarme</ButtonRegister>
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

const PhoneInputStyled = styled(PhoneInput)`
    border-bottom: .5px solid black;
    .phone-container {
        width: 100%;
    }

    .phone-input {
        width: 100%;
        height: 40px;
        padding: 10px;
        padding-left: 50px; /* Espacio para el selector de país */
        border: none;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s ease;
        background-color: transparent;
        color: #A6A6A6;

        &:focus {
            border-color: #b29464;
        }
    }

    .flag-dropdown {
        border: none;
        border-right: none;
        border-radius: 5px 0 0 5px;
    }

    .selected-flag {
        padding: 0 10px;
        background: rgba(190, 190, 190, 0.219);
        cursor: progress;
        &:hover{
            background: rgba(255, 255, 255, 0.219);
        }
    }

    .flag-dropdown.open .selected-flag {
        background-color: #B29464;
    }

    .phone-dropdown {
        background: rgba(0, 0, 0, 0.418);
        backdrop-filter: blur(3px);
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra para resaltar */
        max-height: 200px;
        overflow-y: auto;
        font-size: 14px;
        cursor: pointer;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.219);
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: #b29464;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #8c6b43;
        }

        .country {
            padding: 5px 10px;
            display: flex;
            align-items: center;
            gap: 5px;

            &:hover {
                background: rgba(0, 0, 0, 0.288); /* Fondo al pasar el mouse */
            }

            .country-name {
                margin-right: 10px;
                color: #B29464; /* Espacio entre el nombre y el código */
            }

            .dial-code  {
                color: #cfa869;
            }
            
        }
        .country.highlight {
            background-color: rgba(0, 0, 0, 0.288); /* Fondo para el país seleccionado */
        }

    }

    .phone-dbutton {
        background: rgba(190, 190, 190, 0.219);
    }
`

const InputSection = styled.div`
    width: 23em;
`

const InputSection1 = styled.div`
    width: 23em;
    display: flex;
    align-items: center;
`

const DataBoxButton = styled.div`
    margin: 15px 0;
    position: relative;
`

const ButtonRegister = styled.button`
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