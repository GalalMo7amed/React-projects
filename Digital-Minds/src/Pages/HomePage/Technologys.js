import Title from "../../components/Titlecom/Title";

import mobileapp from "../../image/tech-icons/mobileapp.svg"
import AI from "../../image/tech-icons/AI.svg"
import programming3D from "../../image/tech-icons/3dprogramming.svg"
import gamedeveloped from "../../image/tech-icons/gamedeveloped.svg"
import python from "../../image/tech-icons/python.svg"
import webdeveloped from "../../image/tech-icons/webdeveloped.svg"
import UI from "../../image/tech-icons/UI.svg"




const traks = [
    {
        img: mobileapp,
        title: "تطوير تطبيقات الهاتف المحمولة"
    },
    {
        img: AI,
        title: "الذكاء الاصطناعي وتعلم الآلة"
    },
    {
        img: programming3D,
        title: "برمجة ثلاثية الأبعاد (الواقع المعزز، والواقع الافتراضي)"
    },
    {
        img: gamedeveloped,
        title: "تطوير الألعاب"
    },
    {
        img: python,
        title: "Python وعلوم البيانات"
    },
    {
        img: webdeveloped,
        title: "تطوير الويب"
    },
    {
        img: UI,
        title: "واجهة المستخدم (UI و UX)"
    },
]

export default function Technologys() {
    return (
        <div className="w-[90%] h-full shadow-2xl mx-auto rounded-3xl mb-5">
            <div className=' lg:w-[80%] mx-auto h-full md:mt-24 lg:mt-[150px] 3xl:mt-10 pt-5'>
                <Title title={"أداة تطوير برمجي و تكنولوجيا احترافية في منهج واحد"} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mt-10">
                    {
                        traks.map((item, index) => (
                            <div className="w-[110px] h-full mb-[40px] mx-auto" key={index}>
                                <div className="w-[70px] h-[70px] mx-auto">
                                    <img src={item.img} className="w-full h-full" />
                                </div>
                                <div className="text-center w-full text-[14px] mt-2 text-[#111]">
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
