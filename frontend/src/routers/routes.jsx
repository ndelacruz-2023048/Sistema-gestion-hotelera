import { Route, Routes } from "react-router"
import { DashboardPrincipal } from "../pages/DashboardPrincipal"
import { Layout } from "../hooks/Layout"
import { Login } from "../pages/Login"
import { DashboardHelp } from "../components/organismos/DashboardPrincipal/DashboardHelp"
import { DashboardFavorites } from "../components/organismos/DashboardPrincipal/DashboardFavorites"

export const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Layout>
                <DashboardPrincipal/>
            </Layout> }/>
            <Route path="/login" element={<Layout>
                <Login/>
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