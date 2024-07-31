import React from 'react'
import image from'./next.svg';

const home = () => {

  const cartitems = 10;
  const displayMessage = () => {
    return (
      <div className='border border-red-300 bg-red-300 p-3 rounded-md w-1/2 mx-auto my-3'>
        <span className=' text-red-500 font-bold'> Alert! You need to login first</span>
      </div>
    )
  }
  return (
    <div>
      {displayMessage('Oops!!Your Details are not correct')}

      <h1 style={{ color: 'blue', textAlign: 'center', fontSize: 50 }}>
        My home Page
      </h1>

      <br />

      <input type="text" />

      <img src="/next.svg" alt="" />
      <img src={image.src} alt="" />

      <h2 className='text-2xl text-center'> Cart Items:</h2>
    

      <button className='btn'>My Button</button>
      
          </div>
  )
}

export default home