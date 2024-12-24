import React from 'react'
import Image from 'next/image'

const DataNotFound = () => {
  return (
    <div>
      <Image src="/datanotfound.jpg" alt='Data not found' className= "rounded-md" width={650} height={580} />

    </div>
  )
}

export default DataNotFound
