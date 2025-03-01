import React from 'react'
import Modal from './Modal'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from 'yup';


const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),

});

const AddandUpdata = ({isOpen, onClose , isUpdate, contact}) => {

    const addcontact = async (values)=>{
        try {
            const contactref = collection(db,"contacts");
        await addDoc(contactref, values)
        toast.success("Contact Added Successsfully")
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    const addUpdate = async (values,id)=>{
        try {
            const contactref = doc(db,"contacts",id);
        await updateDoc(contactref, values)
        toast.success("Contact Updated Successsfully")

            
        } catch (error) {
            console.log(error);
            
        }
        
    }
  return (
    <div>
        <Modal isOpen = {isOpen} onClose={onClose} >
            <Formik validationSchema={contactSchemaValidation} initialValues={isUpdate ? {
                name:contact.name,
                email:contact.email
            }:{
                name:"",
                email:""
            }}
            onSubmit={(values) => {
                isUpdate ? addUpdate(values, contact.id) : addcontact(values);
                onClose();  
              }}
            >
                <Form className='flex flex-col'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <Field name = "name" className='h-10 border'></Field>
                        <div className='text-xs text-red-500'>
                            <ErrorMessage name = "name" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Email</label>
                        <Field type='email' name = "email" className='h-10 border'></Field>
                        <div className='text-xs text-red-500'>
                            <ErrorMessage name = "email " />
                        </div>
                    </div>

                    <button type='submit'  className='bg-[#F6820C] p-1 self-end mt-2 '>{isUpdate? "Update " : "Add "}contact</button>
                </Form>
            </Formik>
        </Modal>
    </div>
  )
}

export default AddandUpdata