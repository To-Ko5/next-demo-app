'use client'
import Image from 'next/image'
import React from 'react'
import { contents } from '@/lib/contents'
import { useParams, useRouter } from 'next/navigation'

const PhotoDetails = () => {
  const params = useParams()
  const id = Number(params.id)
  return (
    <div className="container mx-auto mt-8">
      <h1>{contents[id - 1].num}</h1>
      <p> {contents[id - 1].detail}</p>
    </div>
  )
}

export default PhotoDetails
