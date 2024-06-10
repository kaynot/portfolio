import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import img from "./images/file.png";
import man from './images/Premium_Photo___Fun_3D_cartoon_illustration_of_an_indian_businessman-removebg-preview.png'
import { AiOutlineDownload } from "react-icons/ai";
export const Intro = () => {
  return (
    <div>
      <div className="w-full h-[500px] flex  ">
        <div className="flex flex-col gap-10 justify-center mx-10 h-full   ">
          <FaGithub size={32} color="pink" className="lg:text-4xl" />
          <FaWhatsapp size={32} color="pink" className="lg:text-4xl" />
          <FaLinkedin size={32} color="pink" className="lg:text-4xl " />
        </div>
        <div>
        <Image src={man} alt="cartoon" className="w-[400px] h-[500px] " />
        </div>
        <div className=" w-[80%] flex flex-col justify-center h-full mx-10 ">
          <h3 className=" font-bold  font-mono  ">Welcome to my Portfolio</h3>
          <p className=" font-serif  text-[50px] ">
            HI, I am Percy Djiwornu Konotey
          </p>
          <p className="font-bold ">Frontend Developer</p>

          <a
            href="src\app\components\File\Percy-Djiwornu-Konotey-FlowCV-Resume-20240523.pdf"
            download
            className=" bg-gray-900  font-bold font-mono p-2 border border-green-300 text-white rounded-3xl mt-2 flex items-center w-[12%] gap-2"
          >
            Download CV
            <AiOutlineDownload size={20} color="white" className="lg:text-4xl animate-bounce"  />
          </a>
        </div>
        <div className="h-[70%] "></div>
      </div>
    </div>
  );
};
