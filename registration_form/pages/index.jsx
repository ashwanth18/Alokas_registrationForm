// import type { NextPage } from 'next'

import Link from 'next/link'
import Button from '../components/Button'
import Header from '../components/Header'

import {motion,AnimatePresence} from "framer-motion";
import { useEffect } from 'react';

function Home(){
  useEffect(() =>{
 
   window.localStorage.clear();   
    },[]);
  return (
    <div className='h-auto min-h-screen'

    >

{/* header  */}
<Header />
   <motion.main     initial={{y:"100vh"}}
    animate={{y:0}}
    exit={{y:"-100vh"}}
    transition={{ease:"easeInOut"}}>
    <h1 className='text-center items-center font-extrabold mt-[20%] lg:mt-[15%] text-3xl'> ALoKAS Registration Form</h1>
    {/* banner */}
    <section>
      
      <div
      className='flex justify-center text-center items-center mt-[25%] md:mt-[15%] lg:mt-[5%] '>
        
        <Link href="/page1" passHref>
      <a><Button value = {"Start"} /></a>
      </Link>
      </div>
      {/* row */}
            {/* row */}
      {/* row */}
      {/* row */}
      {/* row */}
      {/* row */}

    </section>
   </motion.main>
    </div>
  )
}

export default Home
