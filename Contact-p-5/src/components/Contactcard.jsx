import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Disclosure from '../Hooks/Disclosure';
import AddandUpdata from './AddandUpdata';
import { toast } from 'react-toastify';

const Contactcard = ({contact}) => {

  const {isOpen, onClose, open} = Disclosure()

  const contactdelete = async(id)=>{
    try {
      await deleteDoc(doc(db,"contacts", id))
      toast.success("Contact Deleted Successfully")
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    

    <div>
        <div key = {contact.id} className='flex p-1 mt-4 justify-between bg-[#FFEAAE] items-center rounded
 '>
                <div className='flex gap-4 items-center pl-3'>
                  <FaRegUserCircle  className='text-[#F6820C] text-4xl'/>
                  <div>
                    <h3 className='text-md'>{contact.name}</h3>
                    <p className='text-xs'>{contact.email}</p>
                  </div>
                </div>
                <div className='flex gap-1 pr-2'>
                <RiEditCircleLine onClick={isOpen} className='text-2xl cursor-pointer'/>
                <MdDelete onClick={()=> contactdelete(contact.id)} className='cursor-pointer text-2xl text-[#F6820C]'/>

                </div>
                
              </div>

              <AddandUpdata contact={contact} isUpdate={true} isOpen={open} onClose={onClose}/>
              
    </div>
  )
}

export default Contactcard