'use client'

import React, { ReactNode, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
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
    console.log('ccc')
    setIsOpen(false)
    router.back()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClick}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{contents[id - 1].num}</DialogTitle>
          <DialogDescription>{contents[id - 1].detail}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Page
