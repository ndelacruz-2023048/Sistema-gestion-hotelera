import { useParams } from "react-router"
import { DetailHotelTemplate } from "../components/template/DetailHotelTemplate"

export const DetailHotel = () => {
    const {idhotel} = useParams()
    
    return(
        <DetailHotelTemplate/>
    )
}