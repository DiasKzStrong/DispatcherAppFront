import { cn } from '@/lib/utils'
import React from 'react'
import {motion} from 'framer-motion'
const SideBarItem = ({
    icon,
    name,
}:{
    icon: React.ReactNode,
    name: string,
}) => {

  return (
    <>
      <li
      className='inline-flex items-center hover:bg-blue-500 hover:rounded-lg p-4 '>
          <div>
            {icon}
          </div>
          <div 
          className={cn('flex items-center justify-center px-4 overflow-hidden transition-all',)}>
            {name}
          </div>
      </li>
    </>
  )
}

export default SideBarItem