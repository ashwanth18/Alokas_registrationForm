import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { gradeAtom } from '../atoms/gradeAtom'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import Header from '../components/Header'
import SubjectList from '../components/SubjectList'
import {motion} from "framer-motion"

function Page3_2({}) {
  const subjects = [
    {
      id : 0,
      subj : "Bahasa Malaysia",
      price : 60,
    },
    {
       id : 1,
      subj : "English",
      price : 60,
    },
    {
       id : 2,
      subj : "Mathematic",
      price : 60,
    },
    {
       id : 3,
      subj : "Science",
      price : 60,
    },
  

  ];
  const [selectedGrade, setSelectedGrade] = useState([]);

useEffect(() =>{
const item = JSON.parse(localStorage.getItem("testGrade"));
if(item){
  setSelectedGrade(item);
}
},[]);
  return (
    <motion.div className='h-auto min-h-screen mb-10'
   initial={{y:"100vh"}}
   animate={{y:0}}
   exit={{x:"-100vw"}}
   transition={{ease:"easeInOut"}}
    >
<Header />
<BackButton />

<h1 className='flex items-center justify-center mt-[5%] mb-[10%] font-extrabold text-sm  md:text-3xl'>
   {` ${selectedGrade} subjects: Select 1 or more subjects`}
</h1>

<SubjectList subjects = {subjects} />
  

</motion.div>
  )
}

export default Page3_2