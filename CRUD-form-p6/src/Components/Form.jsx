import React, { useState } from 'react'

const Form = ({setFormData, formData}) => {

    
    const [inputData, setInputData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleButton = (e)=>{
        e.preventDefault();         
        setFormData((prevData) => [...prevData, inputData]);         
        setInputData({ name: '', email: '', password: '' });

    }

  return (
    <div className='flex justify-center items-center '>
        <form onSubmit={handleButton} className='flex flex-col p-5 gap-11 justify-center border-3 h-[440px] w-[520px] border-emerald-800 rounded-xl relative'>
            <input required type="text" name="name"  value={inputData.name} onChange={handleChange} placeholder='Enter Name' className='border-2 text-xl outline-none px-2 py-1 rounded-xl' />
            <input required type="Email" name="email"  value={inputData.email} onChange={handleChange} placeholder='Enter Email' className='border-2 outline-none text-xl px-2 py-1 rounded-xl' />
            <input required type="password" name="password"  value={inputData.password} onChange={handleChange} placeholder='Enter Password' className='border-2 outline-none text-xl px-2 py-1 rounded-xl' />
            <button type='submit' className='bg-red-200 p-2 rounded-xl w-[9vw] absolute end-10 bottom-10'>Add</button>
        </form>
    </div>
  )
}

export default Form