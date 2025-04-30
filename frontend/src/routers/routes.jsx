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
/*React Router */
// export const MyRoutes = ()=>{
//     return(
//         <Routes>
//             <Route path="/" element={<Layout>
//                 <DashboardPrincipal/>
//             </Layout> }/>
//             <Route path="/DetailHotel" element={<Layout>
//                 <DetailHotel/>
//             </Layout> }/>
//             <Route path="/favorites" element={<Layout>
//                 <DashboardFavorites/>
//             </Layout> }/>
//             <Route path="/help" element={<Layout>
//                 <DashboardHelp/>
//             </Layout> }/>
//         </Routes>
//     )
// }

const router = createBrowserRouter([
    {
        path:'/',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <DashboardPrincipal/>
                </Layout> 
            </ProtectedRoutes>
        ),
        // errorElement: <PageNotFound/>
    },
    {
        path:'/DetailHotel',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <DetailHotel/>
                </Layout> 
            </ProtectedRoutes>
        )
    },
    {
        path:'/favorites',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <DashboardFavorites/>
                </Layout> 
            </ProtectedRoutes>
        )
    },
    {
        path:'/events',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <EventPlanning/>
                </Layout> 
            </ProtectedRoutes>
        )
    },
    {
        path: '/login',
        element:(
            <ProtectedRoutes accesBy="non-authenticated">
                <Login/>
            </ProtectedRoutes>
        ),
        // errorElement: <PageNotFound/>
    },
    {
        path: '/register',
        element: (
            <ProtectedRoutes accesBy="non-authenticated">
                <Register/>
            </ProtectedRoutes>
        )
    }
])

const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes
