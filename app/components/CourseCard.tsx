import Link from 'next/link'
import React from 'react'

function CourseCard({channel}: any) {
  return (
    <div className=' h-full w-1/3  px-8  py-8 group transition-colors duration-200 dark:hover:bg-slate-900/80  bg-white dark:bg-slate-900 drop-shadow-lg rounded-lg cursor-pointer' key={channel.name}>
            <Link href={`/channels/${channel.name.replace(/\s/g, "-").toLowerCase()}`} className='flex flex-col gap-8 ' key={channel.name}>
              <h1 className='text-3xl  text-green-500 group-hover:text-sky-600 transition-colors duration-200 '>{channel.name}</h1>  
              <p className='text-slate-500/60 w-2/3 text-sm '>{channel.description}</p>
              <p className='text-slate-400 group-hover:text-green-300 transition-colors duration-200 text-sm'>Content type: {channel.contentType}</p>
              <p className='text-slate-500'>{channel.access}</p>
              </Link>
              </div>
  )
}

export default CourseCard
