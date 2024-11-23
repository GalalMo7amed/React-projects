import { Link } from 'react-scroll';

import Logo from "../../image/Navebar/Logo.svg"
import Sun from "../../image/Navebar/sun.svg"
import NavebarMedia from "./NavebarMedia"

const Links = [
    { name: "الرئيسيه", url: "الرئيسيه" },
    { name: "إحنا مين؟", url: "إحنا مين؟" },
    {
        name: "لماذا ديجيتال مايند", url: "لماذاديجيتالمايند"
    },
    { name: "للحجز" },
    { name: "للتواصل معانا" },
]
export default function Navebar() {



    return (
        <section id="الرئيسيه">
            <div className="h-[120px] shadow z-50 hidden lg:block">
                <div className="flex justify-evenly items-center py-2 3xl:w-[80%] mx-auto">
                    <div className="w-[155px] h-[105px]">
                        <img src={Logo} className="w-full h-full" alt="logo" />
                    </div>
                    <div>
                        <ul className="flex justify-center items-center gap-10">
                            {
                                Links.map((item, index) => (
                                    <li key={index} className="text-[24px] font-semibold text-[#111111]">
                                        <Link to={item.url} smooth={true} duration={1000} className='cursor-pointer'>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-10">
                            <button className="px-5 py-2  border rounded-[10px] border-[#00BF62]  text-[#00BF62]  duration-300 hover:bg-[#00BF62] hover:text-[#F3F3F3]">
                                <p className="font-semibold text-[18px]">
                                    سجل معانا الان
                                </p>
                            </button>
                            <div>
                                <img src={Sun} alt="theme" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavebarMedia Links={Links} />
        </section>
    )
}
