import img1 from '../../image/bannars/googleplay.png'
import img2 from '../../image/bannars/appstore.png'
import phone from '../../image/bannars/Group 41662.png'
export default function BannarDownlodApp() {
    return (
        <div className='w-[90%] h-full lg:w-[1176px] lg:h-[379px] rounded-[30px] bg-[#FD5674] mx-auto lg:mt-[150px] relative'>
            <div className='block lg:flex'>
                <div className=' lg:p-[60px] text-white'>

                    <p className='pt-[100px] text-[20px] font-[700]'>
                        حمل تطبيق مراسى
                    </p>
                    <h1 className='text-[40px] font-[700]'>
                        أكتشف افضل العروض والرحلات
                    </h1>
                    <p className='text-[20px] font-[700]'>
                        تحميل التطبيق
                    </p>
                    <div className='mx-auto w-[80%] flex lg:items-center py-5 gap-2'>
                        <img src={img1} className='w-[50%]' />
                        <img src={img2} className='w-[50%]' />
                    </div>

                </div>

                <div className='absolute hidden bottom-[200px]  lg:left-5 lg:bottom-4 lg:block'>
                    <img src={phone} />
                </div>

            </div>

        </div>
    )
}
