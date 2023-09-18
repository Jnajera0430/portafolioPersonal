export interface INavbar {
    item: string,
    src:string
}
export const navbarConstant: INavbar[] = [
    {
        item: 'Inicio',
        src:'#welcome'
    },
    {
        item: 'Perfil',
        src: '#about'
    },
    {
        item: 'Experiencia',
        src: '#experence'
    },
    {
        item: 'Contacto',
        src: '#contact'
    },
]