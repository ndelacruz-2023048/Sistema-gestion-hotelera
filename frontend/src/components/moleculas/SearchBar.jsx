import { Input } from "../atomos/Input"
import { SearchContainer } from "../../styles/SearchBarStyle"


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