import logo from '../../image/Navebar/logo.svg'
import icon1 from '../../image/Footer/ant-design_x-outlined.png'
import icon2 from '../../image/Footer/bi_snapchat.png'
import icon3 from '../../image/Footer/fa6-brands_instagram.png'
import icon4 from '../../image/Footer/iconoir_facebook.png'
import icon5 from '../../image/Footer/ph_tiktok-logo.png'


import icon6 from '../../image/Footer/solar_map-point-outline.png'
import icon7 from '../../image/Footer/solar_letter-unread-outline.png'
import icon8 from '../../image/Footer/solar_phone-calling-outline.png'

export default function Footer() {
    return (
        <div className='bg-[#0F122C] h-full -mt-[100px]'>
            <div className='w-[90%] lg:w-[62%] mx-auto h-full pt-[100px]'>
                <div className='lg:flex lg:justify-between lg:items-center mt-5'>
                    <div className='my-5 lg:my-0'>
                        <img src={logo} />
                    </div>
                    <div className='flex items-center gap-[25px]'>
                        <img src={icon1} />
                        <img src={icon2} />
                        <img src={icon3} />
                        <img src={icon4} />
                        <img src={icon5} />
                    </div>
                </div>
                <hr className='my-5' />
                <div className='grid grid-cols-1 lg:grid-cols-4 py-2 text-white px-4'>
                    <div className='w-full'>
                        <h3 className='text-[20px] font-[700]'>
                            عن رحلات مراسي
                        </h3>
                        <p className='text-[18px] font-[400] w-full lg:w-[230px] '>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى .
                        </p>
                    </div>
                    <div className='w-full my-5 lg:my-0'>
                        <h3 className='text-[20px] font-[700]'>
                            الرحلات
                        </h3>
                        <p className='text-[18px] font-[400]'>
                            <ul>
                                <li>
                                    <a>
                                        رحلات كروز
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        رحلات شهر العسل
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        رحلات نصف العام
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        رحلات صييفية
                                    </a>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='w-full my-5 lg:my-0'>
                        <h3 className='text-[20px] font-[700]'>
                            روابط هامه
                        </h3>
                        <p className='text-[18px] font-[400]'>
                            <ul>
                                <li>
                                    <a>
                                        الحساب
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        الرحلات
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        الرئيسية
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        من نحن
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        تواصل معنا
                                    </a>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='w-full'>
                        <h3 className='text-[20px] font-[700]'>
                            تواصل معنا
                        </h3>
                        <div className='flex items-center gap-[6px] mt-[5px]'>
                            <img src={icon6} />
                            <p className='text-[14px]'>
                                موقع المكتب الخاص بالموقع
                            </p>
                        </div>
                        <div className='flex items-center gap-[6px] mt-[5px]'>
                            <img src={icon7} />
                            <p className='text-[14px]'>
                                info@gmail.com
                            </p>
                        </div>
                        <div className='flex items-center gap-[6px] mt-[5px]'>
                            <img src={icon8} />
                            <p className='text-[14px]'>
                                955 23123 123123
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='my-5' />
                <div className='lg:flex lg:justify-between lg:items-center mt-5 text-[#FFFFFF4D]'>
                    <p>
                        جميع الحقوق محفوظة
                    </p>
                    <p>
                        سياسة الخصوصية    |    الشروط والاحكام
                    </p>
                </div>
            </div>
        </div>
    )
}
