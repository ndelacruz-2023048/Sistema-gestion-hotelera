//import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import { useRef, useState, useEffect } from "react"

export const Description = ()=> {
    const [showDate, setShowDate] = useState(false)
    const [activeComponent, setActiveComponent] = useState("description")

    const dateRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dateRef.current && !dateRef.current.contains(event.target)) {
                setShowDate(false)
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
                <input type="number" placeholder="Invitados" className="count"/>
                

                <div ref={dateRef} style={{ position: "relative" }}>
                    <Date onClick={() => setShowDate(!showDate)}>Horario</Date>
                    {showDate && (
                        <div style={{ position: "absolute", zIndex: 1 }}>
                            <input type="date" style={Inputs} />
                            <Time>
                                <input type="time" style={Inputs} />
                                <span>--</span>
                                <input type="time" style={Inputs} />
                            </Time>
                        </div>
                    )}
                </div>
            </Up>
            <Text>
                <Title type="text" placeholder="Titulo" />
                <Address type="text" placeholder="Direccion" />
                <Desc placeholder="Descripción"></Desc>
                
            </Text>
            
            <Time>
                    <SelectContainer>
                        <select
                            id="componentSelector"
                            value={activeComponent}
                            onChange={(e) => setActiveComponent(e.target.value)}>
                            <option value="null" >User</option>
                            <option value="user1">Jesus</option>
                            <option value="user2">José</option>
                            <option value="user3">Maria</option>
                        </select>
                        <select
                            id="componentSelector"
                            value={activeComponent}
                            onChange={(e) => setActiveComponent(e.target.value)}>
                            <option value="null" >Pago</option>
                            <option value="dollar">USD</option>
                            <option value="euro">EUR</option>
                            <option value="quetzal">GTM</option>
                        </select>
                    </SelectContainer>
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

const Date = styled.button`
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