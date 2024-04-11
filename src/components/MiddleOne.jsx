import React from 'react'
import imageone from '../assets/image1.png'
const MiddleOne = () => {
  return (
    <div className='h-[572.82px] md:h-[370px] flex flex-col items-center justify-center md:flex-row mb-10'>
        <div className=''> <img src={imageone}  alt="imageone" className='w-[275px] h-[275.82px] xl:w-[346px] xl:h-[346px] lg:w-[346px] lg:h-[346px]'/></div>
        <div className='text-center w-[335px] md:text-justify md:w-[393px] xl:w-[530px]'>
            <div className='font-semibold text-[#6B3CC9] text-[27px] md:text-start xl:mb-5 lg:mb-5'><p >Web & Mobile App Development</p></div>
            <div style={{paddingBottom:"35px"}}><p className='font-normal  text-[16px]'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p></div>
            <div><button className='bg-[#F28D35] rounded-[4px] text-white w-[129px] h-[38px] font-medium'>LEARN MORE</button></div>
        </div>
    </div>
  )
}

export default MiddleOne