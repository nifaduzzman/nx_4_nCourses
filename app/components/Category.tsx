import React from 'react'
import { courses } from '@/data'
import Link from 'next/link'

function Category() {
  return (
    <section className='w-full h-[50vh] bg-slate-100 dark:bg-slate-800'>
      <div className='w-[80%] py-8 bg-slate-50 dark:bg-slate-900 mx-auto  px-4 h-[50vh] '>
        <h2 className='text-5xl  text-slate-700 dark:text-slate-400'>Popular Courses</h2>
        <div className='flex gap-8 my-4'>
          {
            courses.slice(0,3).map((course) => (
              <div className='w-1/3  px-8 py-8 bg-white dark:bg-slate-800 group dark:hover:bg-slate-800/90 drop-shadow-lg rounded-lg cursor-pointer' key={course.title}>
                <Link href={`/courses/${course.title.replace(/\s/g, "-").toLowerCase()}`} className='flex flex-col gap-8 '> 
                  <h1 className='text-3xl group-hover:text-sky-400 transition-all duration-2000  text-green-500 '>{course.title}</h1>
                  <p className='text-slate-500/60 w-2/3 text-sm '>{course.description}</p>
                  <p className='text-slate-400 group-hover:text-green-300z text-sm'>Instructor: {course.instructor}</p>
                  <p className='text-slate-500'>{course.duration}</p>
                </Link>
              </div>
            ))
          }


        </div>
        <div className='w-full flex justify-end'>
          <Link href={'/courses'} className='text-slate-500 underline hover:text-slate-600'>more courses</Link>
        </div>
      </div>
      
    </section>
  )
}

export default Category
