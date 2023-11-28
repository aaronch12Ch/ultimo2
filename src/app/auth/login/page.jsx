"use client";

import React from 'react'
import {useForm} from 'react-hook-form';
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './styles.css'

function LoginPage() {
  const {register,handleSubmit,formState:{errors}} = useForm();

  const [error,setError] = useState(null)
  const router=useRouter()

  
  const onSubmit = handleSubmit(async(data) =>{
      const res = await signIn('credentials',{
        email: data.email,
        password: data.password,
        redirect:false
      });


      console.log(res)

      if(res.error){
        setError(res.error)
      }else{
        router.push('/dashboard')
        router.refresh()
      }
      
  })
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form action=""  onSubmit={onSubmit}  className='w-1/4 transP'>

        {error &&(
          <p className='bg-red-500 text-lg text-white p-3 rounded'>{error}</p>
        )}
      <h1 className='text-slate-200 font-bold text-4xl mb-4'>Login</h1>

      <label htmlFor="email" className='text-white mb-2 block text-sm'>Username:</label>
            <input type="email" 
            {...register("email",
                {
                    required:{
                        value:true,
                        message:'Email is required'
                    }
                })}
                placeholder='Email is required'
                className='p-3 rounded block mb-2  bg-slate-900 text-slate-300 w-full'
            />
            {
                errors.email &&(
                    <span className='text-red-500 text-xs'>{errors.email.message}</span>
                )
            }
            <label htmlFor="password" className='text-white mb-2 block text-sm'>Password:</label>
            <input type="password" 
            {...register("password",
            {
                required:{
                    value:true,
                    message:"Password is required"
                }
            })}
            placeholder='*******'
            className='p-3 rounded block mb-2  bg-slate-900 text-slate-300 w-full'
            />
            
            {
                errors.password &&(
                    <span className='text-red-500 text-xs'>{errors.password.message}</span>
                )
            }

            <button className='w-full colorButon text-white  mt-7 p-3 rounded-lg
            transition ease-in-out delay-400  bg-slate-900 hover:-translate-y-2 hover:scale-200 hover:bg-indigo-400 duration-500  '>Ingresar</button>
      </form>
    </div>
  )
}
export default LoginPage