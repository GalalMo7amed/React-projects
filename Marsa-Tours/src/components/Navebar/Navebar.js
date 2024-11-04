import Logo from '../../image/Navebar/logo.svg';
import user from '../../image/Navebar/solar_user-circle-bold.svg';
import nav from '../../image/Navebar/solar_hamburger-menu-outline.svg'
import NavebarMedia from './NavebarMedia';


const links = [
    { name: "الرئيسية" },
    { name: "من نحن" },
    { name: "الرحلات" },
    { name: "العروض" },
    { name: "تواصل معنا" },
]

export default function Navebar() {
    return (
        <>
            <div className="h-[80px] hidden lg:block">
                <div className="mx-[132px] flex justify-evenly items-center pt-[15px]">
                    <div>
                        <img src={Logo} className='w-[183px] h-[49.66px]' />
                    </div>
                    <div>
                        <ul className='flex gap-[32px]'>
                            {
                                links.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.name} className='font-[500]'>{item.name}</a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    <div className='bg-[#F9F9F9] w-[78px] h-[44px] rounded-[30px]'>
                        <div className='flex justify-center items-center gap-[12px] mt-[12px]'>

                            <div>
                                <img src={user} />
                            </div>
                            <div>
                                <img src={nav} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='blcok lg:hidden'>
                <NavebarMedia />
            </div>
        </>
    )
}
