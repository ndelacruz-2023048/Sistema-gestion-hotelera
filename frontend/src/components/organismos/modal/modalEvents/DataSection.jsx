import styled from "styled-components"
import { useRef, useEffect } from "react"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { es } from 'date-fns/locale';
import { Input2 } from "../../components/atomos/Input2"
import { InputExtendible } from "../../components/atomos/InputExtendible";
import { SelectUser } from "../../components/atomos/SelectUser";
import { Controller } from 'react-hook-form'


export const DataSection = ({register, control, errors })=> {
    const dateRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dateRef.current && !dateRef.current.contains(event.target)) {
                console.log('algo');
                
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return(
        <Container>
            <Up>
                <Input2
                    holder={'Titulo'}
                    type={'text'}
                    {...register('name', { 
                        required: {
                            value: true,
                            message: 'El titulo es requerido'
                        }
                    })}
                    error={errors.title}
                />
            </Up>
            <Text>
                <SelectContainer>
                    <div className="Dates">
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                            <Controller
                                name="startDate"
                                control={control}
                                rules={{ required: "La fecha de inicio es obligatoria" }}
                                render={({ field }) => (
                                    <DateTimePicker
                                    label="Selecciona fecha y hora de inicio"
                                    value={field.value}
                                    onChange={field.onChange}
                                    renderInput={(params) => (
                                        <TextField
                                        {...params}
                                        fullWidth
                                        error={!!errors.startDate}
                                        helperText={errors.startDate?.message}
                                        />
                                    )}
                                    />
                                )}
                            />

                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                            <Controller
                                name="endDate"
                                control={control}
                                rules={{ required: "La fecha de finzalizacion es obligatoria" }}
                                render={({ field }) => (
                                    <DateTimePicker
                                    label="Selecciona fecha y hora de finzalizacion"
                                    value={field.value}
                                    onChange={field.onChange}
                                    renderInput={(params) => (
                                        <TextField
                                        {...params}
                                        fullWidth
                                        error={!!errors.endDate}
                                        helperText={errors.endDate?.message}
                                        />
                                    )}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="SelectContent">    
                        <SelectUser
                            control={control}
                            name={'designated'}
                            rules={{required: true}}
                            error={errors.designated}
                        />
                    </div>
                    <div className="InputE">
                        <InputExtendible
                            multiline
                            placeholder={'Descripción breve'}
                            rows={3}
                            {...register('description', {required: {
                                value: true,
                                message: 'La descripcion es obligatoria'
                            }})}
                            error={errors.text}
                        />
                    </div>
                    <Input2
                        holder={'Lugar'}
                        {...register('location', { required: true})}
                        error={errors.title}
                    />
                    <Input2
                        holder={'Capacidad'}
                        type={'number'}
                        {...register('capacity', { required: true})}
                        error={errors.title}
                    />
                    <Input2
                        holder={'Precio'}
                        type={'text'}
                        {...register('price', { required: true})}
                        error={errors.title}
                    />
                </SelectContainer>
            </Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 20px;
`

const Up = styled.div`
    display: flex;
    width: 100%;
    margin: 3%;
    gap: 5px;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
`

const Time = styled.div`
    display: flex;
    align-items: center;
    height: 20%;
    width: 100%;
`

const SelectContainer = styled.div`
    margin: 0 30px;
    overflow-y: scroll;
    scrollbar-width: none;
    .Dates {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .InputE {
        width: 59em;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .SelectContent {
        margin-bottom: 20px;
        margin-top: 20px;
    }
`