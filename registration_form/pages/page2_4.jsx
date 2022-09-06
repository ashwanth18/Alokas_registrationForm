import Link from 'next/link'
import React, { useEffect } from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import Header from '../components/Header'
import { useRecoilState } from 'recoil';
import { gradeAtom } from '../atoms/gradeAtom'
import {motion} from "framer-motion"
function Page2_4 () {

  const [grade , setGrade] = useRecoilState(gradeAtom);

const handler = (e) => {

setGrade(e.target.value);
// console.log("helloe",e.target.value)
}
// console.log("this is to check",grade)
useEffect(() => {
  localStorage.setItem("testGrade",JSON.stringify(grade))
},[grade]);
  return (

    <motion.div className='h-auto min-h-screen'
initial={{y:"100vh"}}
animate={{y:0}}
exit={{y:"-100vh"}}
    transition={{ease:"easeInOut"}}
    >
<Header />
<BackButton />

    <h1 className='items-center text-center mt-[10%] font-extrabold text-sm  md:text-3xl'>ARTS</h1>
    <h1 className='items-center text-center font-extrabold text-sm  md:text-3xl'> Select your Level</h1>

    <div className='flex justify-center text-center items-center mt-[30%] lg:mt-[5%] '>
    <Link href="/page3_5" passHref>
  <a className='m-2 '><Button value = {"Beginner"} handler={handler} /></a>
  </Link>
  <Link href="/page3_5" passHref>
  <a className='m-2'><Button value = {"Intermediate"} handler={handler} /></a>
  </Link>
  <Link href="/page3_5" passHref>
  <a className='m-2'><Button value = {"Advanced"} handler={handler} /></a>
  </Link>
  </div>
 
    <div className=' mt-[10%]'>
    
    </div>
    </motion.div>
  )
}

export default Page2_4