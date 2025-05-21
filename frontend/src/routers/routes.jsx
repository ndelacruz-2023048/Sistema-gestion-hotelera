import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import { DashboardPrincipal } from "../pages/DashboardPrincipal"
import { Layout } from "../hooks/Layout"
import { Login } from "../pages/Login"
import { DashboardHelp } from "../components/organismos/DashboardPrincipal/DashboardHelp"
import { DashboardFavorites } from "../components/organismos/DashboardPrincipal/DashboardFavorites"
import { DetailHotel } from "../pages/DetailHotel"
import { EventPlanning } from "../pages/EventPlanning"
import PageNotFound from "../components/template/404"
import { Register } from "../pages/Register"
import { ProtectedRoutes } from "../hooks/ProtectedRoutes"
import { NewHotelPage } from "../pages/NewHotelPage"
import { DetailsRoom} from "../components/organismos/Forms/DetailsRoom"
import { ApplicationForm } from "../components/organismos/Forms/ApplicationForm"
import { DetailsRoomHotel } from "../pages/DetailsRoomHotel"
import { DetailUser } from "../components/template/DetailUser"
import { SettingsPage } from "../pages/SettingsPage"
import { HotelSettingsPage } from "../pages/HotelSettingsPage"
import { NewRoomPage } from "../pages/NewRoomPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: (
          <ProtectedRoutes accesBy="authenticated">
            <Layout />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: '', // ruta raíz "/"
            element: <DashboardPrincipal />
          },
          {
            path: 'hotel/:idhotel',
            element: <DetailHotel />
          },
          {
            path: 'favorites',
            element: <DashboardFavorites />
          },
          {
            path: 'events',
            element: <EventPlanning />
          },
          {
            path: 'hotel/new',
            element: <NewHotelPage />
          },
          {
            path: 'detailsRoom',
            element: <DetailsRoomHotel />
          },
          {
            path: 'room/new',
            element: <NewRoomPage />
          },
          {
            path: 'user',
            element: <DetailUser />
          },
          {
            path:'settings',
            element:<SettingsPage/>,
          },
          {
            path:"settings/hotel",
            element:<HotelSettingsPage/>
          }
        ]
      },
      {
        path: '/login',
        element: (
          <ProtectedRoutes accesBy="non-authenticated">
            <Login />
          </ProtectedRoutes>
        )
      },
      {
        path: '/register',
        element: (
          <ProtectedRoutes accesBy="non-authenticated">
            <Register />
          </ProtectedRoutes>
        )
      },
])

const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes
