import React from "react";
import reactIcon from "./images/react.png";
import Image from "next/image";
import Javascrip from "./images/java-script.png";
import Typescript from "./images/typescript.png";
import HTML from "./images/html.png";
import PHP from "./images/php-programming-language.png";
import CSS from './images/css-3.png'
import Tailwind from './images/icons8-tailwind-css-48.png'
import Nextjs from './images/9114856761551941711-128.png'
import Git from './images/github-sign.png'
export const Skill = () => {
  const skills = [
    {
      id: 0,
      title: "ReactJs",
      img:  reactIcon ,
    },
    {
      id: 2,
      title: "Javascript",
      img:  Javascrip ,
    },
    {
      id: 3,
      title: "Typescript",
      img:  Typescript ,
    },
    {
      id: 4,
      title: "HTML",
      img:  HTML ,
    },
    {
      id: 5,
      title: "PHP",
      img:  PHP ,
    },
    {
      id: 6,
      title: "CSS",
      img:  CSS ,
    },
    {
      id: 7,
      title: "TailwindCSS",
      img:  Tailwind,
    },
    {
      id: 8,
      title: "NextJs",
      img:  Nextjs,
    },
    {
      id: 9,
      title: "Github",
      img:  Git,
    },
    
  ];
return (
    <div className="h-auto w-full py-10">
    <div>
        <h1 className="text-center text-[30px] font-mono font-bold">Technical Skills</h1>
    </div>
    <div className="mt-10 mx-4 lg:mx-10 flex flex-wrap gap-4 justify-center">
        {skills.map(({ id, title, img }) => (
            <div
                key={id.toString()}
                className="bg-pink-200 shadow-2xl rounded-xl h-[100px] w-[100px] p-6 flex items-center justify-center"
            >
                <Image src={img} alt={title} className="w-[50px] h-[50px]" />
            </div>
        ))}
    </div>
</div>

);
};
