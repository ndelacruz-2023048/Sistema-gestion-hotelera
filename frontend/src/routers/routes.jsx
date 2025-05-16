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
import { HiringStage } from "../components/organismos/Forms/HiringStage"
import { ApplicationForm } from "../components/organismos/Forms/ApplicationForm"
import { DetailsRoomHotel } from "../pages/DetailsRoomHotel"
import { HiringStageHotel } from "../pages/HiringStageHotel"

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
            path: 'new-hotel',
            element: <NewHotelPage />
          },
          {
            path: 'detailsRoom',
            element: <DetailsRoomHotel />
          },
          {
            path: 'hiringStage',
            element: <HiringStageHotel />
          },
          {
            path: 'applicationForm',
            element: <ApplicationForm />
          },
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
