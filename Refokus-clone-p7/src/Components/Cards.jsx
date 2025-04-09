import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div  className='max-w-screen-xl mx-auto flex gap-2 mt-20 py-20 px-15'>
        <Card width={"basis-2/5"} start={false} para={true} />
        <Card width={"basis-3/5"} start={true} para={false} hover=
        {true}/>
    </div>
  )
}

export default Cards