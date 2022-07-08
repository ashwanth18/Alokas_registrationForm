import { useRouter } from 'next/router'
import React from 'react'
import {motion} from "framer-motion"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function BackButton() {
    const router = useRouter();
  return (
    
        
        <motion.button 


        onClick={() => router.back()} className='rounded-full bg-[#034f84] text-white hover:bg-[#80ced6] hover:scale-110 hover:shadow-md ease-in-out h-10 w-24 lg:h-20 lg:w-44 m-2 ml-4 text-sm  transition-all'>
        <ArrowBackIcon className='text-sm'/>    Go Back
</motion.button>
    
  )
}

export default BackButton