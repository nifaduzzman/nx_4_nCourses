import Link from 'next/link';
import React from 'react'
import ThemeToogle from './ThemeToogle';
import { CgProfile } from "react-icons/cg";
import Navlink from './Navlink';

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "/"
    },{
      name:"Courses",
      path:"/courses"
    },{
      name:"Channels",
      path:"/channels"
    }
  ]
  return (
    <div  className='flex justify-between items-center p-4 md:px-20 text-slate-600 hover:text-slate-900 bg-slate-200 border-b  dark:bg-slate-800 dark:text-slate-200 '>
      <h1 className='text-4xl'><Link href="/">nCourses</Link></h1>
  
        <ul className='flex gap-8 md:gap-20 text-lg '>
          {
            navLinks.map((link) => (
              <Navlink link={link} key={link.path}/>
            ))
          }

        </ul>    
        <div className='flex gap-8 items-center text-2xl '>
          <ThemeToogle />
          <Link href={'/profile'} className='p-2'><CgProfile/></Link>
        </div>
    </div>
  )
}

export default Navbar
