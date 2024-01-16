import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const CustomTooltip = ({children,content}:{
    children: React.ReactNode,
    content: string

}) => {

   console.log(children,content);
   

  return (
    <>
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
    </>
  )
}

export default CustomTooltip