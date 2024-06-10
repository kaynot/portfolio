import React from "react";
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const Contact = () => {
  return (
    <div className="h-[600px]  p-10 bg-black ">
      <h1 className="text-[30px]  font-bold font-mono text-center">
        Contact me
      </h1>
      <p className=" text-center">   
      I am currently opened to full-time, contract or part-time opportunities
        in FrontEnd Development.
      </p>
      <div className="flex justify-center h-[400px] p-10">
        <div className="   w-[40%] p-2 rounded-l-2xl ">
          <h1 className="text-[20px] font-bold">Have an awesome project idea?</h1>
          <p>Let's work together</p>
          <ul className="mt-10  font-light flex flex-col space-y-4">
            <li className="flex"><AiOutlineMail size={25} color="pink" className="lg:text-4xl" />Email : percykaynot@gmail.com</li>
            <li className="flex"><AiOutlinePhone size={25} color="pink" className="lg:text-4xl" />Phone : +233 559 630 343</li>
            <li className="flex"><AiOutlineEnvironment size={25} color="pink" className="lg:text-4xl" />Location : Accra-Ghana</li>
            </ul>
        </div>
        <div className="  w-[40%] rounded-r-2xl">
            <form className="flex flex-col gap-4 mt-10">
                <input
                type="text"
                placeholder="Name"
                className="p-2 rounded-lg text-black w-[60%]" 
                />
                <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-lg text-black w-[60%]"
                />
                <textarea
                placeholder="Message"
                className="p-2 rounded-lg text-black w-[60%] h-[100px]"
                ></textarea>
                <button className="bg-pink-200 p-2 rounded-lg w-[20%] text-black ">Send</button>
            </form>
        </div>
      </div>
    </div>
  );
};
