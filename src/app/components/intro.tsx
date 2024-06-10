import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import img from "./images/file.png";
export const Intro = () => {
  return (
    <div>
      <div className="w-full h-[500px] flex  ">
        <div className="flex flex-col gap-10 justify-center mx-10 h-full   ">
          <FaGithub size={32} color="pink" className="lg:text-4xl" />
          <FaWhatsapp size={32} color="pink" className="lg:text-4xl" />
          <FaLinkedin size={32} color="pink" className="lg:text-4xl " />
        </div>
        <div className=" w-[40%] flex flex-col justify-center h-full mx-10 ">
          <h3 className=" font-bold  font-mono  ">Welcome to my Portfolio</h3>
          <p className=" font-serif  text-[50px] ">
            HI, I am Percy Djiwornu Konotey
          </p>
          <p className="font-bold ">Frontend Developer</p>

          <a
            href="src\app\components\File\Percy-Djiwornu-Konotey-FlowCV-Resume-20240523.pdf"
            download
            className=" bg-pink-200 text-black font-bold font-mono p-2  rounded-3xl mt-2 flex items-center w-[20%] gap-2"
          >
            Download CV
            <Image src={img} alt="CV" className="w-[20px] h-[20px] " />
          </a>
        </div>
        <div className="h-[70%] "></div>
      </div>
    </div>
  );
};
