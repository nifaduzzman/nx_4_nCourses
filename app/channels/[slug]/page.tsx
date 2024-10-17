import React from 'react'
import { notFound } from 'next/navigation'
import { creatorChannels, courses} from '@/data'
import Link from 'next/link'


function page({params}:{params:{slug:string}}) {
  const channel = creatorChannels.find((channel) => channel.name.replace(/\s/g, "-").toLowerCase() === params.slug)
  console.log(channel)
  const channelCourses:any = courses.filter((course) => course.channel === channel?.name)


  console.log("this is :",channelCourses)

  if(!channel) {
    notFound()
  }
  return (  
    <section className='w-full min-h-[90vh] bg-slate-100 dark:bg-slate-800  '>
      <div className='w-[80%] min-h-[90vh] bg-slate-50 dark:bg-slate-900 mx-auto flex flex-col gap-8  py-8 px-4'>
        <div className='flex w-full justify-center'>
          <h1 className='text-5xl text-slate-800 dark:text-slate-300'>{channel?.name}</h1>   
        </div>
        <p className='w-2/3 text-slate-400'>{channel?.description}</p>
        <div className='text-xl'>
          <h2 className=' text-slate-500 text-lg '>Content type: <span className='text-slate-700 dark:text-slate-300'> {channel?.contentType} </span></h2>
          <h2>Access: <span className='text-green-700 text-xl'> {channel?.access}</span></h2> 
        </div>
        <h1 className='text-5xl text-slate-800 dark:text-slate-300'>Courses</h1>
        <div className=' gap-6  mt-6 mx-4 grid grid-cols-3'>
          {
              channelCourses.map((course:any) => (
              <Link href={`/courses/${course.title.replace(/\s/g, "-").toLowerCase()}`} className='w-full rounded-xl bg-slate-800 h-[350px] px-2 py-4 flex flex-col gap-4' key={course.title}>
                <h1 className='text-green-500 text-3xl'>{course.title}</h1>
                <p className='w-2/3 text-slate-400'>{course.description}</p>
                <div className='text-xl'>
                  <h2 className=' text-slate-500 text-lg '>Channel:   <span className='text-slate-700 dark:text-slate-300'> {course.channel} </span></h2>
                  <h2>Instructor: <span className='text-slate-700 dark:text-slate-300'> {course.instructor} </span></h2>
                  <h2>Pirce: <span className='text-orange-500/70 text-3xl'> {course.price}</span></h2>
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
