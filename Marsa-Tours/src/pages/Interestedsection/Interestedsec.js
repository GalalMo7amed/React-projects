import img from '../../image/hero section/image1.jpg';

const cards = [
    { name: "رحلات شهر العسل", desc: "عرض الرحلات" },
    { name: "رحلات كروز", desc: "عرض الرحلات" },
    { name: "رحلة نصف العام", desc: "عرض الرحلات" },
    { name: "رحلة صيفية", desc: "رحلة صيفية" }
]

export default function Interestedsec() {
    return (
        <div className="w-[80%] h-full mx-auto">
            <h1 className='text-center text-[24px] font-[700] text-[#1F2247]'>
                اختر اهتمامتك من الرحلات
            </h1>
            <p className='text-center font-[500] text-[#777891]'>
                قم باختيار نوع الرحلات المناسبة لك
            </p>
            <div className=' lg:flex lg:justify-center lg:items-center gap-[16px] pt-10'>

                {
                    cards.map((item, index) => (
                        <div className='mx-auto my-5 lg:my-0 lg:mx-0 w-[282px] h-[231px] rounded-[30px]'
                            style={{
                                background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            key={index}
                        >
                            <div className='pr-[24px] pt-[165px] text-white'>
                                <h3 className='text-[18px] font-[700]'>
                                    {item.name}
                                </h3>
                                <p className='text-[14px] font-[400]'>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
