import styled from "styled-components"
import { Icon } from "@iconify/react/dist/iconify.js";


export const EventTable = ({events})=> {
    return(
        <TableContainer>
            <Head>
                <Row>
                    <THead>Evento</THead>
                    <THead>Acción</THead>
                </Row>
            </Head>
            <Body>
                {events.map((event, index)=>(
                    <Row key={index}>
                        <TBody>{event.name}</TBody>
                        <TBody>
                            <ButtonTable>
                                <Icon icon="fluent-color:calendar-edit-16" className="IconAccion"/>
                            </ButtonTable>
                            <ButtonTable>
                                <Icon icon="tabler:calendar-x" className="IconAccion"/>
                            </ButtonTable>
                        </TBody>
                    </Row>
                ))}
            </Body>
        </TableContainer>
    )
}

const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
`

const Head = styled.thead`

`

const THead = styled.th`
    background-color: ${({theme})=>theme.colorBackground};
    color: ${({theme})=>theme.color};
    padding: 12px 15px;
    border-bottom: 2px solid #a88f68;
`

const Body = styled.tbody`
    background-color: #fff;
`

const TBody = styled.td`
    color: ${({theme})=>theme.color};
    padding: 12px 15px;
    border-bottom: 2px solid #a88f68;
    
`

const Row = styled.tr`
    &:nth-child(odd) {
        background-color: ${({theme})=>theme.row1}; // Azul claro para celdas impares
    }
    &:nth-child(even) {
        background-color: ${({theme})=>theme.row2}; // Azul oscuro para celdas pares
    }
    &:hover{
        background-color: #a88f68;
    }
`

const ButtonTable = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    .IconAccion{
        width: 30px;
        height: 30px;
        color: ${({theme})=>theme.color}
    }
`