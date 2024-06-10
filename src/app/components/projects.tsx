import React from 'react'

export const Projects = () => {
    const projects = [
        {
            id:0,
            title: 'Project 1',
            description: 'This is a project description'
        }
    ]
  return (
    <div className='h-[700px]'>
        <h1 className='text-center'>Featured Projects</h1>
        <div className='flex justify-center mt-10'>
        {projects.map(({id, title, description}) => (
            <div key={id.toString()} className='bg-pink-200 shadow-2xl rounded-xl p-4 h-[600px] w-[500px] border-green-300 border '>
                <h1 className='text-xl font-bold underline'>{title}</h1>
                <p className='text-sm'>{description}</p>
            </div>
        ))}
</div>
    </div>
  )
}
