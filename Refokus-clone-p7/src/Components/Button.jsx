import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Button = ({title = "Get started"}) => {
  return (
    <div className=' w-40 rounded-full bg-white flex items-center justify-between px-3 py-1.5 '>{title} 
        <FaArrowRightLong/>
     </div>
  )
}

export default Button