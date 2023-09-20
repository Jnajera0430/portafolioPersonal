import { UseContext } from '../api/hook/UseContext';
import welcomeImg from '../assets/img/Programming-rafiki.svg';

export const WelcomeComponet = () => {
    const {darkMode} = UseContext();
    return <section className={`${darkMode ? "bg-gray-800 text-slate-400" :" text-gray-600"}  body-font`}>
        <div className="container px-5 py-24 mx-auto flex justify-center items-center">
            <div className="w-3/5 h-auto ">
                <h1 className={`${darkMode ? " text-slate-300" :" text-gray-900"} text-5xl mb-2 `}>
                    Bienvenidos
                </h1>
                <p className='text-2xl'>
                    "En un mundo impulsado por la tecnología, el software es el lenguaje universal de la innovación".
                </p>
            </div>
            <div className="w-1/5 h-auto">
                <img src={welcomeImg} alt="Imagen obtenida de https://storyset.com/" className="w-full h-full" />
            </div>
        </div>
    </section>

}