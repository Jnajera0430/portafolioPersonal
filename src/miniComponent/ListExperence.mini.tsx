import { UseContext } from "../api/hook/UseContext";
import { Experence, linkEnum } from "../constants/experence.constante";

export const ExperenceMiniComponent = ({ title, description, technologies, src, link, credit }: Experence) => {
    const { darkMode } = UseContext()
    return <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-300 border-opacity-60 mb-1">
        <div className="h-20 w-full">
            <iframe src={src ? src : ''} className="w-full h-full" allowFullScreen>
            </iframe>
            <p className="text-sm">
                {
                    src && (
                        <a href={src ? src : ''}>{credit}</a>
                    )
                }
            </p>
        </div>
        <div className="pt-4">
            <h2 className={`text-lg sm:text-xl ${darkMode ? " text-slate-300" : " text-gray-900"}  font-medium title-font mb-1`}>{title}</h2>
            <p className="leading-relaxed text-base mb-2">{description}</p>
            <h3 className="font-medium">Tecnologias: </h3>
            <p>
                {
                    technologies.map((tech, i, arr) => arr.length - 1 != i ? `${tech}, ` : `${tech}.`)
                }
            </p>
            <div className="flex flex-row flex-wrap items-center">
                <h3 className="font-medium mr-1">Link:</h3>
                <a className="text-sm " href={link == `${linkEnum.APP_PRIVATE}.` ? '#' : link}>{link}</a>
            </div>
        </div>
    </div>
}