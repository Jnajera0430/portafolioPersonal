import { INavbar } from "../constants/navbar.constant";

export const ItemNavbarMiniComponent = ({item}:INavbar)=>(
    <a className="mr-5 hover:text-gray-900">{item}</a>
)