import perfilImg from '../assets/img/perfil.jpg';
import flagColombia from '../assets/img/flagColombia.png';
import flagColombiaDark from '../assets/img/flagColombiaDark2.png';
import devImg from '../assets/img/Addcolorrafiki.png';
import { listTech } from '../constants/tecnologies.constant';
import { ListTechComponent } from '../miniComponent/ListTech.mini';
import { UseContext } from '../api/hook/UseContext';
export const AboutComponent = () => {
    const {darkMode} = UseContext();
    return <section className={`${darkMode ? "bg-gray-800 text-slate-400" :" text-gray-600 "} body-font`}>
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center justify-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 flex">
                <div className='w-3/5'>
                    <h1 className={`${darkMode ? " text-slate-300" :" text-gray-900"}  sm:text-3xl text-2xl font-medium title-font mb-2 `}>Acerca de mi</h1>
                    <div className=''>
                        <div className="mt-3 flex -space-x-2 overflow-hidden w-40">
                            <img src={perfilImg} alt="" className="h-full w-full inline-block rounded-full ring-inset ring-white" />
                        </div>
                        <div>
                            <h3 className={`${darkMode ? " text-slate-300" :" text-gray-900"} text-xl`}>Jose Najera Avendaño</h3>
                            <p className='-mt-1 text-sm'>Desarrollador fullstack</p>
                            <div className='flex flex-row items-center'>
                                <div className='min-w-fit inline-flex'>
                                    <p className='-mt-1 text-sm'>Barranquilla - Colombia </p>
                                </div>
                                <div className={`w-fit h-8 rounded-md `}>
                                    <img src={darkMode? flagColombiaDark : flagColombia} alt="Bandera de Colombia" className='h-full w-full  rounded-full bg-none' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/3'>
                    <img src={devImg} className='w-full h-full' alt="Imagen obtenida de https://storyset.com/" />
                </div>
            </div>

            {/* <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
                <a className="text-blue-500 inline-flex items-center mt-4">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a> */}
            <div className="flex flex-col md:w-1/2 md:pl-12">
                <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">TECNOLOGIAS - CONOCIMIENTOS</h2>
                <nav className="flex flex-wrap list-none -mb-1">
                    {
                        listTech.map((item, i) => (
                            <ListTechComponent name={item.name} src={item.src} description={item.description} key={i} />
                        ))
                    }
                </nav>
            </div>
        </div>
    </section>
}