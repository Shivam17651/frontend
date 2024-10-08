'use client'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required(' Email is Required')


});

const Contact = () => {

  const ContactForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      query:''

    },
    onSubmit: (values, {resetform,setSubmitting })=>{

      setTimeout(() => {
        console.log(values);
        // resetform();
        setSubmitting(false);
      
        
      }, 3000);
    },

    validationSchema  : contactSchema
  });


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md mx:auto'>
        <div className='rounded-lg border-2 shadow p-8'>
          <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>Contact Us</h1>
          <form >
            <label  htmlFor="name">Your Name</label>
            <span className='text-sm ml-4 text-red-500'>{ContactForm.touched.name && ContactForm.errors.name}</span>
            <input className='border rounded w-full px-3 py-2 mb-4' 
            id='name' onChange={ContactForm.handleChange} value={ContactForm.values.name} type="text" />
            <label  htmlFor="email"> Email</label>
            <input className='border rounded w-full px-3 py-2 mb-4' 
            id='email' onChange={ContactForm.handleChange} value={ContactForm.values.email}  type="text" />
            <label htmlFor="query">Query</label>
            <input className='border rounded w-full px-3 py-2 mb-4' 
            id='query' onChange={ContactForm.handleChange} value={ContactForm.values.query}  type="text" />
            <button type='submit' 
            className='flex justify-center items-center bg-blue-500 text-white px-3 py-2 rounded w-full mt-8 '>Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact;