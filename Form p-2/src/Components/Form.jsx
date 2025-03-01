import React, { useState } from 'react'
import Button from './Button'
import { FaRegMessage } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import image2 from '../Images/image2.png'


const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  

  const submitHandle = (event) => {
    // event.preventDefault(); 
    console.log("Form Data:", formData);
  };
  return (
    <div className=' flex gap-20'>
      <form className=' flex flex-col ml-30 w-2/5 '>
      
        <div className='flex place-content-between mb-3'>
          <Button text = "VIA SUPPORT CHAT"  icon = {<FaRegMessage/>} />
          <Button text = "VIA CALL"  icon = {<IoMdCall />} />
        </div>
        <div>
          <Button isTrue = {true} text = "VIA EMAIL FORM" icon = {<MdEmail/>} />
        </div>
        <div className=' mt-5 relative'>
          <h3 className='absolute -top-3 left-2 bg-white px-2'>Name</h3>
          <input type="text" name='name' value={formData.name} onChange={handleChange}  className=' w-full border p-2 text-md' />
        </div>
        <div className=' mt-5 relative'>
          <h3 className='absolute -top-3 left-2 bg-white px-2'>E-mail</h3>
          <input type="text" name='email' value={formData.email} onChange={handleChange}  className=' w-full border p-2 text-md' />
        </div>
        <div className=' mt-5 relative'>
          <h3 className='absolute -top-3 left-2 bg-white px-2'>Text</h3>          
          <textarea name="text" value={formData.text} onChange={handleChange} className=' w-full border p-2 text-md w-[300px]' rows={5}></textarea>
          <Button text = 'Submit' onClick = {submitHandle}/>
        </div>
    

      </form>
      <div className='h-5'>
        <img src= {image2} className='h-95' />
      </div>

      <div>
        
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.text}</p>
      </div>
      
    </div>
    
  )
}

export default Form