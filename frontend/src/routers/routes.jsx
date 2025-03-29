import { Route, Routes } from "react-router"
import { DashboardPrincipal } from "../pages/DashboardPrincipal"
import { Layout } from "../hooks/Layout"
import { Login } from "../pages/Login"

export const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Layout>
                <DashboardPrincipal/>
            </Layout> }/>
            <Route path="/login" element={<Layout>
                <Login/>
            </Layout> }/>
        </Routes>
    )
}