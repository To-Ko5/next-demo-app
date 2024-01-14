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
import ThemeSwitching from '@/components/original/theme-switching'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import Link from 'next/link'
import { contents } from '@/lib/contents'
import { Input } from '@/components/ui/input'

const Page = () => {
  return (
    <>
      <div className="container mt-5">
        <ThemeSwitching />
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

        <Carousel
          opts={{
            align: 'start'
          }}
          className="w-full max-w-sm mb-4"
        >
          <CarouselContent>
            {contents.map((content) => (
              <CarouselItem
                key={content.num}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <Link
                      href={`/detail/${content.num}`}
                      scroll={false}
                      className=""
                    >
                      <CardContent className="flex aspect-square items-center justify-center">
                        <span className="text-3xl font-semibold ">
                          {content.num}
                        </span>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Input placeholder="入力欄" className="mb-4" />

        <ScrollArea
          scrollHideDelay={1000}
          className="h-[200px] rounded-md border p-4"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          soluta accusamus nulla unde molestias autem quidem nemo excepturi
          temporibus ducimus laudantium odio deserunt voluptas dolor maiores,
          eius perspiciatis nobis sint? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Corrupti soluta accusamus nulla unde molestias autem
          quidem nemo excepturi temporibus ducimus laudantium odio deserunt
          voluptas dolor maiores, eius perspiciatis nobis sint? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Corrupti soluta
          accusamus nulla unde molestias autem quidem nemo excepturi temporibus
          ducimus laudantium odio deserunt voluptas dolor maiores, eius
          perspiciatis nobis sint?
        </ScrollArea>
      </div>
    </>
  )
}

export default Page
