import React from 'react'

const Button = ({name, green=false, onClick}) => {
  return (
    
    <div onClick={onClick}  className={`rounded-lg px-2 py-1 hover:bg-[#47eb47] ${
      green ? 'bg-[#47eb47]' : ''
    } cursor-pointer`}>
        {name}
    </div>
  )
}

export default Button