import { Theme } from "../constants/theme.constante"

export const ThemeIconMiniComponent = ({theme, themeIcon}:Theme) => {
    return <div className='flex flex-row w-fit justify-center items-center'>
        <div className='w-12 '>
            <img src={themeIcon} alt="img del tema de la pagina" className='w-full h-full' />
        </div>
        <span>{theme}</span>
    </div>
}