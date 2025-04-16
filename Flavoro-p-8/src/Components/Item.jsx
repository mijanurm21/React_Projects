import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { removeFromCart, increaseItem, decreaseItem } from '../Redux/Slices/CartSlice';

const Item = ({item}) => {
  const dispatch = useDispatch();
  // console.log(item)

  return (
    <div className='relative flex gap-3 shadow items-center h-[10vh] justify-evenly mb-7 rounded'>
         <MdDeleteOutline 
         
         onClick={() => dispatch(removeFromCart(item))}
         className='absolute text-lg right-1 top-0 cursor-pointer'/>

        <div className='h-[8vh] w-[4vw]'>
            <img src={item.img} className='object-cover' />
        </div>
        <div className='flex flex-col items-start'>
            <span className='font-semibold text-md'>{item.name}</span>
            <span className='font-semibold text-md'>{item.price}</span>
        </div>
        <div className='flex  gap-1 items-center justify-center'>
            
           
            <AiOutlineMinus onClick={()=>{
              dispatch(decreaseItem(item))
            }} className='border-1 border-grey-600 texl-xl font-medium rounded-sm cursor-pointer'/>   
             <span>{item.qty}</span>
            <AiOutlinePlus onClick={()=>{
              dispatch(increaseItem(item))
            }} className='border-1 border-grey-600 texl-xl font-medium rounded-sm cursor-pointer'/>         
        </div>
    </div>
  )
}

export default Item