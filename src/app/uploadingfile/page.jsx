'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const UploadingFile  = () => {

  const handleUpload = (e) => {

    const file =e.target.files [0];

    const formData = new FormData ();

    formData.append ('file',file);
    formData.append ('upload_preset', 'shivam');
    formData.append('cloud_name','dgfhqlhdk');

    axios.post('https://api.cloudinary.com/v1_1/dgfhqlhdk/image/upload' ,formData,{
      headers: {'Content-Type ' : 'multipart/form-data'}
    })
    .then((result) => {
      console.log(result.data);
      toast.success('File Uploaded Successulyy');
      
      
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to Upload File');
      
      
    });


  }
  return (
    <div className='max-w-2xl mx-auto rounded-lg border-4 border-blue-300 flex justify-center p-8 mt-5 '>
        <label htmlFor="upload file" className='text-5xl font-bold text-blue-300'> 💘 Upload your File</label>
        <input onChange={handleUpload} id ="upload file" type='file' className='hidden' />
        
         </div>
  )
}

export default UploadingFile ;