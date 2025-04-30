import { ThemeProvider } from "styled-components"
import { Btn1 } from "./components/moleculas/Btn1"
import { GlobalStyles } from "./styles/GlobalStyles"
import { useThemeStore } from "./store/ThemeStore"
import { Login } from "./pages/Login"
import { DashboardPrincipal } from "./pages/DashboardPrincipal"
import { Layout } from "./hooks/Layout"
import  MyRoutes from "./routers/routes"
import { DetailHotel } from "./pages/DetailHotel"
import { Sidebar } from "./components/organismos/sidebar/Sidebar"
import { Toaster } from "react-hot-toast"
import { AuthContextProvider } from "./context/AuthContext"


function App() {
  const { themeStyle } = useThemeStore()

  return (
    <>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
        <GlobalStyles />
        <MyRoutes/>
        <Toaster position="bottom-right" reverseOrder={false}/>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
