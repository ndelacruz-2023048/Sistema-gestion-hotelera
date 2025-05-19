import React from 'react';
import { SectionDataRegister } from '../moleculas/SectionDataRegister';
import { useRegister } from '../../hooks/useRegister';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
    const { register: nuevo } = useRegister();
    const { register, handleSubmit, control, reset, formState: { errors }, watch, setValue } = useForm({
        defaultValues: {
            countryCode: 'gt', // Valor inicial del código de país
        },
        mode: 'onChange'
    });

    const countryCode = watch('countryCode'); // Observa el valor del código de país

    const validateMobilePhone = (mobilePhone) => {
        console.log(mobilePhone);
        
        if (!mobilePhone) {
            return 'El número de teléfono es requerido';
        }
        if (!countryCode) {
            return 'Por favor, selecciona un país';
        }
        const formattedNumber = mobilePhone.startsWith('+') ? mobilePhone : `+${mobilePhone}`;
        const parsedNumber = parsePhoneNumberFromString(formattedNumber, countryCode.toUpperCase());
        if (!parsedNumber || !parsedNumber.isValid()) {
            return 'El número de teléfono no es válido para el país seleccionado';
        }
        return true;
    };

    const onSubmit = async (data) => {
        console.log('Datos del formulario:', data);
        await nuevo(data);
        reset(); // Si tienes una función reset definida en useForm, puedes usarla aquí
    };

    const handleCountryCodeChange = (country) => {
        setValue('countryCode', country.countryCode);
    };

    return (
        <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <SectionDataRegister
                register={register}
                control={control}
                errors={errors}
                handleCountryCodeChange={handleCountryCodeChange}
                validateMobilePhone={validateMobilePhone}
                watch={watch}
            />
        </RegisterFormWrapper>
    );
};

const RegisterFormWrapper = styled.form`
    position: absolute;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    transition: .3s;
    left: 50%;
`;