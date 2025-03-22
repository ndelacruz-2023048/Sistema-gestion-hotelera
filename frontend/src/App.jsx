import { ThemeProvider } from "styled-components"
import { Btn1 } from "./components/moleculas/Btn1"
import { GlobalStyles } from "./styles/GlobalStyles"
import { useThemeStore } from "./store/ThemeStore"
import { Login } from "./pages/Login"


function App() {
  const { themeStyle } = useThemeStore()

  return (
    <>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyles />
        <Login/>
      </ThemeProvider>
    </>
  )
}

export default App
