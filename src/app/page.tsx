import React from 'react'
import Image from 'next/image'
import AuthForm from '@/containers/AuthContainer/authform'


const page = () => {
  return (
    <div className='flex gap-10 py-10 px-20 justify-center'>
      <Image src="/landingpage.jpg" alt='Landing Image' width={800} height={900} />
     <AuthForm/>
    </div>
  )
}

export default page