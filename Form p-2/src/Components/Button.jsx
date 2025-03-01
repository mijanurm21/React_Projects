import React from 'react'

const Button = ({isTrue ,text, icon, onClick}) => {
  return (
    <div className=' flex'>
        <button type="button" onClick={onClick} className={` flex items-center justify-center h-[44px] text-center font-semibold text-xl rounded 
        ${isTrue ? 'w-full bg-white text-black border border-black gap-4 cursor-pointer' : 'w-[240px] bg-black text-white gap-4 cursor-pointer'}`}>
        {text}
        {icon}
        
        </button>


 
        
 
    </div>
  )
}

export default Button