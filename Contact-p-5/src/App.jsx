import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import Contactcard from './components/Contactcard';
import { ToastContainer, toast } from 'react-toastify';import AddandUpdata from './components/AddandUpdata';
import Disclosure from './Hooks/Disclosure';
// import { HashRouter as Router } from "react-router-dom";







const App = () => {
  const {isOpen, onClose, open} = Disclosure()

  const [contacts, setContacts]= useState([]);

  const filterContacts = (e)=>{
    const value = e.target.value;

    const collectionref  = collection(db, "contacts")
        

        onSnapshot(collectionref, (snapshot)=>{
          const getContactsList = snapshot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data()
            }
          })

          const filterdcontacts = getContactsList.filter( contact => contact.name.toLowerCase().includes(value.toLowerCase()) )
          setContacts(filterdcontacts)
          return filterdcontacts
        }) 
     
  }
  

  useEffect(()=>{
    const getContacts = async ()=>{
       try {
        const collectionref  = collection(db, "contacts")
        

        onSnapshot(collectionref, (snapshot)=>{
          const getContactsList = snapshot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(getContactsList)
          return getContactsList
        })        
        
       } catch (error) {
        console.log(error)
        
       }
    }

    getContacts();
  },[])


  return (
    <div className='mt-5 max-w-[370px] m-auto'>
      <Navbar/>
      
       <div className='flex  mt-7  gap-3 items-center'>        
          <div className='relative  flex items-center  gap-2 flex-grow '>
              <input onChange={filterContacts} type="text" className='w-full  border outline-none rounded  border-white  h-[40px]  pl-9 text-white' placeholder='Search Contacts ' />
              <CiSearch className='absolute text-white top-2 ml-2
              text-2xl font-bold flex-grow'/>

            </div>

            <div>
              <CiCirclePlus onClick={isOpen} className=' text-white text-5xl cursor-pointer 
              '/>
            </div>
        </div>

        <div>
          <div>
           {
             contacts.map((contact) => (
              <Contactcard key = {contact.id} contact = {contact}/>
             ))
           }
          </div>
        </div>

        <AddandUpdata isOpen = {open} onClose={onClose}/>
        <ToastContainer />



      </div>
      


    
  )
}

export default App