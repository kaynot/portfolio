import React from 'react'
import Image from "next/image";
export const Navbar = () => {
  return (
<div className='w-full h-[5%] pt-2 p-4 flex flex-col md:flex-row font-sans'>
    <div className='w-full md:w-[10%] h-[100%] mx-3'>
        {/* <div className='flex animate-pulse'>
            <h1 className='font-bold text-[23px] text-green-300'>Percy</h1>
            <h2 className='text-pink-200 font-bold text-[30px]'>Studio</h2>
        </div> */}
    </div>
    <div className='flex justify-center md:justify-end w-full p-4 flex-col md:flex-row h-[50px]'>
        <ul className='flex'>
        <div className='flex animate-pulse'>
            <h1 className=' text-[33px] text-green-300 font-extrabold'>Percy.</h1>
            <h2 className='text-pink-200 font-extrabold text-[18px]'>art</h2>
        </div>
            {/* <li className='text-xs md:text-base cursor-pointer'>Home</li>
            <li className='text-xs md:text-base cursor-pointer'>Services</li>
            <li className='text-xs md:text-base cursor-pointer'>About</li>
            <li className='text-xs md:text-base cursor-pointer'>Contact</li> */}
        </ul>
    </div>
</div>

  )
}
