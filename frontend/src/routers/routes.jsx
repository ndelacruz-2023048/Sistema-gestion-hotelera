import { Route, Routes } from "react-router"
import { DashboardPrincipal } from "../pages/DashboardPrincipal"
import { Layout } from "../hooks/Layout"
import { Login } from "../pages/Login"
import { DashboardHelp } from "../components/organismos/DashboardPrincipal/DashboardHelp"
import { DashboardFavorites } from "../components/organismos/DashboardPrincipal/DashboardFavorites"
import { DetailHotel } from "../pages/DetailHotel"
/*React Router */
export const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Layout>
                <DashboardPrincipal/>
            </Layout> }/>
            <Route path="/DetailHotel" element={<Layout>
                <DetailHotel/>
            </Layout> }/>
            <Route path="/favorites" element={<Layout>
                <DashboardFavorites/>
            </Layout> }/>
            <Route path="/help" element={<Layout>
                <DashboardHelp/>
            </Layout> }/>
        </Routes>
    )
}

