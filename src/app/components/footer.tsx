import React from 'react'
import Image from "next/image";
import icon from '../components/images/icon.png'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
export const Footer = () => {
  return (
    <div className='h-[200px] bg-black '>
        <div className=' h-full flex '>
<div className='h-full w-[50%] p-2'>
<Image src={icon} alt='logo' className='w-[20%] h-[50%]'/>
<h1 className='font-bold'>Web Developer</h1>
<p className='font-mono'>FrontEnd Developer</p>
</div>
<div className=' h-full w-[50%] pt-8'>
<ul className='flex flex-col space-y-2 text-center font-mono  '>
    <li>Home</li>
    <li>About</li>
    <li>Service</li>
    <li>Contact</li>
</ul>
</div>
<div className=' h-full w-[50%]  text-center pt-8'>
    <h1 className='font-mono'>Social Media Handles</h1>
    <div className='flex gap-5 justify-center mt-10'>
    <FaGithub size={32} color="pink" className="lg:text-4xl" />
            <FaWhatsapp size={32} color="pink" className="lg:text-4xl" />
            <FaLinkedin size={32} color="pink" className="lg:text-4xl " />
            <AiOutlineMail size={32} color="pink" className="lg:text-4xl" />
            <FaFacebook size={32} color="pink" className="lg:text-4xl" />
            <FaTwitter size={32} color="pink" className="lg:text-4xl" />

            </div>
    </div>
        </div>

    </div>
  )
}
