import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex justify-between py-20 px-10 '>
        <div className='basis-1/2 '>
            <h1 className='text-[9.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>

        <div className='basis-1/2 flex gap-14'>
            <div className='1/3'>
                <h4 className='text-zinc-600  mb-10'>Socials</h4>
                {["Instagram", "Twitter", "Facebook"].map((item, index)=> <a key={index} className='block mt-3 text-zinc-500'> {item} </a>)}
            </div>
            <div className='1/3'>
                <h4 className='text-zinc-600  mb-10'>Steamia</h4>
                {["Home", "Work", "Career", "Contact"].map((item, index)=> <a key={index}  className='block mt-3 text-zinc-500 leading-none'> {item} </a>)}
            </div>
            <div className='1/3 flex flex-col text-end items-end justify-between '>
                <p className='w-53'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt laborum quasi nisi.</p>
                <button className='bg-blue-800 px-4 py-3 text-md w-32 '>empowerd.</button>

            </div>
        </div>
    </div>
  )
}

export default Footer