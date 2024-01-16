import React from 'react'
import SideBar from '@/components/dashboard/sidebar/SideBar'

export default function Layout ({children}:{children:React.ReactNode}) {
  return (
    <div className='h-full w-full flex'>
        <SideBar /> 
        <main className='h-full flex-1 overflow-y-auto p-6'>
          {children}
        </main>
    </div>
  )
}

