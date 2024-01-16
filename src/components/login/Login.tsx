'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {FaLock, FaUser} from 'react-icons/fa'
import photo from '@/../public/logo.png'
import Image from 'next/image'
import {ILoginForm} from '@/types/login.type'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const Login = () => {

  const form = useForm(
    {
      mode:'onChange',
      defaultValues: {
        username: "",
        password: ""

      }
    }
  )
  const {control,handleSubmit,formState:{errors}} = form
  const onSubmit:SubmitHandler<ILoginForm> = (data) => {


    console.log(data);


  }


  return (
    <div className='flex flex-col items-center justify-center z-10 border border-black bg-transparent	backdrop-blur-lg w-[350px] h-96 p-5 rounded-2xl shadow-black'>
        <div className='flex flex-col items-center justify-center p-4'>
          <Image src={photo} alt='logo'/>
          <h2 className='text-2xl'>Login</h2>
        </div>
        <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center justify-center'>
          <FormField control={control} rules={{required:'Это поле должно быть заполнено'}} name='username' render={({field}) => (
              <FormItem>
                <FormControl>
                <div className='flex flex-row border rounded-md border  shadow-sm transition-colors border-black focus:border active:border-amber-400 focus-visible:border-amber-400 focus:border-amber-400'> 
                    <Input {...field} type='email'  placeholder='Login' className='border-none focus:border-none focus-visible:border-none '/>
                    <FaUser className='w-5 mt-[9px] mr-2'/>
                </div>
                </FormControl>
                <div className='w-52'>
                    <FormMessage />
                </div>
              </FormItem>
          )} />
          <FormField control={control} rules={{required:'Это поле должно быть заполнено'}} name='password' render={({field}) => (
            <FormItem>
                <FormControl>
                <div className='flex flex-row border rounded-md border shadow-sm transition-colors border-black'>
              <Input {...field} type='password' placeholder='Password' className='border-none focus:border-none focus-visible:border-none'/>
              <FaLock className='w-5 mt-[9px] mr-2' />
              </div>
                </FormControl>
                <div className='w-52'>
                <FormMessage />
              </div>
              </FormItem>
          )} />
            <Button type='submit' className='h-10 w-40'>Log in</Button>
        </form>
        </Form>
    </div>
  )
}

export default Login