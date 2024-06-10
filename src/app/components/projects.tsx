import React from 'react'
import Image from "next/image";
import todo from './images/todo.png'
import kids from './images/bookstore.png'
import portfolio from './images/portfolio.png'

export const Projects = () => {
    const projects = [
        {
            id:0,
            title: 'Todolist App',
            img:todo
        },
        {
            id:1,
            title: 'Kids Bookstore App',
            img:kids
        },
        {
            id:2,
            title: 'Portfolio',
            img:portfolio
        },
    ]
  return (
    <div className='h-[700px] mx-4'>
        <h1 className='text-center font-bold text-[30px] font-mono'>Featured Projects</h1>
        <div className='flex justify-center mt-10 gap-3'>
        {projects.map(({id, title,img }) => (
            <div key={id.toString()} className='shadow-2xl rounded-xl p-4 h-[600px] w-[40%] border-green-300 border '>
                <h1 className='text-xl font-bold text-center'>{title}</h1>
                <Image src={img} alt="project" className='w-[100%] h-[95%]  p-10' />
                
            </div>
        ))}
</div>
    </div>
  )
}
