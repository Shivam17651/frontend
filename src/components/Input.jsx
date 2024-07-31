import React from 'react'

const Input = ({ label,type,id ,disabled =false} ) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input id={id} type={type} disabled={disabled} 
        className='block w-full border-2 border-gray-500 py-1 px' />
    </div>
  )
}

export default Input