import { UseContext } from "../api/hook/UseContext";
import { listExperence } from "../constants/experence.constante";
import { ExperenceMiniComponent } from "../miniComponent/ListExperence.mini";

export const ExperenceComponent = () =>{
    const {darkMode} = UseContext();
    return <section className={`${darkMode ? "bg-gray-800 text-slate-400" :"text-gray-600"}  body-font`}>
        <div className="container px-5 pt-9 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className={`sm:text-3xl text-3xl font-medium title-font mb-4 ${darkMode ? " text-slate-300" :" text-gray-900"} `}>Experiencia y proyectos</h2>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
                    Desarrollador fullstack con enfoque en React, NestJS y Django: APIs eficientes, arquitecturas orientadas a eventos, mensajería, procesamiento en segundo plano y despliegue serverless en AWS con CI/CD.
                </p>
            </div>
            <div className="flex flex-wrap">
                {
                    listExperence.map((exp, i) => (
                        <ExperenceMiniComponent key={i} title={exp.title} description={exp.description} technologies={exp.technologies} link={exp.link}/>
                        ))
                }
            </div>
        </div>
    </section >
}