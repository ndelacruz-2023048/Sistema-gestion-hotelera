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
import { AuthContextProvider } from "./context/AuthContext"


function App() {
  const { themeStyle } = useThemeStore()

  return (
    <>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <GlobalStyles />
          <MyRoutes/>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
