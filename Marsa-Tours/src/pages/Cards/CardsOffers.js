import icon from '../../image/CardsOffers/solar_streets-map-point-outline.png'
import img1 from '../../image/CardsOffers/Rectangle 46864.png'

import iconcard from '../../image/CardsOffers/solar_round-arrow-left-up-bold.png'
import iconHear from '../../image/CardsOffers/solar_heart-bold (1).png'


const cards = [
    { name: "جولات مرسى علم جولة لمدة 3 ايام" },
    { name: "جولات مرسى علم جولة لمدة 3 ايام" },
    { name: "جولات مرسى علم جولة لمدة 3 ايام" },
    { name: "جولات مرسى علم جولة لمدة 3 ايام" },

]

export default function CardsOffers() {
    return (
        <div className="w-[90%] lg:w-[65%] h-full mx-auto pt-[50px]">
            <h2 className='text-[#1F2247] text-[24px] font-[700]'>
                اشهر العروض
            </h2>
            <p className='text-[18px] font-[500]'>
                العروض الحصرية لدينا مخصصه لك
            </p>
            <div className='lg:flex lg:justify-center lg:items-center gap-[16px] mt-4'>


                {
                    cards.map((item, index) => (
                        <div className=' mx-auto my-5 lg:mx-0 lg:my-0h-[357px] w-[282px] rounded-[10px] border border-[#E2E2E2]'>
                            <div className='w-full h-[209px] relative'>
                                <div className='absolute left-2 top-2'>
                                    <div className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full '>
                                        <img src={iconHear} />
                                    </div>
                                </div>

                                <img src={img1} className='w-full h-full' />
                            </div>
                            <div className='flex items-center gap-[10px] p-[16px]'>
                                <img src={icon} />
                                <p className='text-[14px] text-[#777891]'>
                                    مصر . مرسى علم
                                </p>
                            </div>
                            <h1 className='text-center mb-2'>
                                {item.name}
                            </h1>
                            <hr />
                            <div className='flex items-center p-[10px]'>
                                <div className='w-[80%]'>
                                    <p className='text-[12px] text-[#777891]'>
                                        سعر الجولة للفــرد
                                    </p>
                                    <h1 className='text-[#FD5674] text-[24px] fonst-[700]'>
                                        1.500
                                    </h1>
                                </div>

                                <div className='w-[40px] h-[40px] bg-[#FD5674] rounded-full flex justify-center items-center'>
                                    <img src={iconcard} />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
