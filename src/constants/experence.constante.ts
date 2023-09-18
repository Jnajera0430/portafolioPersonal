export interface Experence {
    title: string,
    description: string,
    src?: string | null,
    technologies: string[],
    link?: string,
    credit?: string
}

export enum linkEnum {
    APP_PRIVATE = 'Aplicación privada'
}
export const listExperence: Experence[] = [
    {
        title: 'Proceso de integracion autogestionado (PIA)',
        description: 'Aplicacion para administrar las entradas y salidas del personal de la entidad.',
        src: 'https://giphy.com/embed/UwhehtngkVHksVunHS',
        technologies: ['Nestjs', 'React', 'Redis', 'typeorm'],
        link: `${linkEnum.APP_PRIVATE}.`,
        credit: 'via GIPHY'
    },
    {
        title: 'appRecords',
        description: 'Software administrador de cartera bajo licencia.',
        src: 'https://giphy.com/embed/xUPGcMfsBwor6Jj6I8',
        technologies: ['Node', 'HandleBars', 'Pool query'],
        link: `${linkEnum.APP_PRIVATE}.`,
        credit: 'via GIPHY'
    },
    {
        title: 'Jumio - Empresa',
        description: 'Experiencia laboral de 6 meses.',
        src: 'https://giphy.com/embed/3ITYOFkCP18TqyAKxW',
        technologies: ['Node', 'php',],
        link: 'https://www.jumio.com/es/',
        credit: 'via GIPHY'
    },
    {
        title: 'S&D Suministros y Dotaciones Colombia',
        description: 'Brindar soluciones eficientes a los software de empresa y RPA para automatizar procesos.',
        src: 'https://giphy.com/embed/3ITYOFkCP18TqyAKxW',
        technologies: ['Java', 'Pyhton'],
        link: 'https://syd.com.co/quienes-somos/',
        credit: 'via GIPHY'
    },

]