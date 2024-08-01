'use client';
import React, { useState } from 'react'

const todolist = () => {

     const[ count, setCount ] = useState(0);

     const [taskList, setTaskList] = useState([
        { text: 'pet',completed : false , added : new Date ()},
        { text: 'bhot',completed : false , added : new Date ()},
        { text: 'nikal',completed : false , added : new Date ()},
        { text: 'rha h',completed : false , added : new Date ()},
     ]);

    const addTask =(e)=>{
        if (e.code === 'Enter'){
            console.log(e.target.value);

            e.target.value='';
        }
    }
  return (
    <div className='max-w-5xl mx-auto mt-6'>
    <div className='border shadow rounded-3xl'>
        <div className='p-4 border-b-2'>
            <input 
            onKeyDown={addTask}
            
            placeholder='add a new task' 
            type="text"
            className='w-full p-3 bg-gray-300 rounded-xl outline-none' />
        </div>
        <div className='p-6'>

            {/* <h1 className='text-3xl text-red-500'>{count}  </h1>
            
            <button className='bg-gray-300 p-4' 
            onClick={() => {setcount (count+1);console.log(count);}}
                >Add Button</button> */}
                {
                    taskList.map( (task,index) => {return (
                        <div key={index} className='rounded-md border mb-5 shadow p-4 bg-gray-100 '>
                            <p>{task.text}</p>
                            <div className='mt-2 flex justify-end gap-4'> 
                                <button className='bg-blue-500 px-2 py-1 rounded-full'> Complete</button>
                                <button className='bg-red-500 px-2 py-1 rounded-full'>Delete</button>
                            </div>

                        </div>
                    )})
                }
             </div>
    </div>
    
    </div>
  )
}

export default todolist;