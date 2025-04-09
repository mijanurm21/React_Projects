import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Modals from './Modals';

const Members = ({formData, setFormData}) => {
    

    useEffect(() => {
        console.log("Form Data:", formData);
    }, [formData]);

    const[isupdate, SetisUpdate] = useState(false);
    const[selected, setSelected] = useState(null);

    const handleUpdate = (index)=>{
        setSelected(formData[index])
      
        SetisUpdate(true);
    }

    const updateData = (updatedMember) => {
        setFormData((prevData) =>
          prevData.map((member) => (member.email === updatedMember.email ? updatedMember : member))
        );
      };
    
      const handleDelete = (index) => {
        setFormData((prevData) => prevData.filter((item, i) => i !== index));
      };
    
      


  return (
    <>
    <div className='h-screen w-full flex justify-center items-center '>

        <div className='border-2 border-emerald-700 w-[932px] h-[480px] relative'>
            <div className='flex flex-col gap-7 '>
              <ul>
                {
                    formData.length > 0 ? (
                        formData.map((member,index) => (
                            <li key={index} className='bg-red-200 mt-7 m-2 rounded p-6 flex justify-between'>Name : {member.name} | Email: {member.email} | Password: {member.password}
                            <div className='flex gap-3'>
                            <FaPen onClick={() => handleUpdate(index)} className='text-xl cursor-pointer' />

                            <MdDelete onClick={()=> handleDelete(index)} className='text-xl cursor-pointer' />
                            </div>
                            </li>
                        ))
                    ):
                    (
                        <p>No members added yet.</p>
                    )
                }
              </ul>
            </div>
           
        </div>

        
        
    </div>
    
        {isupdate && <Modals selected={selected} SetisUpdate={SetisUpdate} updateMember={updateData} />}
     
     </>
  )
}

export default Members