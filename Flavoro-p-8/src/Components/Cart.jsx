import React, { useState } from 'react'
import Item from './Item';
import { IoIosClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



const Cart = () => {
    const navigate = useNavigate();

   const[active, setActive] =  useState(false);
   const cartItem = useSelector((state)=>state.cart.cart)
   const totalqty = cartItem.reduce((totalqty, item) => totalqty + item.qty, 0)
   const totalprice = cartItem.reduce((totalprice, item)=> totalprice + item.qty*item.price, 0)
   const handleToast = (name)=>{
    toast.success("No item in Cart");
}
  return (
    <>
         <Toaster position="top-center"  reverseOrder={false}/>
        <div className={` z-50 fixed  top-0 right-0 bg-white lg:w-[24vw] h-full w-full  duration-300 ${active ? 'translate-x-0' : 'translate-x-full'} `}>           
            <div className='flex justify-between items-center p-3'>
                <span className='font-semibold text-2xl'>My Order</span>
                <IoIosClose onClick={()=>(setActive(!active))} className='border-1 rounded-md hover:border-red-600 hover:text-red-600 border-grey-600 text-lg font-bold cursor-pointer'/>
            </div>


            {
               cartItem.length > 0 ? cartItem.map((item, index)=>(
                    <Item key={index} item={item}/>
                )) : <h2>Your cart is empty.</h2>
            }
            
            
            <div className='absolute flex flex-col bottom-1 gap-2 mb-2 justify-center px-7'>
                <span>Items: {totalqty}</span>
                <span>Total Amounts: {totalprice} </span>
                <button onClick={()=> totalqty > 0 ? navigate("/success") : handleToast()} className='bg-green-400 px-2 py-1 rounded-lg lg:w-[20vw] w-full cursor-pointer'>Checkout</button>
            </div>
        </div>
       
        <FiShoppingCart  onClick={()=>setActive(true)} className={` fixed shadow-md bottom-10 right-13 rounded bg-white text-3xl font-semibold p-1 z-40 cursor-pointer ${totalqty > 0 && "animate-bounce delay-500 transition-all"}`}/>
        
    </>
  )
}

export default Cart