import Title from '../../components/Titlecom/Title'
import Robot from '../../image/AboutMe/Robot.svg'
import Logo from '../../image/AboutMe/Logo.svg'
export default function AboutMe() {
    return (
        <section id="إحنا مين؟">
            <div className='w-[90%] lg:w-[80%] mx-auto h-full md:mt-24 lg:mt-[150px] 3xl:mt-20 '>
                <Title title={"إحنا مين؟"} />
                <div className='lg:flex justify-between items-center gap-10 mt-10 '>
                    <div className='w-full lg:w-[60%]'>
                        <img src={Logo} className='w-[250px] ' />

                        <p className='lg:text-[24px] text-[#111] font-medium'>
                            إحنا فريق متخصص في تدريب الأطفال والشباب على المهارات الرقمية زي البرمجة، والروبوت، والذكاء الاصطناعي. هدفنا نجهز الجيل الجديد ليكون قادة في العالم الرقمي من خلال تعليم ممتع وعملي.
                        </p>
                    </div>
                    <div className='h-[400px] md:w-[450px] hu__hu__ mx-auto relative -z-10'>
                        <img src={Robot} className='w-full h-full ' alt="Robot" />
                    </div>

                </div>
            </div>
        </section>
    )
}
