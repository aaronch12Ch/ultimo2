"use client"
import './styles.css'
import React from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation';
function RegisterPage() {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const router =useRouter();

    const onSubmit= handleSubmit(async (data)=>{

        if(data.password !== data.confirmPassword){
            return alert("Password no coinciden")
        }
        
       const res =await fetch('../../api/auth/register',{
            method:'POST',
            body:JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password
            }),
            headers:{
                'Content-Type':'application/json'
            }

        })
        
        if(res.ok){
            router.push('../../auth/login')

        }
    })

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center' >
        <form action="" onSubmit={onSubmit} className='w-1/4 transP'>

            <h1 className='text-slate-200 font-bold text-4xl mb-4'>Registrar</h1>

            <label htmlFor="username" className='text-white mb-2 block text-sm'>Username:</label>
            <input type="text" 
            {...register("username",
                {
                    required:{
                        value:true,
                        message:'Username is required'
                    }
                })}
                placeholder='yourUser'
                className='p-3 rounded block mb-2  bg-slate-900 text-slate-300 w-full'
            />
            {
                errors.username &&(
                    <span className='text-red-500 text-xs'>{errors.username.message}</span>
                )
            }

            <label htmlFor="email" className='text-white mb-2 block text-sm'>Email:</label>
            <input type="email"
                {...register("email",
                {
                required:{
                    value:true,
                    message:"Email is required"
                }
                })}
                placeholder='user@email.com'
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

            <label htmlFor="confirmPassword" className='text-white mb-2 block text-sm'>Confirm Password:</label>
            <input type="password"
            {...register("confirmPassword",
            {
            required:{
                value:true,
                message:"Confirm Password is required"
                }
            })} 
            placeholder='*******'
            className='p-3 rounded block mb-2  bg-slate-900 text-slate-300 w-full'
            />
            {
                errors.confirmPassword &&(
                    <span className='text-red-500 text-xs'>{errors.confirmPassword.message}</span>
                )
            }

            <button className='w-full  text-white p-3 rounded-lg mt-2
            transition ease-in-out delay-400  bg-slate-900 hover:-translate-y-2 hover:scale-200 hover:bg-indigo-400 duration-500'>Register</button>
        </form>
    </div>
  )
}
export default RegisterPage