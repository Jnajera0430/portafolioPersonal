import { UseContext } from '../api/hook/UseContext';
import avatarImg from '../assets/img/Robot.svg';
import { navbarConstant } from '../constants/navbar.constant';
import { ItemNavbarMiniComponent } from '../miniComponent/ListNavbar.mini';
//import moonDark from '../assets/img/moondark.png';
//import moonLight from '../assets/img/moonlight.png';
import { useState } from 'react';
import { ThemeIconMiniComponent } from '../miniComponent/Theme.mini';
import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { ItemNavbarMiniComponentDesk } from '../miniComponent/NavbarDesk.mini';
import { ThemeIconMiniComponentMob } from '../miniComponent/Theme.miniMobile';
export const Navbar = () => {
    const { handleChangeTheme, darkMode } = UseContext();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const handleToggelMenu = () => {
        setMenuOpen(!menuOpen);
    }
    const handleTheme = () => {
        handleChangeTheme();
    }

    return (
        <header className="text-gray-600 body-font w-full h-auto">
            <div className={`${darkMode ? "bg-gray-800 text-slate-400" : "bg-slate-100 "}  mx-auto flex flex-wrap p-5  md:flex-row md:w-full fixed`} style={{
                width: "100vw"
            }}>
                <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0 md:content-start xl:items-center">
                    <img src={avatarImg} className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" alt="" />
                    <div className='flex flex-col justify-center items-start'>
                        <span className={`${darkMode ? " text-slate-400" : " "} ml-3 text-xl`}>Jose Najera A.</span>
                        <span className={`${darkMode ? " text-slate-400" : " "} ml-3 -mt-1 text-sm`}>Desarrolador fullstack</span>
                    </div>
                </a>
                <div className='hidden md:block'>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        {
                            navbarConstant.map((itemNavbar, i) => (
                                <ItemNavbarMiniComponentDesk item={itemNavbar.item} src={itemNavbar.src} key={i} Icon={itemNavbar.Icon} />
                            ))
                        }
                        <button onClick={handleTheme}>
                            {!darkMode ?
                                <ThemeIconMiniComponent theme='Dark mode' ThemeIcon={MdDarkMode} />
                                :
                                <ThemeIconMiniComponent theme='Light mode' ThemeIcon={BsSun} />
                            }
                        </button>
                    </nav>
                </div>
                <button
                    className={`md:hidden ${darkMode ? " text-slate-400 hover:text-gray-200" : " text-gray-500 hover:text-gray-800"}  w-14 content-end`}
                    onClick={handleToggelMenu}
                >
                    ☰
                </button>

                {menuOpen && (
                    <nav className="md:hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-evenly w-full">
                        {
                            navbarConstant.map((itemNavbar, i) => (
                                <ItemNavbarMiniComponent item={itemNavbar.item} src={itemNavbar.src} key={i} Icon={itemNavbar.Icon} />
                            ))
                        }

                    </nav>)
                }
                <button onClick={handleTheme} className='md:hidden fixed -right-0 items-center justify-center mt-4 mr-6'>
                    {!darkMode ?
                        <ThemeIconMiniComponentMob theme='Dark mode' ThemeIcon={MdDarkMode} />
                        :
                        <ThemeIconMiniComponentMob theme='Light mode' ThemeIcon={BsSun} />
                    }
                </button>
            </div>
        </header>
    )
};