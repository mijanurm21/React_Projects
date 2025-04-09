import React from "react";
import shoes from "../assets/shoes.png"


function Page(){
  return (
    <div className="h-130  mx-40 my-20 flex ">
        <div className="w-1/2 ">
            <h1 className="text-7xl font-bold leading-18">YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
            <p className="leading-7 mt-5 w-3/4">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="flex gap-10 mt-5">
                <button className="bg-red-600 px-3 py-2">Shop Now</button>
                <button className="px-3 py-2 border-1">Category</button>
            </div>
        </div>
       

        <div>
            <img src= {shoes} className=" h-120 w-120" />
        </div>
     
    </div>
  )
  
}

export default Page;