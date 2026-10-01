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
        title: 'PIA – Punto de Ingreso Autogestionado',
        description: 'Aplicación para administrar las entradas y salidas del personal de la entidad: carga masiva de archivos en segundo plano con Redis y colas de trabajo, documentación de API con Swagger y tests e2e.',
        technologies: ['NestJS', 'React', 'PostgreSQL', 'Redis', 'Swagger'],
        link: `${linkEnum.APP_PRIVATE}.`
    },
    {
        title: 'mifinanzas.co – Control seguro de gastos',
        description: 'Plataforma de control de gastos con webhooks, lectura de QR y validación automática de facturas. Desplegada en entorno serverless sobre AWS Lambda.',
        technologies: ['NestJS', 'React', 'PostgreSQL', 'AWS Lambda'],
        link: 'https://mifinanzas.co'
    },
    {
        title: 'edupay – Pago seguro y confiable',
        description: 'Solución de pagos con webhooks, lectura de QR, verificación de huellas y trazabilidad segura de compras. Desplegada en servidor Linux.',
        technologies: ['NestJS', 'React', 'PostgreSQL'],
        link: `${linkEnum.APP_PRIVATE}.`
    },

]
