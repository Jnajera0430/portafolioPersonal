import { ITech } from "../constants/tecnologies.constant";

export const ListTechComponent = ({ name, src, description}: ITech) => (
    <li className="lg:w-1/3 mb-1 w-1/2 flex">
        <div>
            <img src={src} alt={description} />
        </div>
        <p className="text-gray-600 hover:text-gray-800">{name}</p>
    </li>
);