import React from 'react'
import Image from "next/image";
export const Navbar = () => {
  return (
<div className='w-full h-[5%] pt-2 p-4 flex font-sans  '>
    <div className='w-[10%] h-[100%] mx-3'>

      <div className='flex animate-pulse'> <h1 className='flex font-bold text-[23px] text-green-300 '>Percy</h1><h2 className=' text-pink-200 font-bold text-[30px]'>Studio</h2></div>
    </div>
    <div className='flex justify-end w-full p-4 md:flex-row flex-col'>
        <ul className='flex gap-2 md:gap-10 '>
            <li className='text-xs md:text-base'>Home</li>
            <li className='text-xs md:text-base'>Services</li>
            <li className='text-xs md:text-base'>About</li>
            <li className='text-xs md:text-base'>Contact</li>
        </ul>
    </div>
</div>
  )
}
