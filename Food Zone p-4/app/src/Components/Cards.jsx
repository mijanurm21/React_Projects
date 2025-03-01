import React from 'react'
import Button from './Button';

const Cards = ({data}) => {
    // console.log("hellow")
    // console.log(data);
  
   
    if (!data || data.length === 0) return <p>No data available</p>;
    return ( 
        <div className="flex flex-wrap gap-9 justify-center py-10">
            {data.map(({ name, price, text, image }, index) => ( 
                <div key={index} className=" relative w-[330px] h-[157px] border text-white flex gap-5 rounded ">
                    <img src={image} alt={name || "Product"} className="w-20 h-20 object-cover" />
                    <div>
                    <h3 className='mt-1'>{name || "No Name"}</h3>
                    <p className='mt-2'>{text || "No description available"}</p>
                    </div>
                    <div className=' absolute bottom-2 right-3'>
                        <Button text = {"$"+price.toFixed(2)}/>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Cards