'use client';
import React from 'react'

const Eventhandling = () => {

    const previewImage = (e) => {

        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onload = (data) => {
            const img = new Image();
            img.src = data.target.result;
            document.body.appendChild(img)
            console.log(data.target.result);
            reader.readAsDataURL(file)
        }

    }


    return (
        <div className='max-w mx:auto py-10 border'
            onMouseMove={e => {
                document.getElementById('circle').style.left = e.clientX - 20 + 'px';
                document.getElementById('circle').style.left = e.clientY - 20 + 'px';

            }}>

            <div id='circle'
                onMouseDown={(e) => { e.target.style.height = '30px'; e.target.style.widht = '30px' }}
                onMouseUp={(e) => { e.target.style.height = '40px'; e.target.style.widht = '40px' }}
                className='absolute duration -300 rounded-full size-12 border border-black  '></div>

            <button onClick={() => { alert('button was clicked') }}
                className='border rounded bg-gray-400 hover:bg-white px-1 py-1 '> click me</button>

            <input
                onChange={(e) => { console.log(e.target.value); }}
                className='mt-5 border border-black px-3 py-1 rounded w-full' type='text' />


            <input
                onChange={(e) => { document.body.style.backgroundColor = (e.target.value) }}
                type="color" className='mt-5 block' />

            <input
                onChange={(e) => { console.log(e.target.files) }}
                type="file" className='mt-5' multiple />

            <label className='mt-5 block' htmlFor="">Upload Image</label>
            <input type="file" accept='image/*' onChange={previewImage} />

            <input type="text" className='border w-full mt-5'
                onKeyDown={(e) => { console.log(e.code) }} />


        </div>
    )
}

export default Eventhandling