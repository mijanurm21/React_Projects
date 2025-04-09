import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl bg-zinc-700 mx-auto flex justify-between px-2 py-1 rounded-full mt-5'>
        <div className='flex gap-10 items-center'>
        <h2 className='text-xl flex items-center gap-1  mr-10 text-white'> 
            <img className='h-4 w-4 text-white' src="https://cdn.brandfetch.io/idZgdi6uSQ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="" />
            Refokus</h2>
        {["Home", "Work", "Culture", "", "News"].map((item, index) =>  {
           return item.length === 0 ? (
            <div key={index} style={{ height: "20px", width: "1px", backgroundColor: "black" }} />) 
            : (<a key={index} className='text-sm text-white'>{item}</a>)
        
        })}
        </div>
        <Button/>
    </div>
  )
}

export default Navbar