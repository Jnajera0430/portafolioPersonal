export interface Experence {
    title: string,
    description: string,
    technologies: string[],
    link?: string,
}

export enum linkEnum {
    APP_PRIVATE = 'Aplicación privada'
}
export const listExperence: Experence[] = [
    {
        title: 'Proceso de integracion autogestionado (PIA)',
        description: 'Aplicacion para administrar las entradas y salidas del personal de la entidad.',
        technologies: ['Nestjs', 'React', 'Redis', 'typeorm'],
        link: `${linkEnum.APP_PRIVATE}.`
    },
    {
        title: 'appRecords',
        description: 'Software administrador de cartera bajo licencia.',
        technologies: ['Node', 'HandleBars', 'Pool query'],
        link: `${linkEnum.APP_PRIVATE}.`
    },
    {
        title: 'Jumio - Empresa',
        description: 'Experiencia laboral de 6 meses.',
        technologies: ['Node', 'php'],
        link: 'https://www.jumio.com/es/',
    },
    {
        title: 'S&D Suministros y Dotaciones Colombia',
        description: 'Brindar soluciones eficientes a los software de empresa y RPA para automatizar procesos.',
        technologies: ['Java', 'Python'],
        link: 'https://syd.com.co/quienes-somos/',
    },

]
