import { ITech } from "../constants/tecnologies.constant";
import { UseContext } from "../api/hook/UseContext";

export const ListTechComponent = ({ name, Icon, color, darkColor, description }: ITech) => {
    const { darkMode } = UseContext();
    return (
        <li className="lg:w-1/3 mb-1 w-1/2 flex items-center">
            <Icon aria-label={description} title={description} style={{ color: darkMode ? darkColor ?? color : color }} className="w-5 h-5 shrink-0" />
            <p className="ml-2 text-sm hover:text-gray-800">{name}</p>
        </li>
    );
};
