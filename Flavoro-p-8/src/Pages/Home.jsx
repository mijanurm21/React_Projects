import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import CategoryMenu from '../Components/CategoryMenu'
import Cart from '../Components/Cart'

const Home = () => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <div className='px-3 py-2'>
      <Navbar setSearchQuery={setSearchQuery}/>
      <CategoryMenu setCategory={setCategory}/>
      <Cards category={category} searchQuery={searchQuery}/>
      <Cart/>
    </div>
  )
}

export default Home