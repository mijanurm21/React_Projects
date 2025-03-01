import React from "react";
import image1 from "../assets/d5389cc06b9d40c646878c60ac4bf7ed.png"

function Nav(){
  return (
    <div className="w-full h-13 flex place-content-between">
         <img src={image1} className="h-17 w-22 p-4"  />   
         <div className="flex justify-center gap-2 items-center">
            <h3>Menu</h3>
            <h3>Location</h3>
            <h3>About</h3>
            <h3>Contact</h3>
         </div>
         <button className="bg-red-500 px-3 m-2 text-white">Login</button>
     
    </div>
  )
  
}

export default Nav;