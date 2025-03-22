import React from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

interface ButtonProps {
    children: React.ReactNode,
    isLoading: boolean,
    className: string
}

const SubmitButton = ({ children, isLoading, className }: ButtonProps) => {
  return (
    <Button
        type="submit"
        className={className}
        disabled={isLoading}
    >
        {isLoading ? (
            <div className='flex items-center gap-2'>
                <Loader2 className='animate-spin'/>
                chargement...
            </div>
        ) : 
            <>
                <span
                    className="magic-btn-span group-hover:-translate-x-96"
                ></span>
                {children}
            </>
        }
    </Button>
  )
}

export default SubmitButton