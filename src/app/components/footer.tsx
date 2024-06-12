import React from 'react'
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaSnapchat, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
export const Footer = () => {
  return (
    <div className="h-auto w-full p-4">
    <div className="flex flex-col lg:flex-row h-full">
        {/* <!-- Logo and Developer Info --> */}
        <div className="w-full lg:w-[33%] p-2 text-center lg:text-left">
        <div className='flex animate-pulse'>
            <h1 className=' text-[33px] text-green-300 font-extrabold'>Percy.</h1>
            <h2 className='text-pink-200 font-extrabold text-[18px]'>art</h2>
        </div>
            <h1 className="font-bold text-white">Web Developer</h1>
            <p className="font-mono text-white">FrontEnd Developer</p>
        </div>
        {/* <!-- Navigation Links --> */}
        <div className="w-full lg:w-[33%] pt-8 lg:pt-2 text-center">
            <ul className="flex flex-col space-y-2 font-mono text-white">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* <!-- Social Media Handles --> */}
        <div className="w-full lg:w-[33%] pt-8 lg:pt-2 text-center">
            <h1 className="font-mono text-white">Social Media Handles</h1>
            <div className="flex justify-center gap-5 mt-4">
            <a href="https://github.com/kaynot" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} color="pink" className="lg:text-4xl cursor-pointer" />
            </a>
            <a href="https://wa.me/0559630343" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={32} color="pink" className="lg:text-4xl cursor-pointer" />
    </a>
    <a href="https://www.linkedin.com/in/percy-konotey-230a7b305/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} color="pink" className="lg:text-4xl cursor-pointer" />
    </a>
    <a href="mailto:percykaynot@gmail.com">
        <AiOutlineMail size={32} color="pink" className="lg:text-4xl cursor-pointer" />
    </a>
    <a href="https://www.facebook.com/brv.kaynot11" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} color="pink" className="lg:text-4xl cursor-pointer" />
    </a>
    <a href="https://twitter.com/kaynot1" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} color="pink" className="lg:text-4xl cursor-pointer" />
    </a>
    <a href="https://www.snapchat.com/add/brv_kaynot" target="_blank" rel="noopener noreferrer">
        <FaSnapchat size={32} color="pink" className="lg:text-4xl cursor-pointer" />
    </a>
            </div>
        </div>
    </div>
</div>

  )
}
