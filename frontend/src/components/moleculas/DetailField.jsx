import styled from "styled-components";
import { Text } from '../atomos/Text'
import { Label } from "../atomos/Label";

export const DetailField = ({ title, value, isLabel = false }) => {
    return (
        <FieldContainer>
            <Text>{title}</Text>
            {isLabel ? (
                <Label>{value}</Label>
            ) : (
                <Text>{value}</Text>
            )}
        </FieldContainer>
    )
}

const FieldContainer = styled.div`
    margin-bottom: 16px;
`