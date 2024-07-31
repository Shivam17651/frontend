import React from 'react'
import classes from './login.module.css'
import Input from '@/components/Input';
import Button from '@/components/button';

const Login = () => {
  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>Login Page</h1>
        <button className='btn'>Sumbit</button>
        <button className={ classes.myBtn}>Module CSS</button>

        <Input id= {'name'} label={'full Name'} type={'text'}/>
        <Input id= {'email'} label={'Email Address'} type={'email'}/>
        <Input id= {'password'} label={'Password'} type={'password'}/>
<Button>Submit</Button>


        
    </div>
  )
}

export default Login;