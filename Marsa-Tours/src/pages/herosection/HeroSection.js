import img1 from '../../image/hero section/image1.jpg';



export default function HeroSection() {
    return (
        <div className=' h-[80vh] text-white'
            style={{
                background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='mx-[50px] py-[35%] lg:mx-[132px] lg:py-[15%]'>
                <p className='font-[700] text-[20px] '>
                    عرض لفترة محدودة
                </p>
                <h1 className='font-[700] text-[40px]'>
                    رحلة الى مرسى علم
                </h1>
                <div className='w-[210px] h-[58px] rounded-[60px] bg-white  flex'>
                    <div className='bg-[#FD5674] h-full w-[76px] rounded-r-[60px] '>
                        <p className=' text-center px-[25px] text-[18px] w-[40px]'>
                            تكلفة
                            الفــرد
                        </p>
                    </div>
                    <div className='text-[#FD5674] flex gap-2 mx-2 my-2'>
                        <span className='font-[700] text-[14px]'>
                            EGP
                        </span>
                        <h2 className='text-[30px] font-[700] '>
                            1500
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
