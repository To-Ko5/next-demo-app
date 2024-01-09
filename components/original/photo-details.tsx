import Image from 'next/image'
import React from 'react'

const PhotoDetails = () => {
  return (
    <div>
      <Image
        src={'/next.svg'}
        width={600}
        height={600}
        alt={'next.js'}
        className="h-[750px] w-[750px] object-cover"
      />
    </div>
  )
}

export default PhotoDetails
