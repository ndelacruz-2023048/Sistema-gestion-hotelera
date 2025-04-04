import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import { DashboardPrincipal } from "../pages/DashboardPrincipal"
import { Layout } from "../hooks/Layout"
import { Login } from "../pages/Login"
import { DashboardHelp } from "../components/organismos/DashboardPrincipal/DashboardHelp"
import { DashboardFavorites } from "../components/organismos/DashboardPrincipal/DashboardFavorites"
import { DetailHotel } from "../pages/DetailHotel"
import { EventPlanning } from "../pages/EventPlanning"
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
                <Layout>
                    <DashboardPrincipal/>
                </Layout> 
        ),
        errorElement: <div>Hi Pinguino, this page is in construction</div>
    },
    {
        path:'/DetailHotel',
        element:(
                <Layout>
                    <DetailHotel/>
                </Layout> 
        )
    },
    {
        path:'/favorites',
        element:(
                <Layout>
                    <DashboardFavorites/>
                </Layout> 
        )
    },
    {
        path:'/events',
        element:(
                <Layout>
                    <EventPlanning/>
                </Layout> 
        )
    }
])

const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes
