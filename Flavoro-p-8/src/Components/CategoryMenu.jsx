import React, { useState } from 'react'
import Button from './Button'

const CategoryMenu = ({ setCategory }) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Find the Best Food</h1>
      <div className='flex gap-5 mb-8'>
        {["All", "Breakfast", "Lunch", "Dinner", "Snacks"].map((cat) => (
          <Button key={cat} name={cat} onClick={() => setCategory(cat)} />
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu