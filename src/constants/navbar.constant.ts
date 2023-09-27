import { IconType } from "react-icons"
import { FaHome } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { IoCodeWorkingSharp } from 'react-icons/io5'
import { BiSolidMessageDetail } from 'react-icons/bi'
export interface INavbar {
    item: string,
    src: string,
    Icon: IconType
}
export const navbarConstant: INavbar[] = [
    {
        item: 'Inicio',
        src: '#welcome',
        Icon: FaHome
    },
    {
        item: 'Perfil',
        src: '#about',
        Icon: ImProfile
    },
    {
        item: 'Experiencia',
        src: '#experence',
        Icon: IoCodeWorkingSharp
    },
    {
        item: 'Enviar mensaje',
        src: '#contact',
        Icon: BiSolidMessageDetail
    },
]