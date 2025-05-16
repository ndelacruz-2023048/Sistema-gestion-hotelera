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
                    {...register('name', { required: true})}
                    error={errors.title}
                />
            </Up>
            <Text>
                <SelectContainer>
                    <SelectUser
                        control={control}
                        name={'designated'}
                        rules={{required: true}}
                        error={errors.designated}
                    />
                    <div>
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
                    <div>
                        <InputExtendible
                            multiline
                            placeholder={'Descripción breve'}
                            rows={3}
                            {...register('description', {required: true})}
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
            <Time>
            </Time>
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

    .count{
        height: 20px;
        width: 10%;
        padding: 3px;
        color: rgb(165, 165, 165);
        border-radius: 10px;
        margin-right: 5px;
        font-size: 15px;
        background-color:rgba(255, 255, 255, 0);
        border: 1px solid rgb(165, 165, 165);
    }

`

const Inputs = {
    height: "20px",
    padding: "3px",
    color: "rgb(165, 165, 165)",
    borderRadius: "10px",
    marginRight: "5px",
    fontSize: "15px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgb(165, 165, 165)",
}

const Dates = styled.button`
    height: 30px;
    padding: 5px;
    color: rgb(165, 165, 165);
    border-Radius: 10px;
    margin-Right: 5px;
    font-Size: 15px;
    background-Color: rgba(255, 255, 255, 0);
    border: 1px solid rgb(165, 165, 165);
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

const Title = styled.input`
    height: 20%;
    background-color:rgba(255, 255, 255, 0);
    color: white;
    padding-left: 20px;
    font-size: 20px;
    font-weight: bold;
    border: none;
`
const Address = styled.input`
    height: 20%;
    background-color:rgba(255, 255, 255, 0);
    color: white;
    padding-left: 20px;
    font-size: 18px;
    border: none;
`

const Desc = styled.textarea`
    height: 80%;
    background-color:rgba(255, 255, 255, 0);
    color: white;
    padding-left: 20px;
    font-size: 20px;
    resize: none;
    border: none;
`

const SelectContainer = styled.div`
    margin-left: 3%;
    overflow-y: scroll;
    select{
        height: 30px;
        padding: 5px;
        color: rgb(165, 165, 165);
        border-Radius: 10px;
        margin-Right: 5px;
        font-Size: 15px;
        background-Color: rgba(255, 255, 255, 0);
        border: 1px solid rgb(165, 165, 165);
    }
`