import { useParams } from "react-router"
import { DetailHotelTemplate } from "../components/template/DetailHotelTemplate"
import { useQuery } from "@tanstack/react-query";

export const DetailHotel = () => {
    const {idhotel} = useParams()
    console.log(idhotel);
    const {data} = useQuery({queryKey:[""]})
    return(
        <DetailHotelTemplate/>
    )
}