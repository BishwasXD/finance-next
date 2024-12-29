// A custom hook for checking whether the screen is mobile or not.
//based on width
//everytime the page is re redered we need to calculate width.
'use client'
import { useState, useEffect } from "react"
const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(()=>{
  const screenWidth = window.innerWidth 
  setIsMobile(screenWidth < 400);
  }, [])
return isMobile

}
export default useMobile
