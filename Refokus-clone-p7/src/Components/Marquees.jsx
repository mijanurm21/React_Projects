import React from 'react'
import Marquee from './Marquee'

const Marquees = () => {

    const images = [
        ["Hello" ,"My", "Name", "is",  "Mijanur", "an", "Engineering", "Student", "structure", "Algorithm", "Developement"],
        ["Hello" ,"My", "Name", "is",  "Mijanur", "an", "Engineering", "Student", "structure", "Algorithm", "Developement"],
     
    ]
  return (
    <div className='mt-20 px-3'>
        {images.map((item,index) => (<Marquee  key={index} direction={index === 0 ? "left" : "right"} names = {item}/>))}
    </div>
  )
}

export default Marquees