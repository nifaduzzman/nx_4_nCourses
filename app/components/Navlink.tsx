 'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import React from 'react'

function Navlink({link}: any) {
  const pathName =  usePathname()
  console.log(pathName)
  return (
    <li key={link.path} className={`px-4 hover:text-green-600 dark:hover:text-green-600 ${pathName === link.path? 'text-green-500 dark:text-green-500' : ''} `}>
      <Link href={link.path} className='px-4'>
        {link.name}
      </Link>
    </li>
  )
}

export default Navlink
