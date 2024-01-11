'use client'

import React, { ReactNode, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { contents } from '@/lib/contents'

const Page = ({
  params,
  children
}: {
  params: { id: number }
  children: ReactNode
}) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const id = Number(params.id)

  const handleClick = () => {
    setIsOpen(false)
    router.back()
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={handleClick}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{contents[id - 1].num}</AlertDialogTitle>
          <AlertDialogDescription>
            {contents[id - 1].detail}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Page
