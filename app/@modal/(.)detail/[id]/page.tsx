'use client'

import React, { ReactNode, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { contents } from '@/lib/contents'
import { Button } from '@/components/ui/button'

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
    <Dialog open={isOpen} onOpenChange={handleClick}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{contents[id - 1].num}</DialogTitle>
          <DialogDescription>{contents[id - 1].detail}</DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default Page
