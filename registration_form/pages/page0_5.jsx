import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import Header from '../components/Header'
import {motion} from "framer-motion";
function Page0_5() {
const [category,setCategory] = useState();
    const handler = (e) => {

        setCategory(e.target.value);
        // console.log("helloe",e.target.value)
        }
        // console.log("this is to check",grade)
        useEffect(() => {
            window.localStorage.clear();   

          localStorage.setItem("category",JSON.stringify(category))
        },[category]);

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
    <Link href="/page1" passHref>
  <a className='m-2'><Button value = {"Tuition "} handler={handler} /></a>
  </Link>
  <Link href="/page3_5" passHref>
  <a className='m-2'><Button value = {"Arts "} handler={handler} /></a>
  </Link>
  <Link href="/page1" passHref>
  <a className='m-2'><Button value = {"Both"} handler={handler} /></a>
  </Link>
 
  </div>
  <div className=' mt-[10%]'>

</div>
</motion.div>
  )
}

export default Page0_5