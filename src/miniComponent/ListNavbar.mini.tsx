import { UseContext } from "../api/hook/UseContext";
import { INavbar } from "../constants/navbar.constant";

export const ItemNavbarMiniComponent = ({ item, src, Icon }: INavbar) => {
    const {darkMode} = UseContext()
    return <div className="group mr-5 flex">
        <a href={src}>
            <Icon className="text-lg mr-1" />
        </a>
        <a className={` ${darkMode ? "hover:text-slate-300":"hover:text-gray-900"} hidden group-hover:block transition-opacity text-sm`} href={src}>{item}</a>
    </div>
}