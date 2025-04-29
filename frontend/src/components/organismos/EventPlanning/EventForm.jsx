import styled from "styled-components"
import {UserIcons} from "../../moleculas/UserIcons.jsx";
import { CoinsIcons } from "../../moleculas/CoinsIcons"

export const EventForm = () => {
    
    return(
        <Container>           
            <Title>Details Of The Event</Title>
            
            <FieldGroup2>
                <UserIcons/>
            </FieldGroup2> 
            

            <FieldGroupFull>
                <Paragraph>Address</Paragraph>
                <Input type="text" placeholder="Add address" />
            </FieldGroupFull>     
            
            <Container2>
                <FieldGroup>
                    <Paragraph>Number</Paragraph>
                    <Input2 type="text" placeholder="Add invoice number" />
                </FieldGroup>

                <FieldGroup>
                    <Paragraph>Currency</Paragraph>
                    <CoinsIcons />
                </FieldGroup> 

            </Container2>

            <Container2>
                    <FieldGroup>
                        <Paragraph>Issue Date</Paragraph>
                        <DateInput type="date" defaultValue="N/A" />
                    </FieldGroup>
                    

                    <FieldGroup>
                        <Paragraph>Due Date</Paragraph>
                        <DateInput type="date" defaultValue="N/A" />
                    </FieldGroup>
            </Container2>

            <FieldGroupFull>
                <Paragraph>Description</Paragraph>
                <Input3 type="text"  />
            </FieldGroupFull>  
        </Container>
    )
}


const Container = styled.div`
    margin-top: -50px
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color : ${({theme})=>theme.color}

`;

const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color : ${({theme})=>theme.color}
`
const Input = styled.input`
    width: 50%;
    height: 30px;
    margin-left: 25%;
    padding: 10px;
    border-Radius: 10px;
    border: none;
    font-size: 20px;
`
const Container2 = styled.div`
    display: flex;
    gap: 5%;
    margin-left: 25%;
`
const Input2 = styled.input`
    width: 100%;
    height: 30px;
    padding: 10px;
    border-Radius: 10px;
    border: none;
    font-size: 20px;
`

const Input3 = styled.input`
    width: 50%;
    height: 100px;
    margin-left: 25%;
    padding: 10px;
    border-Radius: 10px;
    border: none;
    font-size: 20px;
`

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%
`

const FieldGroup2 = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 10px;
    border-Radius: 10px;
    border: none;
    font-size: 20px;

`

const FieldGroupFull = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

const DateInput = styled.input`
    width: 100%;
    height: 30px;
    padding: 10px;
    border-Radius: 10px;
    border: none;
    font-size: 20px;
`;
