import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'

const Products = () => {

    const [pos, setPos] = useState(0)

    const data = [
        {title : "Artiquel", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint temporibus sed mollitia rerum ipsa nisi facere dolore.", live:true, case:false},
        {title : "PPI", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint temporibus sed mollitia rerum ipsa nisi facere dolore.", live:true, case:false},
        {title : "Hotmail", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint temporibus sed mollitia rerum ipsa nisi facere dolore.", live:true, case:true},
        {title : "Yaahoo", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint temporibus sed mollitia rerum ipsa nisi facere dolore.", live:true, case:true}
    ]

    const mover = (val)=>{
      setPos(val*17)
    }
  return (
    
    <div className='mt-6 relative'>
        {data.map((item, index) => (<Product mover={mover} key={index} index={index} val = {item}/>))}
        
        <div className='absolute top-0 w-full h-full pointer-events-none'>  {/*ye pura cover kiy h*/ }
          <motion.div   
          initial={{y:pos}}
          animate={{y:pos+`rem`}}
          className='window absolute w-[25rem] h-[17rem] bg-white left-[30%] overflow-hidden'>

            <motion.div  animate={{y: -pos+`rem`}} className='h-full w-full bg-sky-300'></motion.div>
            <motion.div animate={{y: -pos+`rem`}}  className='h-full w-full bg-sky-400'></motion.div>
            <motion.div  animate={{y: -pos+`rem`}} className='h-full w-full bg-sky-500'></motion.div>
            <motion.div  animate={{y: -pos+`rem`}} className='h-full w-full bg-sky-600'></motion.div>
          </motion.div>

        </div>
    </div>
  )
}

export default Products