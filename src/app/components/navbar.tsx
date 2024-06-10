import React from 'react'
import Image from "next/image";
import icon from '../components/images/icon.png'
export const Navbar = () => {
  return (
<div className='w-full h-[5%] pt-2 p-4 flex font-sans  '>
    <div className='w-[10%] h-[100%] mx-3'>
        <Image src={icon} alt='logo' className='w-[50%] h-[60%]'/>
    </div>
    <div className='flex justify-end w-full p-4 md:flex-row flex-col'>
        <ul className='flex gap-2 md:gap-10 '>
            <li className='text-xs md:text-base'>Home</li>
            <li className='text-xs md:text-base'>Services</li>
            <li className='text-xs md:text-base'>About</li>
            <li className='text-xs md:text-base'>Contact</li>
            <li className='text-xs md:text-base animate-bounce'>Hire ME</li>
        </ul>
    </div>
</div>
  )
}
