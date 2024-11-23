import { useState } from "react";
import Title from "../../components/Titlecom/Title";
import Tabpanel from '../../image/whyChoose/Tabpanel.svg'
import img1 from '../../image/whyChoose/6574c81e3de59b1b60bc7352_Website designs-o-02.webp'

import Icon1 from '../../image/whyChoose/icon1.svg'
import Icon2 from '../../image/whyChoose/icon2.svg'
import Icon3 from '../../image/whyChoose/icon3.svg'
import Icon4 from '../../image/whyChoose/icon4.svg'


const cards = [
    {
        img: Icon1,
        title: "stem & Ai",
        describe: "يتعلم الطلاب البرمجة باستخدام نفس المنصات التي يتعلم منها المحترفون"
    },
    {
        img: Icon2,
        title: "تكون الحصة لايف وليست مسجلة",
        describe: "مع مدرب شخصي"
    },
    {
        img: Icon3,
        title: "أفضل مدربين علوم الكمبيوتر",
        describe: "من جميع أنحاء العالم تم تدريبهم من قبل فريق الخبراء و لدينا أيضًا تدريس البرمجة باللغتين الإنجليزية والعربية"
    },
    {
        img: Icon4,
        title: "خطة مهنية طويلة المدى للبرمجة",
        describe: "مع رؤية متكاملة لتنمية طفلك"
    },

]

const images = [
    {
        img: Tabpanel
    },
    {
        img: img1
    },
    {
        img: Tabpanel
    },
    {
        img: img1
    }
]

export default function WhyChooseMe() {

    const [isactive, setIsActive] = useState(0);



    return (
        <section id="لماذاديجيتالمايند"  >

            <div className='w-[90%] lg:w-[90%] mx-auto h-full '>
                <Title title={"لماذا ديجيتال مايند"} />

                <div className="w-full h-[500px transform duration-1000 lg:hidden ">
                    <img src={images[isactive]?.img} className="w-full h-full transform duration-1000 " />
                </div>


                <div className="lg:flex justify-center items-center gap-[50px]">
                    <div className="w-full h-[500px] ">
                        {
                            cards.map((item, index) => (
                                <div className={`lg:w-full 3xl:w-[80%] mx-auto h-[110px] border rounded-[70px] border-[#00BF62] ${isactive === index ? `bg-[#00BF62] transform duration-500` : `bg-white`} mb-5`} key={index} onClick={() => setIsActive(index)}>
                                    <div className="flex  items-center gap-3 py-5 pr-[10px]">
                                        <div className="w-[60px] h-[60px]">
                                            <img src={item.img} className="w-full h-full" />
                                        </div>
                                        <div className="w-[80%]">
                                            <h2 className="text-[#111] text-[18px] md:text-[20px] font-semibold mb-1">
                                                {item.title}
                                            </h2>
                                            <p className="text-[11px] md:text-[15px] text-[#111] w-[90%] md:w-full ">
                                                {item.describe}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>


                    <div className="w-full h-[500px] transform duration-1000 hidden lg:block">
                        <img src={images[isactive]?.img} className="w-full h-full transform duration-1000" />
                    </div>




                </div>
            </div>

        </section>
    )
}
