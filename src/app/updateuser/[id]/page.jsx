'use client'
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const { id } = useParams();
    const [userData,setUserData]=useState(null);
    const router =useRouter();

    const getUserData = async ()=> {
        const res = await axios.get('http://localhost:5000/user/getbyid/'+id );
        console.log(res.data);
        setUserData(res.data);
        
    }

    useEffect (() => {
        getUserData();
    },[]);

    const submitForm =(values) => {
        console.log(values);
        axios.put ('http://localhost:5000/user/update/'+id ,values)
        .then((result) => {
            toast.success('user updated successfully');
            router.push('/manageuser');
            
        }).catch((err) => {
            console.log(err);
            toast.error('failed to update user')
            
            
        });
        
    }
  return (
    <div>
        <div className='max-w-xl mx-auto p-3 border rounded-lg mt-5 shadow'>
            <h1 className='text-2xl text-center font-bold'>Update user Details</h1>

            {
                userData !== null?(

                    <Formik initialValues={userData} onSubmit={submitForm}>
                        {
                            (updateForm) => {return (
                                <form onSubmit={updateForm.handleSubmit}>
                                <input 
                                className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
                                placeholder='Enter Your Name'
                                id='name'
                                type="text" 
                                onChange={updateForm.handleChange}
                                value={updateForm.values.name}/>
                
                                <input 
                                className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
                                placeholder='Enter Your Email'
                                id='email'
                                type="email" 
                                onChange={updateForm.handleChange}
                                value={updateForm.values.email}
                                />
                
                                <input 
                                className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
                                placeholder='Enter Your Password'
                                id='password'
                                type="password"
                                onChange={updateForm.handleChange}
                                value={updateForm.values.password} />
                
                                <input 
                                className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
                                placeholder='Enter Your City'
                                id='city'
                                type="text"
                                onChange={updateForm.handleChange}
                                value={updateForm.values.city} />
                
                                <button className='block ml-auto p-3 bg-blue-500 text-white mt-6 rounded-lg'>Update User</button>
                            </form>

                            )
                        }
                        
                        
                }

                    </Formik>
                  

                    
                ): <p className='text-3xl text-gray-300 text-center font-bold mt-5'>Loading....</p>
            }

        
        </div>
    </div>
  )
}

export default UpdateUser