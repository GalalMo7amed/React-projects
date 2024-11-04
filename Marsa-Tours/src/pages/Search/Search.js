import searchicon from '../../image/search/solar_magnifer-outline.png';


const title = [
    { name: "نوع الرحلة", desc: "حدد نوع الرحلة" },
    { name: "موقع الرحلة", desc: "حدد مكان الرحلة" },
    { name: "حدد السعر", desc: "حدد سعر مناسب" },

]

export default function Search() {
    return (
        <div className=" lg:w-[779px] h-[100px] rounded-[80px] -mt-12 mx-auto bg-white">
            <div className='flex justify-center items-center pt-2'>

                {
                    title.map((item, index) => (
                        <div className='w-[25%] lg:w-[28%]' key={index}>
                            <h4 className='font-[700] text-[#1F2247]'>
                                {item.name}
                            </h4>
                            <p className='font-[500] text-[14px] text-[#777891]'>
                                {item.desc}
                            </p>
                        </div>
                    ))
                }



                <div className='h-[84px] w-[84px] flex items-center justify-center rounded-full bg-[#FD5674]'>
                    <img src={searchicon} />
                </div>
            </div>
        </div>
    )
}
