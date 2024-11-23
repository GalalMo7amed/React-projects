import Cerv from "../../image/Hero/Vector.svg"

import Boys from "../../image/Hero/pngtree-kids-and-robots-a-fun-learning-experience-png-image_12997459-removebg-preview 1.svg"

export default function HeroSection() {
    return (
        <div className=' md:h-full relative -z-10'>
            <div className="w-[80%] mx-auto ">
                <div className=" md:text-start md:flex md:justify-center md:items-center md:gap-10 ">
                    <div className="md:w-[100%]">
                        <div className="mt-10 md:-mt-16">
                            <h1 className="text-[22px] lg:text-[40px] font-bold text-[#111111] lg:w-[80%] ">
                                استثمر في مستقبل أطفالك واطلق العنان لشغفهم...
                            </h1>
                            <div className=" flex items-center gap-2 lg:gap-10 pt-5 ">
                                <button className="px-3 lg:px-5 py-2 text-center border rounded-[10px] border-[#00BF62] bg-[#00BF62] text-[#F3F3F3]  font-medium duration-300 hover:bg-[#00BF62] hover:text-[#F3F3F3]">
                                    احجز جلستك الأن !
                                </button>

                                <button className=" px-3 lg:px-5 py-2 text-center border rounded-[10px] border-[#00BF62] text-[#00BF62]  font-medium duration-300 hover:bg-[#00BF62] hover:text-[#F3F3F3]">
                                    أكتشف الأن
                                </button>

                            </div>
                        </div>

                    </div>
                    <div className="w-[100%]  md:h-full lg:w-[100%] 3xl:h-[700px] ">
                        <img src={Boys} className="w-full h-full " />
                    </div>
                </div>
            </div>
            <div className='w-screen absolute bottom-0 md:top-12 lg:top-0 left-0 -z-50 '>
                <img src={Cerv} className="w-screen lg:h-[700px] 3xl:h-[800px]" />
            </div>
        </div>
    )
}
