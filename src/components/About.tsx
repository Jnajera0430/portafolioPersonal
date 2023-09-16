import perfilImg from '../assets/img/perfil.jpg';
import flagColombia from '../assets/img/flagColombia.png';
import { listTech } from '../constants/tecnologies.constant';
import { ListTechComponent } from '../miniComponent/ListTech.mini';
export const AboutComponent = () => (
    <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center justify-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Acerca de mi</h1>
                <div>
                    <div className="mt-3 flex -space-x-2 overflow-hidden w-40">
                        <img src={perfilImg} alt="" className="h-full w-full inline-block rounded-full ring-2 ring-white" />
                    </div>
                    <div>
                        <h3 className='text-xl text-gray-900'>Jose Najera Avendaño</h3>
                        <p className='-mt-1 text-sm'>Desarrollador fullstack</p>
                        <div className='flex flex-row items-center'>
                            <div className='min-w-fit inline-flex'>
                                <p className='-mt-1 text-sm'>Barranquilla - Colombia </p>
                            </div>
                            <div className='w-fit h-8'>
                                <img src={flagColombia} alt="Bandera de Colombia" className='h-full w-full' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
                <a className="text-blue-500 inline-flex items-center mt-4">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a> */}
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12">
                <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">TECNOLOGIAS - CONOCIMIENTOS</h2>
                <nav className="flex flex-wrap list-none -mb-1">
                    {
                        listTech.map((item,i) => (
                            <ListTechComponent name={item.name} src={item.src} description={item.description} key={i}/>
                        ))
                    }
                </nav>
            </div>
        </div>
    </section>
);