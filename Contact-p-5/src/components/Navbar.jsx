import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px] bg-white rounded-md flex justify-center items-center gap-3'>
        <img src="/public/logo.svg" alt="logo" />
        <h1 className='text-2xl'>Firebase Contact App</h1>

    </div>
  )
}

export default Navbar