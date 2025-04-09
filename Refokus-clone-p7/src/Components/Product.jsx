import React from 'react'
import Button from './Button'

const Product = ({val, mover, index}) => {
  return (
    <div onMouseEnter={()=>{mover(index)}} className='flex items-center justify-between h-[17rem] p-9 border-b-2'>
        <h1 className='text-6xl'>{val.title}</h1>
        <div className='w-1/3 '>
            <p>{val.desc}</p>
            <div className='flex gap-8 mt-3'>
                {val.live && <Button/>}
                {val.case && <Button title={"Case Study"}/>}
            </div>
        </div>
    </div>
  )
}

export default Product