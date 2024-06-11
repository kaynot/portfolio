import React from 'react'
import Image from "next/image";
export const Navbar = () => {
  return (
<div className='w-full h-[5%] pt-2 p-4 flex flex-col md:flex-row font-sans'>
    <div className='w-full md:w-[10%] h-[100%] mx-3'>
        <div className='flex animate-pulse'>
            <h1 className='font-bold text-[23px] text-green-300'>Percy</h1>
            <h2 className='text-pink-200 font-bold text-[30px] ml-2'>Studio</h2>
        </div>
    </div>
    <div className='flex justify-center md:justify-end w-full p-4 flex-col md:flex-row'>
        <ul className='flex flex-col md:flex-row gap-2 md:gap-10'>
            <li className='text-xs md:text-base'>Home</li>
            <li className='text-xs md:text-base'>Services</li>
            <li className='text-xs md:text-base'>About</li>
            <li className='text-xs md:text-base'>Contact</li>
        </ul>
    </div>
</div>

  )
}
