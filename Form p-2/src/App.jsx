import React from 'react'
import Navigation from './Components/Navigation'
import Information from './Components/Information'
import Form from './Components/Form'

const App = () => {
  return (
    <div className='h-screen w-full '>
      <Navigation/>
      <Information/>
      <Form/>
    </div>
  )
}

export default App