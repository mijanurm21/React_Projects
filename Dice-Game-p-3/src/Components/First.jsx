import React from 'react'

const First = ({handle}) => {
  return (
    <div className=' flex justify-center items-center gap-4  m-5'>
    <div className='w-[650px] h-[520px]'>
    <img src="/public/Images/dices.png" alt="dice image" />
    </div>
    <div>
      <h1 className='font-bold text-5xl'>Dice Game</h1>
      <button onClick={handle} className='bg-black p-2 px-7 cursor-pointer text-white'>Play Now</button>
    </div>
  </div>
  )
}

export default First