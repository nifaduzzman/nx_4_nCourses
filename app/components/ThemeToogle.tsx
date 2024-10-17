"use client"
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";



function ThemeToogle() {
  const [darkTheme, setDarkTheme] = useState(true)
  useEffect(() => {
    if(localStorage.getItem('theme') === 'light'){
      setDarkTheme(false)
    }
  },[])

  useEffect(() => {
    if(darkTheme){
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }else{
      localStorage.setItem('theme', 'light')  
      document.documentElement.classList.remove('dark')
    }
  },[darkTheme])
  return (
    <>
      {
        darkTheme?
        <CiLight className="text-2xl cursor-pointer" onClick={() => setDarkTheme(false)}/>
        : <MdDarkMode className="text-2xl cursor-pointer" onClick={() => setDarkTheme(true)}/>
      }
      
    </>
  )
}

export default ThemeToogle
