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
import { subjectsAtom } from '../atoms/subjectsAtom'
import { artsSubjectAtom } from '../atoms/artsSubjectAtom'
import ArtsSubjectList from '../components/ArtsSubjectList'

function Page3_5 ({}) {
  const subjects = [
    {
      id : 0,
      subj : "Bharathanatiam",
      price : 100,
    },
    {
       id : 1,
      subj : "Sangeetham",
      price : 125,
    },
    {
       id : 2,
      subj : "Veenai",
      price : 100,
    },
    {
        id : 3,
       subj : "Violin",
       price : 100,
     },
    {
       id : 4,
      subj : "Keyboard",
      price : 100,
    },
    {
        id : 5,
       subj : "Mirithangam",
       price : 100,
     },  
       {
        id : 6,
       subj : "Tabla",
       price : 100,
     },  
     {
      id : 7,
     subj : "Devaram & Thirukkural",
     price : 100,
   },   
       {
        id : 8,
       subj : "Yoga",
       price : 75,
     },
     {
        id : 9,
       subj : "Chess",
       price : 75,
     },
     {
        id : 10,
       subj : "Speech & Drama",
       price : 125,
     },
     {
        id : 11,
       subj : "Language Arts ( English )",
       price : 100,
     },
     {
        id : 12,
       subj : "Language Arts ( Tamil )",
       price : 80,
     },
     {
        id : 13,
       subj : "Language Arts ( Bahasa Malaysia )",
       price : 100,
     },
     {
        id : 14,
       subj : "Language Arts ( Mandarin )",
       price : 100,
     },
     {
        id : 15,
       subj : "Language Arts (  French)",
       price : 150,
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
   {` Arts subjects: Select 1 or more subjects`}
</h1>

<ArtsSubjectList subjects = {subjects} />
  

</motion.div>
  )
}

export default Page3_5