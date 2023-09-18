import { listExperence } from "../constants/experence.constante";
import { ExperenceMiniComponent } from "../miniComponent/ListExperence.mini";

export const ExperenceComponent = () => (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">Experiencia</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
                    En el desarrollo de aplicaciones tengo experiencia utilizando diversos frameworks de Node.js, .NET, Django y SpringBoot.
                </p>
            </div>
            <div className="flex flex-wrap">
                {
                    listExperence.map((exp, i) => (
                        <ExperenceMiniComponent key={i} title={exp.title} description={exp.description} technologies={exp.technologies} src={exp.src} link={exp.link} credit={exp.credit}/>
                    ))
                }

                {/* <div style={{ width: "100%", height: 0, paddingBottom: "79%", position: "relative" }}>
                    <iframe src="https://giphy.com/embed/UwhehtngkVHksVunHS" width="100%" height="100%" style={{ position: "absolute" }} className="giphy-embed" allowFullScreen>
                    </iframe>
                </div>
                <p>
                    <a href="https://giphy.com/gifs/UwhehtngkVHksVunHS">via GIPHY</a>
                </p> */}
            </div>
        </div>
    </section >
);