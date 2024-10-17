import React from 'react'

function NotFound() {
  return (
    <div className='w-full min-h-[90vh] bg-slate-100 dark:bg-slate-800  flex justify-center items-center text-8xl text-slate-900 dark:text-slate-300 '>
      <div className='flex items-center'>
        Invalid URL <span className='text-green-500 '>.</span> 
      </div>
    </div>
  )
}

export default NotFound;
