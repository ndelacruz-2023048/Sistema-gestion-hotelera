import React from 'react'
import { NewRoomTemplate } from '../components/template/NewRoomTemplate'
import { useQuery } from '@tanstack/react-query'
import { useHotelStore } from '../store/HotelStore'

export const NewRoomPage = () => {
  const {fetchHotels} = useHotelStore()
  const {isLoading} = useQuery({queryKey:["listHotels"],queryFn:fetchHotels})
  return (
    <NewRoomTemplate/>
  )
}
