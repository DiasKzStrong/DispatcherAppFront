'use client'

import React, { useState } from 'react'
import {motion, useAnimate} from 'framer-motion'
import { Avatar,AvatarImage,AvatarFallback } from '../../ui/avatar'
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsFillCalendar2MonthFill } from "react-icons/bs";
import { BsCalendar2RangeFill } from "react-icons/bs";
import { cn } from '@/lib/utils';

import { BsCalendar2Range,BsCalendar2Month ,BsCalendar2Date} from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";
import ToggleButton from '@/components/ui/MenuButton';
import { HiDotsVertical } from "react-icons/hi";
import Image from 'next/image';
import logo from '@/../public/logo.png'
import avatar from '@/../public/jerry face.jpg'
import SideBarItem from './SideBarItem';
import CustomTooltip from '@/components/customui/CustomTooltip';
import CustomSelect from '@/components/customui/CustomSelect';




const dashboard = [

    {
      icon: <BsFillCalendarDateFill className='h-6 w-6' />,
      name: 'Ежедневный отчет'
    }
    ,
    {
      icon: <BsFillCalendar2MonthFill  className='h-6 w-6'  />,
      name: 'Ежемесячный отчет'
    },
    {
      icon: <BsCalendar2RangeFill  className='h-6 w-6' />,
      name: 'Ежегодный отчет'
    }

]


const selectData = [
    {
      valueData: [
        {
          value:'Oil',
          place:'Нефть'
        },
        {
          value:'Gaz',
          place:'Газ'
        }
      ]
    }

    
    
]



const SideBar = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className='h-full border-r flex flex-col w-56 overflow-y-auto'>
      <div className='flex items-center justify-between p-4'>
        <Image src={logo} alt='logo' width={150}/>
        <ToggleButton expanded={expanded}/>
      </div>


      <div className='flex items-center justify-center p-4 mb-1'>

          <CustomSelect selectData={selectData} placeholder='Выберите продукт' />

      </div>

      <ul className='flex-1 flex flex-col'>
        {dashboard.map(
          (item,index) => (

            <SideBarItem {...item} key={index} />

          )
        )}
      </ul>


      <div className='flex border-t p-4'>
          <Image src={avatar} alt='avatar' width={50} height={50} className='rounded-md'/>
          <div className='flex items-center justify-between ml-2'>
            <div className='leading-5'>
              <h4>Dias</h4>
              <span className='text-xs'>dias@gmail.com</span>
            </div> 
            <CustomTooltip content='Настройки'>
            <div className='px-4 w-full h-full flex justify-center items-center hover:bg-blue-500 hover:rounded-md'> 
              <ImExit className='text-black h-6'/>
            </div>  
          </CustomTooltip>
          </div>
      </div>




    </aside>
  )
}

export default SideBar