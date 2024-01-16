import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ISelectProps } from '@/types/selectInput.types'
import { cn } from '@/lib/utils'


const CustomSelect = (
    {placeholder,
     selectData,
     className
    }: ISelectProps
) => {
  return (
    <>
        <Select >
      <SelectTrigger className={cn("w-[180px]",className)}>
        <SelectValue placeholder={placeholder} defaultValue='Oil'/>
      </SelectTrigger>
      <SelectContent>
        {
            selectData.map(
                (item,index) => (
                    <SelectGroup key={index}>
                        {item.group && <SelectLabel>{item.group}</SelectLabel>}
                        {
                            item.valueData.map(
                                (values,index) => (
                                    <SelectItem key={index} value={values.value}>{values.place}</SelectItem>
                                )
                            )
                        }
                    </SelectGroup>
                )
            )
        }
      </SelectContent>
    </Select>
    </>
  )
}

export default CustomSelect