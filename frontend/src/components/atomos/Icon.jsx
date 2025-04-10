import { styled } from 'styled-components'

export const Icons = ({ icon })=> {
    return(
        <Icon>
            {icon}
        </Icon>
    )
}

const Icon = styled.span`
    font-size: 18px;
    color: #5c7bfc;
`