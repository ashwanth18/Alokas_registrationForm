import Link from 'next/link'
import React, { useEffect } from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import Header from '../components/Header'
import { useRecoilState } from 'recoil';
import { gradeAtom } from '../atoms/gradeAtom'
import {motion} from "framer-motion"
function page2_2() {

  const [grade , setGrade] = useRecoilState(gradeAtom);

const handler = (e:any) => {

setGrade(e.target.value);
// console.log("helloe",e.target.value)
}
// console.log("this is to check",grade)
useEffect(() => {
  localStorage.setItem("testGrade",JSON.stringify(grade))
},[grade]);
  return (
    <div className='scrollbar'>
    <motion.div className='h-screen'
initial={{y:"100vh"}}
animate={{y:0}}
exit={{y:"-100vh"}}
    transition={{ease:"easeInOut"}}
    >
<Header />
<BackButton />

    <h1 className='items-center text-center mt-[10%] font-extrabold text-3xl'>Sekolah Kebangsaan</h1>
    <h1 className='items-center text-center font-extrabold text-3xl'> Select your year</h1>

    <div className='flex justify-center text-center items-center mt-[5%] '>
    <Link href="/page3_2" passHref>
  <a className='m-2 '><Button value = {"Year 1"} handler={handler} /></a>
  </Link>
  <Link href="/page3_2" passHref>
  <a className='m-2'><Button value = {"Year 2"} handler={handler} /></a>
  </Link>
  <Link href="/page3_2" passHref>
  <a className='m-2'><Button value = {"Year 3"} handler={handler} /></a>
  </Link>
  </div>
  <div className='flex justify-center text-center items-center  '>
    <Link href="/page3_2" passHref>
  <a className='m-2'><Button value = {"Year 4"} handler={handler} /></a>
  </Link>
  <Link href="/page3_2" passHref>
  <a className='m-2'><Button value = {"Year 5"} handler={handler} /></a>
  </Link>
  <Link href="/page3_2" passHref>
  <a className='m-2'><Button value = {"Year 6"} handler={handler} /></a>
  </Link>
  </div>
    <div className=' mt-[10%]'>
    
    </div>
    </motion.div></div>
  )
}

export default page2_2