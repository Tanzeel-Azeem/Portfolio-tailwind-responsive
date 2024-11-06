import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
      
        <h1 className='text-center mt-14 '> Projects </h1>
      
      
      
      <div className='text-center mt-16 md:flex md:flex-wrap  md:justify-evenly md:gap-6 ml-[20px] justify-center'>
        {/* cards start here */}


        {/* pro-1 */}
        <div className='sm:mt-11 md:mt-9 p-2 border-4 rounded-lg w-[400px] h-[340px]   mt-11 md:ml-0  md:border-8 border-white shadow-md shadow-slate-400 py-4' >
          <Image
        src={'/news.jpeg'}
        alt='my picture'
        width={350}
        height={200}/>
        <p className=''>This is my website about a News Channel <br /> which I made it on Next.js</p>
        <p ><a href=""><button className='px-2 py-1  bg-slate-300 hover:bg-slate-400 duration-200 text-sm rounded-xl mt-2 font-semibold'>Click Here</button></a></p>
        
        </div>

      {/* pro-2 */}
        <div  className='sm:mt-11 md:mt-9 p-2 border-4 rounded-lg w-[400px] h-[340px]    mt-11  md:ml-0 md:border-8 border-white shadow-md shadow-slate-400 py-4 md:py-6'>
          <Image
        src={'/selhono.jpeg'}
        alt='my picture'
        width={350}
        height={200}/>
        <p className=''>This is my website about Decoration items <br /> which I made it on Next.js</p>
        <p><a href=""><button className='px-2 py-1  bg-slate-300 hover:bg-slate-400 duration-200 text-sm rounded-xl mt-2 font-semibold'>Click Here</button></a></p>
        </div>
        
        {/* pro-3 */}
        <div className='sm:mt-11 md:mt-9 p-2 border-4 rounded-lg w-[400px] h-[340px]    mt-11 md:ml-0 lg:mr-7 md:border-8 border-white shadow-md shadow-slate-400 py-4 '>
          <Image
        src={'/css.jpeg'}
        alt='my picture'
        width={350}
        height={200}/>
        <p className=''>This is my Portfolio <br /> which I made it on Next.js</p>
        <p><a href=""><button className='px-2 py-1  bg-slate-300 hover:bg-slate-400 duration-200 text-sm rounded-xl mt-2 font-semibold'>Click Here</button></a></p>
        </div>
      </div>

      {/* cards end here */}
    </div>
  )
}

export default Project