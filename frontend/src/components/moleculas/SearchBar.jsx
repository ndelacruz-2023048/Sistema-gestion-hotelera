import { Input } from "../atomos/Input"
import { styled } from 'styled-components'

export const SearchBar =()=> {
    return(
        <SearchContainer>
            <Input 
                placeholder="Search in Homes, Apartments, Villas, ..."
                icon
            />
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    max-width: 36rem;
    width: 100%;
    
`