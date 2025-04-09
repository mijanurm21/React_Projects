import React, { useState } from 'react'
import { useMotionValueEvent, useScroll } from "motion/react"
import image2 from '../Images/2.jpeg'
import image3 from '../Images/3.jpeg'
import image4 from '../Images/4.jpeg'
import image5 from '../Images/5.jpeg'


const Work = () => {

    

    const [images, SetImages] =  useState([
      {url : image2, top:"56%" , left:"47%" , isActive:true},
      {url : image3, top:"45%", left:"53%" , isActive:false},
      {url : image4, top:"47%", left:"45%" , isActive:false},
      {url : image5, top:"50%" , left:"54%" , isActive:false},
  ])

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(Math.floor(latest*100))
    showNHide(Math.floor(latest*100));
  })

  function imageshow(arr) {
    SetImages(prev =>
      prev.map((item, index) => ({
        ...item,
        isActive: arr.includes(index),
      }))
    );
  }

  const showNHide = (scrollval)=>{
      

    switch(scrollval){

      case 0:
        imageshow([])
        break;
      case 1:
        imageshow([0])
        break;
      case 3:
        imageshow([0,1])
        break;
      case 5:
        imageshow([0,1,2])
        break;
      case 8:
        imageshow([0,1,2,3])
        break;
      

    }
  }

  return (
    <div className='w-full mt-8'>
        <div className=' relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[60vh] leading-none select-none tracking-tight '>Work</h1>
            {images.map((item, index) => (
                item.isActive && <img key={index} className='absolute transform -translate-x-[50%] -translate-y-[50%] w-47 rounded-lg'
                 src={item.url} 
                 style = {{top: item.top, left: item.left}}/>
            ))}
          
        </div>    
    </div>
  )
}

export default Work