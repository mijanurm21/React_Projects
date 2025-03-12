import React, { useState } from 'react'
import First from './Components/First'
import Second from './Components/Second'


const App = () => {
  const[isStarted, setisStarted] = useState(false)

  const toggle = ()=>{
    setisStarted((prev) => !prev);
  }

  return (
    <div> 
      {isStarted ? <Second/> : <First handle = {toggle}/>}      
     
    </div>
  )
}

export default App