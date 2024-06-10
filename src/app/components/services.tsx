import React from 'react'

export const Services = () => {
    const services = [
        {
        id: 0,
        title: 'Web Development',
        description: 'I use my knowledge of programming and web design to create and maintain websites. I am proficient in HTML, CSS,Tailwind and JavaScript, and I have experience working with a variety of content management systems and e-commerce platforms.',
    },
        {
        id: 1,
        title: 'Ui Design',
        description: 'Crafting a user interface (UI) requires a deep understanding of the end user. I create interfaces that are intuitive, easy to use, and visually appealing. I use tools like Figma and Adobe XD to create wireframes and mockups that bring your vision to life.',
        },
        {
        id: 2,
        title: 'Content writing',
        description: 'I create engaging, informative, and SEO-friendly content for websites, blogs, and social media. I have experience writing for a variety of industries, and I can help you develop a content strategy that will attract and retain your target audience.',
        },
]
  return (
    <div className='h-[400px]'>
            <h1 className='text-center text-[30px] font-mono font-bold'>My Services</h1>
        <div className=' flex justify-center mt-10  ' >
    <div className='text-black  flex space-x-10'>
        {services.map(({id, title, description}) => (
            <div key={id.toString()} className='bg-white shadow-2xl cursor-pointer hover:bg-pink-200 transition duration-500 transform hover:scale-110 rounded-xl p-4 h-[200px] w-[400px] border-green-300 border '>
                <h1 className='text-xl font-bold mb-4'>{title}</h1>
                <p className='text-sm'>{description}</p>
            </div>
        ))}
    </div>

        </div>
    </div>
  )
}
