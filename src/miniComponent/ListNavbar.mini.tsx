import { INavbar } from "../constants/navbar.constant";

export const ItemNavbarMiniComponent = ({item ,src}:INavbar)=>(
    <a className="mr-5 hover:text-gray-900" href={src}>{item}</a>
)