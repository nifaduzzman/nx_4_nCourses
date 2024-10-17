import { courses } from '@/data'
import Link from 'next/link'
import React from 'react'


function page() {
  return (
    <section className='w-full min-h-[90vh] bg-slate-100 dark:bg-slate-800  '>
      <div className='w-[80%] min-h-[90vh] bg-slate-50 dark:bg-slate-900 mx-auto  py-8 px-4'>
        <h1 className='text-5xl text-slate-800 dark:text-slate-300'>Courses </h1>
      <div className=' gap-6  mt-6 mx-4 grid grid-cols-3'>
        {
          courses.map((course) => (
            <Link href={`/courses/${course.title.replace(/\s/g, "-").toLowerCase()}`} className='w-full rounded-xl  bg-slate-800 h-[350px] px-2 py-4 flex flex-col gap-4' key={course.title}>
              <h1 className='text-green-500 text-3xl'>{course.title}</h1>
              <p className='w-2/3 text-slate-400'>{course.description}</p>
              <div className='text-xl'>
                <h2 className=' text-slate-500 text-lg '>Channel:   <span className='text-slate-700 dark:text-slate-300'> {course.channel} </span></h2>
                <h2 className=' text-slate-500 text-lg'>Instructor: <span className='text-slate-700 dark:text-slate-300'> {course.instructor} </span></h2>
              </div>
              <div>
                <h2 className='text-slate-500'>Duration: <span className='text-green-700 text-xl'> {course.duration}</span></h2>
                <h2 className='flex items-center text-slate-500'>Price: <span className='text-orange-500/70 text-3xl'> {" "+course.price}</span></h2>
              </div>
            </Link>  
          ))
        }
        </div>
        
      </div>
      
    </section>
  )
}

export default page
