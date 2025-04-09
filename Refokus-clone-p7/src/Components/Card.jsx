import { motion } from 'motion/react'
import React from 'react'

const Card = ({width , start, para , hover}) => {
  return (
    <motion.div 
    whileHover={{
        backgroundColor: hover ? "#7443ff" : undefined,
        padding: "25px",
      }}
       className={`bg-zinc-600 ${width}  h-[20rem] rounded-lg mb-5 flex justify-between flex-col px-6 py-3`}>
            <motion.div >
                
                <h3>Some heading</h3>
                <h1 className='text-2xl mt-4'>Whatever Heading.</h1>
            </motion.div>
            <motion.div >
                {
                    start && (
                        <>
                            <h1 className='text-5xl'>Start a Project</h1>
                            <button className='rounded-full px-5 py-2 border border-zinc-700 mt-4'>Contact Us</button>
                        </>
                    )
                }
                {
                    para && (<p className='text-zinc-600'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>)
                }
            </motion.div>
    </motion.div>
  )
}

export default Card