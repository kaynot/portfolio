import React from 'react'
import { AiOutlineEdit, AiOutlineHtml5 } from 'react-icons/ai'
import { FaRegObjectGroup } from 'react-icons/fa'

export const Services = () => {
    const services = [
        {
        id: 0,
        title: 'Web Development',
        description: 'I use my knowledge of programming and web design to create and maintain websites. I am proficient in React, Typescript,Tailwind and JavaScript, and I have experience working with a variety of content management systems and e-commerce platforms.',
        icon:<AiOutlineHtml5 size={30} color="" className="lg:text-4xl" />    
    },
    {
        id: 1,
        title: 'Ui Design',
        description: 'Crafting a user interface (UI) requires a deep understanding of the end user. I create interfaces that are intuitive, easy to use, and visually appealing. I use tools like Figma to create wireframes and mockups that bring your vision to life.',
        icon: <FaRegObjectGroup size={30} color="" className="lg:text-4xl" />
    },
    {
        id: 2,
        title: 'Content writing',
        description: 'I create engaging, informative, and SEO-friendly content for websites, blogs, and social media. I have experience writing for a variety of industries, and I can help you develop a content strategy that will attract and retain your target audience.',
        icon: <AiOutlineEdit size={30} color="" className="lg:text-4xl" />
    },
]
  return (
    <div className='h-auto'>
    <h1 className='text-center text-[30px] font-mono font-bold '>My Services</h1>
    <div className='flex justify-center mt-10 flex-wrap'>
        <div className='flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-10  md:gap-y-4 '>
            {services.map(({ id, title, description, icon }) => (
                <div
                    key={id.toString()}
                    className='bg-black shadow-2xl cursor-pointer hover:bg-pink-200 hover:text-black transition duration-500 transform hover:scale-110 rounded-xl p-4 h-[200px] w-full sm:w-[45%] md:w-auto lg:w-[25%] max-w-[500px] border-pink-200 border'
                >
                    <h1 className='text-xl font-bold mb-4 flex gap-2'>
                        {title} {icon}
                    </h1>
                    <p className='text-sm'>{description}</p>
                </div>
            ))}
        </div>
    </div>
</div>

  )
}
