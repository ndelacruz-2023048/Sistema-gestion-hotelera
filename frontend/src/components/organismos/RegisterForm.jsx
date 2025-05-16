import { SectionDataRegister } from '../moleculas/SectionDataRegister';
import { useRegister } from '../../hooks/useRegister';
import { isValidPhoneNumber, parsePhoneNumberFromString } from 'libphonenumber-js';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
    const { register: nuevo } = useRegister();
    const { register, handleSubmit, control, formState: { errors, isValid }, reset } = useForm();

    const validateMobilePhone = (phoneNumber, countryCode) => {
        if (!phoneNumber) {
            return 'El número de teléfono es requerido';
        }
        if (!countryCode) {
            return 'Por favor, selecciona un país';
        }
        const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode.toUpperCase());
        if (!parsedNumber || !isValidPhoneNumber(phoneNumber, countryCode)) {
            return 'El número de teléfono no es válido para el país seleccionado';
        }
        return true;
    };

    const onSubmit = async (data) => {
        console.log('Datos del formulario:', data);
        await nuevo(data);
        reset();
    };

    return (
        <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <SectionDataRegister
            register={register}
                control={control}
                errors={errors}
                disabledButton={!isValid}
                handleCountryCodeChange={validateMobilePhone}
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