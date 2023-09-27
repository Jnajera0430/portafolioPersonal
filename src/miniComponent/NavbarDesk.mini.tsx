import { UseContext } from "../api/hook/UseContext";
import { INavbar } from "../constants/navbar.constant";

export const ItemNavbarMiniComponentDesk = ({ item, src, Icon }: INavbar) => {
    const { darkMode } = UseContext()
    return <div className="mr-5 flex">
        <Icon className="text-2xl mr-2" />
        <a className={`mr-5 ${darkMode ? "hover:text-slate-300" : "hover:text-gray-900"}`} href={src}>
            {item}
        </a>
    </div>
}