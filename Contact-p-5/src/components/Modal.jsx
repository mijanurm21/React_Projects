import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import AddandUpdata from './AddandUpdata';


const Modal = ({isOpen, onClose, children}) => {
  return (
    <>
    {isOpen && 
      <> 
      <div className=' mt-[-30%] relative z-50 min-h-[200px] max-w-[80%] bg-white p-3'>
        
        <div className='flex justify-end '>
        <IoCloseOutline className='text-2xl cursor-pointer' onClick={onClose}/>
        </div>
        {children}
      </div>
      
      <div onClick={onClose} className='backdrop-blur  absolute  top-0 h-screen w-full '/>
      </>

    
    
    }
    
    </>
    
  )
}

export default Modal