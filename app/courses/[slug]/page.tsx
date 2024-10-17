import { courses } from '@/data'
import Link from 'next/link'
import React from 'react'


function page({params}:{params:{slug:string}}) {
  const course:any = courses.find((course) => course.title.replace(/\s/g, "-").toLowerCase() === params.slug)
  console.log("Okey")
  console.log( course)
  return (
    <section className='w-full min-h-[90vh] bg-slate-100 dark:bg-slate-800 '>
      <div className='w-[80%] min-h-[90vh] bg-slate-50 dark:bg-slate-900 mx-auto  py-8 px-4'>

        <div className='w-full flex justify-center'>
          <h1 className='text-5xl text-slate-800 dark:text-slate-300'>{course.title}</h1>

        </div>
        <div className=' mt-16'>

          <p className='w-2/3 text-slate-800 dark:text-slate-200'>{course.description}</p>
        </div>
        <div className='mt-20 text-slate-800 dark:text-slate-200'>

          <h1 className='text-3xl text-slate-800 dark:text-slate-300'>Source: <Link href={`/channels/${course.channel.replace(/\s/g, "-").toLowerCase()}`} className=' hover:underline'> {course.channel}</Link></h1>
          <h1 className='text-3xl text-slate-800 dark:text-slate-300'>Instructor: {course.instructor}</h1>
          <h2>duration: {course.duration}</h2>
          <h2>Topics: {course.category}</h2>
          <h2 className='flex items-center'>Price: <span className='text-2xl text-green-400'> {course.price}</span></h2>



        </div>
        <div className='w-full flex justify-end px-20'>
          
           <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Enroll</button>

        </div>

      </div>
    </section>
  )
}

export default page
