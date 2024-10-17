import React from 'react'
import { creatorChannels } from '@/data'   
import Link from 'next/link'

function page() {
  return (
    <section className='w-full min-h-[90vh] bg-slate-100 dark:bg-slate-800  '>
      <div className='w-[80%] min-h-[90vh] bg-slate-50 dark:bg-slate-900 mx-auto  py-8 px-4'>

        <h1 className='text-5xl text-slate-800 dark:text-slate-300'>Channels </h1>
        <div className=' gap-6  mt-6 mx-4 grid grid-cols-3'>
          {
            creatorChannels.map((channel) => (
              <Link href={`/channels/${channel.name.replace(/\s/g, "-").toLowerCase()}`} className='w-full rounded-xl bg-slate-800 h-[350px] px-2 py-4 flex flex-col gap-8' key={channel.name}>  
                <h1 className='text-green-500 text-3xl'>{channel.name}</h1>
                <p className='w-2/3 text-slate-400'>{channel.description}</p>
                <div className='text-xl'>
                  <h2 className=' text-slate-500 text-lg '>Content type: <span className='text-slate-700 dark:text-slate-300'> {channel.contentType} </span></h2>
                  <h2>Access: <span className='text-green-700 text-xl'> {channel.access}</span></h2>
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
