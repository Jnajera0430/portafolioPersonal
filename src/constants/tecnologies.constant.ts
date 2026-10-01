import type { IconType } from "react-icons";
import {
    SiReact, SiAngular, SiRedux, SiSpringboot, SiDotnet, SiExpress,
    SiNestjs, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss,
    SiAmazonaws, SiAmazonec2, SiAmazons3, SiVercel, SiRedis,
} from "react-icons/si";
import { LuZap } from "react-icons/lu";

export interface ITech {
    name: string;
    Icon: IconType;
    color: string;
    description: string;
}

export const listTech: ITech[] = [
    { name: 'React', Icon: SiReact, color: '#61DAFB', description: 'Librería de interfaces React' },
    { name: 'Angular', Icon: SiAngular, color: '#DD0031', description: 'Framework Angular' },
    { name: 'Redux', Icon: SiRedux, color: '#764ABC', description: 'Gestor de estado Redux' },
    { name: 'Zustand', Icon: LuZap, color: '#F5871F', description: 'Gestor de estado Zustand' },
    { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F', description: 'Framework backend Spring Boot' },
    { name: '.NET', Icon: SiDotnet, color: '#512BD4', description: 'Framework .NET Core WebApi' },
    { name: 'Express', Icon: SiExpress, color: '#FFFFFF', description: 'Framework Node.js Express' },
    { name: 'NestJS', Icon: SiNestjs, color: '#E0234E', description: 'Framework Node.js NestJS' },
    { name: 'Redis', Icon: SiRedis, color: '#DC382D', description: 'Base de datos en memoria Redis' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', description: 'Base de datos MongoDB' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', description: 'Base de datos PostgreSQL' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1', description: 'Base de datos MySQL' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', description: 'Framework CSS Tailwind' },
    { name: 'AWS', Icon: SiAmazonaws, color: '#FF9900', description: 'Servicios Amazon Web Services' },
    { name: 'Amazon EC2', Icon: SiAmazonec2, color: '#FF9900', description: 'Computación EC2 de AWS' },
    { name: 'Amazon S3', Icon: SiAmazons3, color: '#569A31', description: 'Almacenamiento S3 de AWS' },
    { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF', description: 'Despliegue de proyectos en Vercel' },
];
