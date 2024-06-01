"use client"
import React, { Children, ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image'
import { Button } from '../ui/button'
  

interface MeetingModalProps{
    triggerComponent: ReactNode
    title: string
    clasName?: string
    children?: ReactNode
    buttonText: string
    image?: string
    buttonIcon?: ReactNode
    handleClick: () => void
}

export default function MeetingModal ({
    title,
    clasName,
    buttonText,
    handleClick,
    image,
    children,
    buttonIcon,
    triggerComponent
}:MeetingModalProps) {
  return (
    <Dialog > 
        <DialogTrigger className='text-start'>{triggerComponent}</DialogTrigger>
        <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none rounded-xl bg-dark-1 px-6 py-9 text-white">
            <div className='flex flex-col gap-6'>
                {image && <Image 
                    alt='image'
                    src={image}
                    width={72}
                    height={72}
                    className='flex justify-center'
                />}
                <h1 className={`text-3xl font-bold leading-[42px] ${clasName}`}>{title}</h1>
                {children}
                <Button 
                    className='bg-blue-600 hover:bg-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl'
                    onClick={handleClick}
                >
                    {buttonIcon}
                    {buttonText || "Schedule Meeting"}
                </Button>

            </div>
        </DialogContent>
    </Dialog>

  )
}


