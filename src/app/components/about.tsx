import React from "react";
import Image from "next/image";
import img from "./images/percy.jpeg";
import { FaGithub, FaGoogle, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const About = () => {
  return (
    <div className="h-auto my-10">
    <h1 className="text-center my-10 font-bold text-[30px] font-mono">About Me</h1>
    <div className="flex flex-col lg:flex-row mx-4 lg:mx-10 gap-8">
        {/* <!-- Image Section --> */}
        <div className="h-auto lg:h-[500px] w-full lg:w-[50%] flex justify-center lg:justify-end">
            <Image
                src={img}
                alt="Personal img"
                className="w-[80%] lg:w-[50%] h-auto lg:h-[80%] rounded-full border border-green-300"
            />
        </div>
        
        {/* <!-- Text Section --> */}
        <div className="h-auto lg:h-[500px] w-full lg:w-[50%] flex flex-col justify-center">
            <div className="text-[15px] p-4 lg:p-0">
                I'm a passionate front-end developer with a love for creating beautiful and functional web applications. With expertise in React, TypeScript, Tailwind CSS, and JavaScript. 
                <p>I build responsive and user-friendly websites that provide seamless experiences across all devices. I enjoy solving problems and continuously learning new technologies to keep my skills up-to-date.</p> 
                When I'm not coding, you can find me exploring the latest web design trends or working on personal projects. 
                <p className="mt-2 font-bold text-2xl">Let's build something amazing together!</p>
            </div>
            <div className="flex gap-5 mt-4 lg:mt-10 justify-center lg:justify-start">
                <FaGithub size={32} color="pink" className="cursor-pointer" />
                <FaWhatsapp size={32} color="pink" className="cursor-pointer" />
                <FaLinkedin size={32} color="pink" className="cursor-pointer" />
                <AiOutlineMail size={32} color="pink" className="cursor-pointer" />
            </div>
        </div>
    </div>
</div>

  );
};
