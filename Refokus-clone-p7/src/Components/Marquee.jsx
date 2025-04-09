import { div, h1 } from 'motion/react-client'
import { motion } from 'motion/react'
import React from 'react'

const Marquee = ({names, direction}) => {
  return (
    <div className='flex gap-17 mt-10 text-lg overflow-hidden whitespace-nowrap'>

        {names.map((name, index) => (
          <motion.div
            
            initial={{ x: direction === "left" ? "0%" : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : "0%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className='min-w-20'
          >
            {name}
          </motion.div>
        ))}

        {names.map((name, index) => (
            <motion.div 
            initial={{ x: direction === "left" ? "0%" : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : "0%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className='min-w-20'
            > {name}</motion.div>
        ))}
    </div>
  )
}

export default Marquee