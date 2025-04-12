import {create} from 'zustand'
import { Dark, Light } from '../styles/Theme'

export const useThemeStore = create((set,get)=>({
    theme:'dark',
    themeStyle:Dark,
    setTheme:()=>{
        const {theme} = get()
        set({theme:theme==='light'?'dark':'light'})
        set({themeStyle:theme==='light'?Dark:Light})
    }
}))