import { PropsWithChildren, createContext, useState, useEffect } from "react"
import { itemTheme } from "../constants/theme.constant";
import { TypeAlert } from "../constants/alertEnum";
export interface IContext {
    darkMode: boolean | null,
    setDarkMode?: (state: boolean) => void,
    handleChangeTheme: () => void
    typeAlert?: TypeAlert,
    handleTypeAlert: (type: TypeAlert) => void,
    isOpen?: boolean | null,
    handleIsOpen: (state:boolean) => void
}
const data = localStorage.getItem(itemTheme);
export const Context = createContext<IContext | null>({
    darkMode: null,
    handleChangeTheme: () => { },
    handleTypeAlert: () => { },
    handleIsOpen: () => { }
});
export const ContextProvider = (props: PropsWithChildren) => {

    const [darkMode, setDarkMode] = useState(data !== null ? JSON.parse(data) : false)
    const [typeAlert, setTypeAlert] = useState<TypeAlert>()
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChangeTheme = () => {
        const data = localStorage.getItem(itemTheme);
        if (data !== null) {
            const theme: boolean = JSON.parse(data);
            setDarkMode(!theme);
            return;
        }
        setDarkMode(!darkMode);
    }

    const handleTypeAlert = (type: TypeAlert) => {
        setTypeAlert(type);
    }

    const handleIsOpen = (state:boolean) => {
        setIsOpen(state);
    }

    useEffect(() => {
        const data = localStorage.getItem(itemTheme);
        if (!data) {
            localStorage.setItem(itemTheme, JSON.stringify(darkMode))
            return;
        }
        localStorage.setItem(itemTheme, JSON.stringify(darkMode))
    }, [darkMode]);
    return <Context.Provider value={{
        darkMode,
        handleChangeTheme,
        typeAlert,
        handleTypeAlert,
        isOpen,
        handleIsOpen
    }}>
        {props.children}
    </Context.Provider>
}
