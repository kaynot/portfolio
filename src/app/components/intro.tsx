import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaSnapchat, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import img from "./images/file.png";
import man from "./images/Premium_Photo___Fun_3D_cartoon_illustration_of_an_indian_businessman-removebg-preview.png";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
export const Intro = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[500px]   ">
    {/* -- Social Icons Section */}
    <div className="flex flex-col gap-4 lg:gap-10 justify-center mx-auto lg:mx-10 my-4 lg:my-0 h-auto lg:h-full">
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
    
    {/* -- Image Section -- */}
    <div className="mx-auto lg:mx-0">
        <Image src={man} alt="cartoon" className="w-[300px] lg:w-[300px] h-[300px] lg:h-[500px] object-cover" />
    </div>
    {/* //Text and CV Section // */}
    <div className="w-full lg:w-[80%] flex flex-col justify-center h-auto lg:h-full mx-auto lg:mx-10 text-center lg:text-left my-4 lg:my-0">
        <h3 className="font-bold font-mono text-lg lg:text-sm mb-4">Welcome to my Portfolio</h3>
        <p className="font-serif text-2xl lg:text-[50px]">
            HI, I am Percy Djiwornu Konotey
        </p>
        <p className="font-bold text-lg lg:text-xl mt-2">Frontend Developer</p>

        <a href="/CV.pdf" download className="bg-black font-bold font-mono p-2 border border-pink-200 text-white rounded-3xl mt-2 flex items-center justify-center lg:justify-start w-[50%] lg:w-[12%] gap-2 hover:bg-pink-200 hover:text-black transition duration-500 transform hover:scale-110 mx-auto lg:mx-0">
            Download CV
            <AiOutlineDownload size={20} color="" className="lg:text-4xl animate-bounce" />
        </a>
    </div>
</div>

  );
};
