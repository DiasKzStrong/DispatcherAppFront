import React from 'react'
import { FiMenu } from "react-icons/fi";
import { cn } from '@/lib/utils';

const ToggleButton = ({className,expanded}:{
    className?: string,
    expanded: boolean
}) => {
  return (
    <button className={cn('p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100',className)}> 
        {
            expanded ?
            <FiMenu className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />
        }
    </button>
  )
}

export default ToggleButton