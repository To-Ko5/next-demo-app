import React from 'react'
import { Button } from '@/components/ui/button'
import { AlertDialog } from '@/components/ui/alert-dialog'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { ScrollArea } from '@/components/ui/scroll-area'

import { Switch } from '@/components/ui/switch'

const Page = () => {
  return (
    <>
      <div className="container mt-5">
        <Switch />
      </div>
      <div className="container mt-5 max-w-md m-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Q&A</AccordionTrigger>
            <AccordionContent>Answer</AccordionContent>
          </AccordionItem>
        </Accordion>

        <ScrollArea className="h-[100px] w-[350px] rounded-md border p-4 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In culpa
          assumenda qui minima! Officia deleniti qui, minima laborum illum
          adipisci quia, sequi necessitatibus, quibusdam magni culpa nam? Sit,
          temporibus dignissimos? stop.
        </ScrollArea>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="mb-4">
              Click me
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  )
}

export default Page