import React from 'react'
import Button from './Button'

const Top = ({handle}) => {
  return (
    <div className='h-[160px] bg-[#323334]'>
        <div className=' px-15 py-7 flex place-content-between'>
            <img src="./public/images/logo.svg" alt="" />
            <input type="text" placeholder='Search here' className='text-white border w-[18vw]' onChange={(e) => handle(e.target.value.toLowerCase())} />
        </div>
        <div className='flex justify-center gap-[2vw] items-center mt-7'>
            <Button text = {"All"}/>
            <Button text= {"Breakfast"}/>
            <Button text= {"Lunch"}/>
            <Button text= {"Dinner"}/>
        </div>
    </div>
  )
}

export default Top