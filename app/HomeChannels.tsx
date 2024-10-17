import React from 'react'
import { creatorChannels } from '@/data'
import Link from 'next/link'
import CourseCard from './components/CourseCard'
function HomeChannels() {

  return (
    <section className='w-full h-[50vh] bg-slate-100 dark:bg-slate-900'>
      <div className='w-[80%] bg-slate-50 dark:bg-slate-800 mx-auto gap-8 px-4 h-[50vh] p-20 flex overflow-hidden'>
      
        {
          creatorChannels.slice(0,3).map((channel) => (
            <CourseCard channel={channel}/>
          ))
        }

      </div>
      
    </section>
  )
}

export default HomeChannels
