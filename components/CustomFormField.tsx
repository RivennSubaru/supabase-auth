import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Control, Field } from 'react-hook-form'
import { CustomFieldType } from '@/app/login/page'

interface CustomProps {
    control: Control<any>,
    name: string,
    label?: string,
    placeholder?: string,
    inputType?: string,
    fieldType: CustomFieldType,
    icon?: React.ReactNode
}

const RenderField = ({ props, field }: { props: CustomProps, field: any }) => {
    const { fieldType, icon, placeholder, inputType } = props

    switch (fieldType) {
        case CustomFieldType.INPUT:
            return (
                <div className='flex flex-1 items-center dark:bg-neutral-800 dark:border-neutral-700 rounded-md border border-gray-200'>
                    {icon}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className='border-0 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent!'
                            type={inputType}
                        />
                    </FormControl>
                </div>
            )
    
        default:
            break;
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, name, label, fieldType } = props

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {fieldType !== CustomFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <RenderField props={props} field={field}/>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField