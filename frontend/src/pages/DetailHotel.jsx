import { useParams } from "react-router"
import { DetailHotelTemplate } from "../components/template/DetailHotelTemplate"
import { useQuery } from "@tanstack/react-query";
import { useRoomStore } from "../store/RoomsStore";
import { SyncLoader } from "react-spinners";

export const DetailHotel = () => {
    const {idhotel} = useParams()
    console.log(idhotel);
    const {fetchRoomsByHotel} = useRoomStore()
    const {isLoading} = useQuery({queryKey:['roomsByHotel',idhotel],queryFn:()=>fetchRoomsByHotel(idhotel), enabled: !!idhotel})
    if(isLoading){
        return <SyncLoader/>
    }
    return(
        <DetailHotelTemplate/>
    )
}