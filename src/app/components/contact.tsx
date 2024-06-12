import React from "react";
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const Contact = () => {
  return (
    <div className="h-auto p-10  ">
    <h1 className="text-[30px] font-bold font-mono text-center text-white">
        Contact me
    </h1>
    <p className="text-center text-white">
        I am currently open to full-time, contract, or part-time opportunities in FrontEnd Development.
    </p>
    <div className="flex flex-col lg:flex-row justify-center h-auto lg:h-[400px] p-10">
        <div className="w-full lg:w-[40%] p-2 rounded-l-2xl text-white">
            <h1 className="text-[20px] font-bold">Have an awesome project idea?</h1>
            <p>Let's work together</p>
            <ul className="mt-10 font-light flex flex-col space-y-4">
                <li className="flex items-center">
                    <AiOutlineMail size={25} color="pink" className="lg:text-4xl mr-2" />
                    Email: percykaynot@gmail.com
                </li>
                <li className="flex items-center">
                    <AiOutlinePhone size={25} color="pink" className="lg:text-4xl mr-2" />
                    Phone: +233 559 630 343
                </li>
                <li className="flex items-center">
                    <AiOutlineEnvironment size={25} color="pink" className="lg:text-4xl mr-2" />
                    Location: Accra-Ghana
                </li>
            </ul>
        </div>
        <div className="w-full lg:w-[40%] rounded-r-2xl mt-10 lg:mt-0">
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded-lg text-black w-full lg:w-[80%]" 
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 rounded-lg text-black w-full lg:w-[80%]"
                />
                <textarea
                    placeholder="Message"
                    className="p-2 rounded-lg text-black w-full lg:w-[80%] h-[100px]"
                ></textarea>
                <button className="bg-pink-200 p-2 rounded-lg w-[50%] lg:w-[20%] text-black">
                    Send
                </button>
            </form>
        </div>
    </div>
</div>

  );
};
