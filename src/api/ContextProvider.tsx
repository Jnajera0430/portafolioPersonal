import { PropsWithChildren, createContext, useState, useEffect } from "react"
import { itemTheme } from "../constants/theme.constant";
export interface IContext {
    darkMode: boolean | null,
    setDarkMode?: (state: boolean) => void,
    handleChangeTheme: () => void
}
const data =  localStorage.getItem(itemTheme);
export const Context = createContext<IContext | null>({
    darkMode: null,
    handleChangeTheme:()=>{}
});
export const ContextProvider = (props: PropsWithChildren) => {
    const [darkMode, setDarkMode] = useState(data !== null ? JSON.parse(data): false)
    const handleChangeTheme = () => {
        const data = localStorage.getItem(itemTheme);
        if (data !== null){
            const theme:boolean = JSON.parse(data);
            setDarkMode(!theme);
        }
    }

    useEffect(() => {
         localStorage.setItem(itemTheme, JSON.stringify(darkMode))
    }, [darkMode])
    return <Context.Provider value={{ darkMode, handleChangeTheme }}>
        {props.children}
    </Context.Provider>
}
