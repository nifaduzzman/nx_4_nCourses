import React from 'react'

function page({params}:{params:{slug:string}}) {
  return (
    <section className='w-full min-h-[90vh] bg-slate-100 dark:bg-slate-800 '>
      <div className='w-[80%] min-h-[90vh] bg-slate-50 dark:bg-slate-900 mx-auto  py-8 px-4'>

      </div>
      {params.slug}
    </section>
  )
}

export default page
