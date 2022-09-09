import React, { useEffect, useMemo } from 'react'
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material';
import { errorSelector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { blue, green } from '@mui/material/colors';

import BackButton from '../components/BackButton';
import { userDataAtom } from '../atoms/userDataAtom';
import { useState } from 'react';
import { subjectState } from '../atoms/subjectAtom';
import Router from 'next/router';
import Link from 'next/link';
import { subjectsAtom } from '../atoms/subjectsAtom';
import OrderSummary from '../components/OrderSummary';
import Coupon from '../components/Coupon';
import Header from '../components/Header';
import {AnimatePresence, motion} from "framer-motion";
import { Grade, Opacity } from '@mui/icons-material';
import { gradeAtom } from '../atoms/gradeAtom';
import {useCollection } from 'react-firebase-hooks/firestore';


function Page5() {

// const [registration,registrationLoading,registrationError] = useCollection(db.collection('registration'),{});
// const dbs = db;




  // const setGrade = useSetRecoilState(gradeAtom)
const setTotalPrice = useSetRecoilState(subjectState)
// const setSubjectList = useSetRecoilState(subjectsAtom)
// const subjectList = useRecoilValue(subjectsAtom)

const [userInfo , setUserInfo] = useState([])
const [subjectList , setSubjectList] = useState([])

const [artsSubjectList , setArtsSubjectList] = useState([])
const [combinedList , setCombinedList] = useState([])
const [userYear , setUserYear] = useState('')
const [buttonOn , setButtonOn] = useState([false])
const [pageEnd , setPageEnd] = useState(true)
// const [userSubject, setUserSubject] = useState([])
// const [finalPrice , setFinalPrice] = useState([])
useEffect(() =>{
 
  const item =  JSON.parse(localStorage.getItem("UserData"));
  const itemSubject = JSON.parse(localStorage.getItem("subjectList"))
  const artSubject = JSON.parse(localStorage.getItem("artsSubjectList"))
  const grade = JSON.parse(localStorage.getItem("testGrade"))

  const itemTotalPrice = JSON.parse(localStorage.getItem("totalPrice"))
  if(item ){
    setUserInfo(item);    
    setSubjectList(itemSubject);
    setArtsSubjectList(artSubject);
if(grade){
  setUserYear(grade);

}
    // setUserYear(itemYear)
    // setSubjectList(itemSubject)
    setTotalPrice(itemTotalPrice)
    // setValue("parentName",item.parentName)
  }
   
 
  
  },[]);



// console.log("what is this",userInfo)
// console.log('wanna test this shit out' , subjectListsss)
// console.log('wanna test this shit out for old shit' , subjectList)
const {parentName, studentName, studentIC, school, contact, email} = userInfo
// const {parentName, studentName, studentIC, school, contact, email} = userData;
// console.log("should return the userdate",Object.keys(userInfo))
// console.log(contact)
// console.log("should return the parentName",parentName)
const { control,register, handleSubmit,reset, setValue, formState: {errors}, formState: {isSubmitting} } = useForm({
  // defaultValues: useMemo(() => userInfo, [userInfo]),

});




  const onSubmit = async(data,e) => { 
e.preventDefault()
const unfilteredArtsSubject = [];
const filteredArtsSubject = [];
if(artsSubjectList != null) { 
  artsSubjectList.forEach((value,index) => {
  filteredArtsSubject.push(`art_${value['subj'].toLowerCase().replace(/\s/g, '_')}`)
  unfilteredArtsSubject.push(value['subj']);
  })}
const courseYear = userYear.toLowerCase().replace(/\s/g, '');

const unfilteredTuitionSubject = [];
const filteredTuitionSubject = [];

if(subjectList != null) {
  subjectList.forEach((value,index) => {
  filteredTuitionSubject.push( `${courseYear}_${value['subj'].toLowerCase().replace(/\s/g, '_')}`)
  unfilteredTuitionSubject.push(value ['subj'].replace(/\s/g, '_'));
  })}
  const combinedUnfilteredList = [];
const combinedList = [];
if(filteredTuitionSubject.length != 0 && filteredArtsSubject.length != 0) {
  const combine = filteredTuitionSubject.concat(filteredArtsSubject)
  const combineUnfilteredSubjects = unfilteredTuitionSubject.concat(unfilteredArtsSubject)

  combinedList = combine
  combinedUnfilteredList = combineUnfilteredSubjects
} else if (filteredTuitionSubject.length != 0) {
combinedList = filteredTuitionSubject;
combinedUnfilteredList = unfilteredTuitionSubject;
}
else if(filteredArtsSubject.length != 0) {
  combinedList = filteredArtsSubject;
  combinedUnfilteredList = unfilteredArtsSubject;
}
    // console.log("check the data and its content",data)
  // console.log(userInfo)
  // console.log(subjectList,userYear)
  // console.log(userYear)
  // if(subjectList == undefined) {
  //   subjectList = [];
  // }
  // if(artsSubjectList == undefined) {
  //   artsSubjectList = [];
  // }
const fullData = {
  combinedSubjects : combinedList,
  tuitionSubjects : filteredTuitionSubject,
  artsSubjects : filteredArtsSubject,
  userData : userInfo,
  userGrade : userYear,
}
  // Send the data to the server in JSON format.
   const JSONdata = JSON.stringify(fullData)


   // API endpoint where we send form data.
   const endpoint = '/api/form'
 const endpointDatabase = "/api/database"
   // Form the request for sending data to the server.
   const options = {
     // The method is POST because we are sending data.
     method: 'POST',
     // Tell the server we're sending JSON.
     headers: {
       'Content-Type': 'application/json',
     },
     // Body of the request is the JSON data we created above.
     body: JSONdata
  
   }
 
   // Send the form data to our forms API on Vercel and get a response.
  //  const response = await fetch(endpoint, options)
   await fetch(endpoint, options) 
   await fetch(endpointDatabase, options)

   // Get the response data from server as JSON.
   // If server returns the name submitted, that means the form works.
  //  const result = await response.json()
  //  alert(`The form has been successfully submitted, You will here from us shortly. Redirecting you to the main page`)
   setPageEnd(false)
if(pageEnd == false) {

}
  // Router.push("/")
  };

  const inputHandler = () => {
setButtonOn(!buttonOn)

  }
  const formVarients = {
    hidden: {opacity:0},
    show: { opacity:1,
    transition: {when: "beforeChildren", staggerChildren:0.1},},
    exit: {
      x:"100vw"
    },
    };
    const endPageVarients = {
      hidden: {opacity:0},
      show: { opacity:1,
      transition: {when: "beforeChildren", staggerChildren:0.4},},

      };
    const inputVarients = {
      hidden: {x:"-100vw"},
      show: {opacity:1 ,x:0,
        transition: {
          type:"string",
          mass:0.4,
          damping:8,
        },
      },
    };
    const divVarients = {
      hidden: {opacity:0},
      show: {opacity:1 ,
        transition: {
          type:"string",
          mass:0.4,
          damping:8,
        },
      },
    };
  return (
    
    <motion.div className='h-auto min-h-screen  mb-20'
    initial={{y:"100vh"}}
    animate={{y:0}}
    exit={{y:"-100vh"}}
    transition={{ease:"easeInOut"}}
    > 
  <Header/>  <AnimatePresence >
  { pageEnd ? 

<motion.form className='w-auto ' variants={formVarients} initial="hidden" animate="show" exit={"exit"}  onSubmit={handleSubmit(onSubmit)}   >
<div className='flex justify-center items-center flex-col lg:flex-row  mt-12 '>
  <div className='w-2/3'>
<motion.div 
variants={divVarients}
className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <motion.label variants={inputVarients} className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Parents Full Name
      </motion.label>
    </div>
    <div className="md:w-2/3">
      <input className="h-14 w-[100%] md:w-[70%] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={parentName} disabled {...register("ParentName")}/>
    </div>
  </motion.div >
  <motion.div 
  variants={divVarients}
  className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <motion.label variants={inputVarients} className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Students Full Name
      </motion.label>
    </div>
    <div className="md:w-2/3">
      <input className="h-14 w-[100%] md:w-[70%] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={studentName} disabled {...register("StudentName")} />
    </div>
  </motion.div >
  <motion.div 
  variants={divVarients}
  className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <motion.label variants={inputVarients} className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" >
       Student IC Number
      </motion.label>
    </div>
    <div className="md:w-2/3">
      <input className="h-14 w-[100%] md:w-[70%] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={studentIC} disabled {...register("StudentIC")} />
    </div>
  </motion.div >
  <motion.div 
  variants={divVarients}
  className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <motion.label variants={inputVarients} className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" >
       School Name
      </motion.label>
    </div>
    
    <div className="md:w-2/3">
      <input className="h-14 w-[100%] md:w-[70%] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={school} disabled {...register("SchoolName")}  />
    </div>
  </motion.div >

  <motion.div 
  variants={divVarients}
  className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <motion.label variants={inputVarients} className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Contact Number
      </motion.label>
    </div>
    <div className="md:w-2/3">
      <input className="h-14 w-[100%] md:w-[70%] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={contact} disabled {...register("ContactNumber")} />
    </div>
  </motion.div  >
  <motion.div
  variants={divVarients} className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <motion.label variants={inputVarients} className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" >
       Email Address
      </motion.label>
    </div>
    <div className="md:w-2/3">
      <input className="h-14 w-[100%] md:w-[70%] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={email} disabled {...register("Email")} />
    </div>
  </motion.div>
  <div className="md:flex md:items-center ml-[20%]">
    <motion.div className=""
    initial={{
      x:"-100vw"
    }}
    animate={{
      x:0
    }}
    transition={{
      delay:1
    }}
    >
  <FormControlLabel
    label="Click to confirm if information is correct and get 10% discount on registration fee"
    control={
      <Checkbox
        onChange={inputHandler}
       
      />
    }
  />
</motion.div>
</div>

<p></p>
<Link href={"/page0_5"} passHref>
<a >
<motion.button
initial={{
  x:"100vw"
}}
animate={{
  x:0
}}

whileHover={{
  
  scale: 1.1,
  textShadow: "0px 0px 8px rgb(255,255,255)",
  boxShadow: "0px 0px 8px rgb(255,255,255)"
}}
className=' md:ml-6 rounded-full p-2 border' >EDIT</motion.button>
</a>
</Link>
</div>

<OrderSummary />
</div>


<motion.button
initial={{
  x:"100vw"
}}
animate={{
  x:0
}}  
whileHover={!buttonOn &&{
  
  scale: 1.1,
  textShadow: "0px 0px 8px rgb(255,255,255)",
  boxShadow: "0px 0px 8px rgb(255,255,255)"
}}

type="submit" className={` ${isSubmitting && "hidden" }  ${buttonOn ? "text-gray-400 border-gray-400 " : "border-white text-white"}'flex items-center justify-center border ml-[50%] lg:ml-[30%] w-20 rounded-full p-2 mt-5'`}  disabled={buttonOn} id='submitButton'  >Submit</motion.button>
{ isSubmitting && <div className='flex items-center justify-center border ml-[50%] lg:ml-[30%] w-20 rounded-full p-2 mt-5'>  <CircularProgress /> </div>}
</motion.form>

: 

<motion.div variants={endPageVarients} initial={"hidden"} animate={"show"} >
<motion.h1 variants={divVarients} className='mt-[5%] justify-center items-center flex text-center font-extrabold text-sm md:text-base lg:text-3xl '>Form has been successfully registered. <br/>Welcome to ALoKAS family, we will contact you shortly  </motion.h1>

<div className='flex justify-center items-center h-[250px]'><Link href={"/"} passHref><a>
<motion.button
whileHover={{
  
  scale: 1.1,
  textShadow: "0px 0px 8px rgb(255,255,255)",
  boxShadow: "0px 0px 8px rgb(255,255,255)"
}}
variants={divVarients} className=' border  w-auto rounded-full p-4 mt-5 border-white text-white'>Make new request</motion.button>
</a></Link></div>
</motion.div>


}</AnimatePresence>

</motion.div>
    )
}

export default Page5