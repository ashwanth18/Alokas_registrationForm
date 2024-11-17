import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { gradeAtom } from '../atoms/gradeAtom'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import Header from '../components/Header'
import SubjectList from '../components/SubjectList'
import {motion} from "framer-motion"
import { subjectsAtom } from '../atoms/subjectsAtom'

function Page3_3({}) {
  const subjects = [
    {
      id : 0,
      subj : "Bahasa Melayu",
      price : 60,
    },
    {
       id : 1,
      subj : "English",
      price : 60,
    },
    {
       id : 2,
      subj : "Mathematics",
      price : 60,
    },
    {
       id : 3,
      subj : "Science",
      price : 60,
    },
    {
      id : 4,
     subj : "Sejarah",
     price : 60,
   },
   {
    id : 5,
   subj : "Geography",
   price : 60,
 },

  

  ];
  const [category, setCategory] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState([]);

  useEffect(() =>{
    const categoryItem = JSON.parse(localStorage.getItem("category"));

  const item = JSON.parse(localStorage.getItem("testGrade"));
  if(categoryItem){
    setCategory(categoryItem);
  }
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

<SubjectList subjects = {subjects} category = {category} />
  

</motion.div>
  )
}

export default Page3_3