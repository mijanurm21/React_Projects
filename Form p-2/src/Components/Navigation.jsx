import React from 'react'
import image1 from '../Images/navimage.png';

const Navigation = () => {
  return (
    <div className='relative p-1  h-[60px] '>
       <img src={image1} alt="Do coding" className='absolute h-12 w-12 left-6' />
    </div>
  )
}

export default Navigation