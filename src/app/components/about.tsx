import React from "react";
import Image from "next/image";
import img from "./images/percy.jpeg";
import { FaGithub, FaGoogle, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const About = () => {
  return (
    <div className="h-[500px] my-10">
      <h1 className="text-center my-10 font-bold text-[30px] font-mono">About Me</h1>
      <div className="flex mx-10 gap-8">
        <div className="h-[500px] w-[50%]  flex justify-end">
          <Image
            src={img}
            alt="Personal img"
            className="w-[50%] h-[80%]  rounded-full border border-green-300"
          />
        </div>
        <div className="h-[500px] w-[30%] ">
          <div className="text-[15px] ">
            I'm a passionate front-end developer with a love for creating
            beautiful and functional web applications. With expertise in React, Typescript, Tailwind
            CSS, and JavaScript. <p>I build responsive and user-friendly websites
            that provide seamless experiences across all devices. I enjoy
            solving problems and continuously learning new technologies to keep
            my skills up-to-date.</p> When I'm not coding, you can find me exploring
            the latest web design trends or working on personal projects. <p className="mt-2 font-bold text-2xl ">Let's
            build something amazing together!</p>
          </div>
          <div className="flex gap-5 mt-10">
            <FaGithub size={32} color="pink" className="lg:text-4xl" />
            <FaWhatsapp size={32} color="pink" className="lg:text-4xl" />
            <FaLinkedin size={32} color="pink" className="lg:text-4xl " />
            <AiOutlineMail size={32} color="pink" className="lg:text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
