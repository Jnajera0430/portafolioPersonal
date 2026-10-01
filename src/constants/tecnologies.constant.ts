import type { IconType } from "react-icons";
import {
    SiReact, SiRedux, SiNestjs, SiExpress, SiNodedotjs,
    SiDjango, SiTypescript, SiRedis, SiPostgresql, SiMongodb,
    SiTailwindcss, SiAmazonaws, SiAwslambda, SiSwagger, SiVercel,
    SiGithubactions,
} from "react-icons/si";
import { LuZap } from "react-icons/lu";

export interface ITech {
    name: string;
    Icon: IconType;
    color: string;
    darkColor?: string;
    description: string;
}

export const listTech: ITech[] = [
    { name: 'React', Icon: SiReact, color: '#149ECA', darkColor: '#61DAFB', description: 'Librería de interfaces React' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', darkColor: '#4FA3D9', description: 'TypeScript' },
    { name: 'Redux', Icon: SiRedux, color: '#764ABC', darkColor: '#9B7BD8', description: 'Gestor de estado Redux' },
    { name: 'Zustand', Icon: LuZap, color: '#D97706', darkColor: '#F5871F', description: 'Gestor de estado Zustand' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#3C873A', darkColor: '#83CD29', description: 'Runtime Node.js' },
    { name: 'Express', Icon: SiExpress, color: '#1F1F1F', darkColor: '#FFFFFF', description: 'Framework Node.js Express' },
    { name: 'NestJS', Icon: SiNestjs, color: '#E0234E', darkColor: '#F0506E', description: 'Framework Node.js NestJS' },
    { name: 'Django', Icon: SiDjango, color: '#0C4B33', darkColor: '#6CC24A', description: 'Framework backend Django' },
    { name: 'Redis', Icon: SiRedis, color: '#A41E22', darkColor: '#DC382D', description: 'Colas y caché en memoria Redis' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', darkColor: '#7BA7CC', description: 'Base de datos relacional PostgreSQL' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#137752', darkColor: '#47A248', description: 'Base de datos no relacional MongoDB' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#0891B2', darkColor: '#22D3EE', description: 'Framework CSS Tailwind' },
    { name: 'AWS', Icon: SiAmazonaws, color: '#E88B00', darkColor: '#FF9900', description: 'Servicios Amazon Web Services' },
    { name: 'AWS Lambda', Icon: SiAwslambda, color: '#8C4FFF', darkColor: '#A166FF', description: 'Arquitecturas serverless con AWS Lambda' },
    { name: 'Swagger', Icon: SiSwagger, color: '#4B9E6C', darkColor: '#85EA2D', description: 'Documentación de APIs con Swagger / OpenAPI' },
    { name: 'GitHub Actions', Icon: SiGithubactions, color: '#1F7FD6', darkColor: '#4EABFF', description: 'Integración y despliegue continuo (CI/CD)' },
    { name: 'Vercel', Icon: SiVercel, color: '#000000', darkColor: '#FFFFFF', description: 'Despliegue de proyectos en Vercel' },
];
