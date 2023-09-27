import { UseContext } from "../api/hook/UseContext"
import { Theme } from "../constants/theme.constante"

export const ThemeIconMiniComponent = ({theme, ThemeIcon}:Theme) => {
    const {darkMode} = UseContext()
    return <div className='flex flex-row w-fit justify-center items-center group'>
        <div className={`text-2xl ${darkMode ? "text-slate-200":"text-slate-700"} `}>
            <ThemeIcon/>
        </div>
        <span className="hidden group-hover:block">{theme}</span>
    </div>
}