import React from 'react'
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
export const Footer = () => {
  return (
    <div className="h-auto w-full p-4">
    <div className="flex flex-col lg:flex-row h-full">
        {/* <!-- Logo and Developer Info --> */}
        <div className="w-full lg:w-[33%] p-2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start animate-pulse">
                <h1 className="font-bold text-[23px] text-green-300">Percy</h1>
                <h2 className="text-pink-200 font-bold text-[30px] ">Studio</h2>
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
                <FaGithub size={32} color="pink" className="lg:text-4xl cursor-pointer" />
                <FaWhatsapp size={32} color="pink" className="lg:text-4xl cursor-pointer" />
                <FaLinkedin size={32} color="pink" className="lg:text-4xl cursor-pointer" />
                <AiOutlineMail size={32} color="pink" className="lg:text-4xl cursor-pointer" />
                <FaFacebook size={32} color="pink" className="lg:text-4xl cursor-pointer" />
                <FaTwitter size={32} color="pink" className="lg:text-4xl cursor-pointer" />
            </div>
        </div>
    </div>
</div>

  )
}
