import avatarImg from '../assets/img/Robot face-rafiki.svg';
import { navbarConstant } from '../constants/navbar.constant';
import { itemTheme } from '../constants/theme.constant';
import { ItemNavbarMiniComponent } from '../miniComponent/ListNavbar.mini';
import  {useState} from 'react'
export const Navbar = () =>{
    const [theme, setTheme] = useState<boolean>(false)
    const handleTheme =()=>{
        setTheme((state)=>!state);
        
        if(theme){
            localStorage.setItem(itemTheme,"true");
        }else{
            const dato:any = localStorage.getItem(itemTheme);
            if(dato){
                localStorage.removeItem(itemTheme);
            }else{
                localStorage.setItem(itemTheme,"true");
            }
        }
    }
    return (
        <header className="text-gray-600 body-font">
        <div className="container bg-slate-100 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src={avatarImg} className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" alt="" />
                <div className='flex flex-col justify-center items-start'>
                    <span className="ml-3 text-xl ">Jose Najera A.</span>
                    <span className='ml-3 -mt-1 text-sm'>Desarrolador fullstack</span>
                </div>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                {
                    navbarConstant.map((itemNavbar,i)=>(
                        <ItemNavbarMiniComponent item={itemNavbar.item} src={itemNavbar.src} key={i}/>
                    ))
                }
                <button onClick={handleTheme}>
                    Dark mode
                </button>
            </nav>
            
        </div>
    </header>
    )      
};