import { useQuery } from "@tanstack/react-query"
import { DashboardPrincipalTemplate } from "../components/template/DashboardPrincipalTemplate"
import { useHotelStore } from "../store/HotelStore"
import { PulseLoader } from "react-spinners";
export const DashboardPrincipal = () => {

    const {fetchHotels} = useHotelStore()
    const {isLoading} = useQuery({queryKey:["listHotels"],queryFn:fetchHotels})
    if(isLoading){
        return <PulseLoader size={"50px"}/>
    }
    return (
        <DashboardPrincipalTemplate/>
    )
}