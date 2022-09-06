import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import Header from '../components/Header'
import {motion} from "framer-motion";
function Page1() {
  return (
 
    <motion.div className='h-auto min-h-screen'
initial={{y:"100vh"}}
animate={{y:0}}
exit={{y:"-100vh"}}
    transition={{ease:"easeInOut"}}
    >
<Header />
<BackButton />

<h1 className='items-center text-center mt-[35%] lg:mt-[10%] font-extrabold text-base md:text-3xl'> Select your school category</h1>

  <div className='flex justify-center text-center items-center mt-[20%] lg:mt-[5%] '>
    <Link href="/page2_1" passHref>
  <a className='m-2'><Button value = {"SJKT"} /></a>
  </Link>
  <Link href="/page2_2" passHref>
  <a className='m-2'><Button value = {"SK"} /></a>
  </Link>
  <Link href="/page2_3" passHref>
  <a className='m-2'><Button value = {"SMK"} /></a>
  </Link>
  
  </div>
  <div className=' mt-[10%]'>

</div>
</motion.div>
  )
}

export default Page1