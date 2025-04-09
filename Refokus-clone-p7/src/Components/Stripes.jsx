import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {

    const data = [
        {"name" :  "Stripe 1", number : 11},
        {"name" :  "Stripe 2", number : 2},
        {"name" :  "Stripe 3", number : 48},
        {"name" :  "Stripe 4", number : 8},
        {"name" :  "Stripe 5", number : 34},
        {"name" :  "Stripe 6", number : 4},
    ]
  return (
    <div className='w-full mt-11'>
        <Stripe val = {data}/>
    </div>
  )
}

export default Stripes