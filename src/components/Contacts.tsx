import { ChangeEvent, FormEvent, useState } from "react";
import { UseContext } from "../api/hook/UseContext";
import { IMessage } from "../constants/messageInterface";
import { ValidEmail } from "../constants/validEmail";
import { TypeAlert } from "../constants/alertEnum";

export const ContactComponent = () => {
    const { darkMode, handleTypeAlert, handleIsOpen } = UseContext();
    const [stateMessage, setStateMessage] = useState<IMessage>({
        email: '',
        message: ''
    });
    const handleFields = (e: ChangeEvent<HTMLInputElement>) => {
        setStateMessage((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        handleIsOpen(true);
        if (!stateMessage.email || !ValidEmail(stateMessage.email)) {
            handleTypeAlert(TypeAlert.DANGER);
            return;
        }        
        handleTypeAlert(TypeAlert.SUCCESS);
        form.reset();   
    }
    return <section className={`text-gray-600 body-font relative`}>
        <div className={`absolute inset-0 ${darkMode ? " bg-gray-800" : " bg-gray-300 "}`}>
            <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Barranquilla+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}></iframe>
        </div>
        <div className={`container px-5 py-24 mx-auto flex`}>
            <form className={`lg:w-1/3 md:w-1/2 ${darkMode ? " bg-gray-800 text-slate-400" : " bg-white text-gray-600 "}   rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md`} onSubmit={handleSubmit}>
                <h2 className={`${darkMode ? " text-slate-300 " : " text-gray-900 "} text-lg mb-1 font-medium title-font`}>
                    Dejame tu mensaje
                </h2>
                <p className={`leading-relaxed mb-5 `}>
                    Enviame un mensaje si quieres solicitar mis servicios o si gustas enviame tus recomendaciones.
                </p>
                <div className="relative mb-4">
                    <label htmlFor="email" className={`leading-7 text-sm font-bold ${darkMode ? " text-slate-300 " : " text-gray-600 "}`}>Email</label>
                    <input type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleFields} />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className={`leading-7 text-sm font-bold ${darkMode ? " text-slate-300 " : " text-gray-600 "}`}>Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Enviar</button>
                <p className="text-xs text-gray-500 mt-3">
                    Gracias por visitar mi portafolio.
                </p>
            </form>
        </div>
    </section>
}