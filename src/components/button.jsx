import React from 'react'

const Button = ({children}) => {
  return (
    <button className='border border-black bg-black text-red-500 rounded px-4 py-2 mt-3'>{children}</button>
  )
}

export default Button