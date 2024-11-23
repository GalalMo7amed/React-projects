import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import Logo from "../../image/Navebar/Logo.svg"
import ExitIcon from "../../image/Navebar/x (2).svg"

export default function NavebarMedia({ Links }) {

    const [links, setLinks] = useState([])

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        setLinks(Links)
    }, [links])




    return (
        <div className='lg:hidden relative z-50'>
            <nav class="shadow ">
                <div class="max-w-screen-xl  flex  items-center justify-between mx-auto p-4 ">
                    <div className="w-[150px] h-[50px]">
                        <img src={Logo} alt="logo" className="w-full h-full" />
                    </div>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center "
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div
                        className={`fixed inset-y-0 left-0   ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-64 shadow-2xl bg-[#f3f3f3]`}
                        id="navbar-default"
                    >
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center pt-6 mr-2 w-10 h-10 justify-center "
                            aria-controls="navbar-default"
                            aria-expanded={isOpen}
                        >

                            <img src={ExitIcon} alt='ExitIcon' className="w-[26px] h-[26px]" />


                        </button>

                        <ul className="font-medium flex flex-col p-4 space-y-4">
                            {
                                links.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.url} smooth={true} duration={1000} className='cursor-pointer block py-2 px-3 text-[20px] text-[#111] border-b-2 ' onClick={()=> setIsOpen(false)}>
                                            {item.name}
                                        </Link>

                                    </li>

                                ))
                            }

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
