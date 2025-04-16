import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../Redux/Slices/CartSlice'
import toast, { Toaster } from 'react-hot-toast';

const Card = ({item}) => {
    const dispatch = useDispatch();
    // console.log(item)

    const handleToast = (name)=>{
        toast.success(`Added ${name}`);
    }
  return (

    <>
    <Toaster position="top-center"  reverseOrder={false}/>
    <div className='m-5'>
        <div className=' w-60 h-85  p-2 overflow-hidden rounded-lg flex flex-col place-content-evenly  '>
            <div className=' h-40 rounded-lg  mb-2 hover:scale-105 duration-500 overflow-hidden flex items-center justify-center'>
                <img src= {item.img} className='size-[27vh] object-contain'/>
            </div>

        <div className='flex flex-col  gap-3'>
            <div className='flex place-content-between '>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
            </div>
            <div>
                    <p>{item.desc.slice(0,50)}</p>
            </div>
            <div className='flex place-content-between'>
                    <h3>
                        {item.rating}
                    </h3>
                    <Button 
                    onClick={()=> {                       
                        dispatch(
                            addtoCart({                             
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                img: item.img,
                                desc: item.desc,
                                rating: item.rating,
                                qty : Number(1)
                                                         
                            })
                        )
                        handleToast(item.name);}
                    }
                       
                        name={"Add"} green={true}/>
            </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Card