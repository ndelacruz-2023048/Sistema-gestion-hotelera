//import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import { useRef, useState, useEffect } from "react"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { es } from 'date-fns/locale';

import { Input2 } from "../../components/atomos/Input2"
import { InputExtendible } from "../../components/atomos/InputExtendible";

export const DataSection = ({users, designatedUser, setDesignatedUser})=> {
    const [value, setValue] = useState(new Date());
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
                />
            </Up>
            <Text>
                <SelectContainer>
                    <select
                            id="userSelector"
                            value={designatedUser}
                            onChange={(e) => setDesignatedUser(e.target.value)}
                        >
                            <option value="" >Usuario</option>
                            {users.map(user => (
                                <option key={user._id} value={user._id}>
                                    {user.name} {user.surname}
                                </option>
                            ))}
                    </select>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                            <DateTimePicker
                                label="Selecciona fecha y hora de inicio"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                            <DateTimePicker
                                label="Selecciona fecha y hora de finalización"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <InputExtendible
                            multiline
                            placeholder={'Descripción breve'}
                            rows={3}
                            
                        />
                    </div>
                    <Input2
                        holder={'Lugar'}
                    />
                    <Input2
                        holder={'Capacidad'}
                        type={'number'}
                    />
                    <Input2
                        holder={'Precio'}
                        type={'text'}
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