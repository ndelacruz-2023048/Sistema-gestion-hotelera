import { DConteiner, Result, Text } from "../../../styles/DashboardStyle"
import { SelectMenu } from "../SelectMenu"

export const DashboardSearchFilters = ()=> {
    return(
        <DConteiner>
            <Text>My Rent Dashboard <Result>(X Results)</Result></Text>
            <SelectMenu/>
        </DConteiner>
    )
}