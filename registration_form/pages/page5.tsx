import React, { useEffect, useMemo } from 'react'
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
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
import {motion} from "framer-motion";
import { Grade, Opacity } from '@mui/icons-material';
import { gradeAtom } from '../atoms/gradeAtom';
function page5() {
  const setGrade = useSetRecoilState(gradeAtom)
const setTotalPrice = useSetRecoilState(subjectState)
const setSubjectList = useSetRecoilState(subjectsAtom)
const subjectList = useRecoilValue(subjectsAtom)

const [userInfo , setUserInfo] = useState([])
const [userYear , setUserYear] = useState([])
const [buttonOn , setButtonOn] = useState([false])
// const [userSubject, setUserSubject] = useState([])
// const [finalPrice , setFinalPrice] = useState([])
useEffect(() =>{
 
  const item =  JSON.parse(localStorage.getItem("UserData"));
  const itemYear = JSON.parse(localStorage.getItem("testGrade"))
  const itemSubject = JSON.parse(localStorage.getItem("subjectList"))
  const itemTotalPrice = JSON.parse(localStorage.getItem("totalPrice"))
  if(item && itemYear && itemSubject && itemTotalPrice){
    setUserInfo(item);
    setGrade(itemYear);
    setUserYear(itemYear)
    setSubjectList(itemSubject)
    setTotalPrice(itemTotalPrice)
    // setValue("parentName",item.parentName)
  }
   
 
  
  },[]);

  useEffect(( ) => {

    register('StudentName', { value: 'bill' });
    register('ParentName', { value: 'bill' });
    register('StudentIC', { value: 'bill' });
  },[]);
// console.log("what is this",userInfo)
// console.log('wanna test this shit out' , subjectListsss)
// console.log('wanna test this shit out for old shit' , subjectList)
const {parentName, studentName, studentIC, school, contact, email} = userInfo
// const {parentName, studentName, studentIC, school, contact, email} = userData;
// console.log("should return the userdate",Object.keys(userInfo))
// console.log(contact)
// console.log("should return the parentName",parentName)
const { control,register, handleSubmit,reset, setValue, formState: {errors} } = useForm({
  // defaultValues: useMemo(() => userInfo, [userInfo]),

});




  const onSubmit = async(data:any) => { 
    // console.log("check the data and its content",data)
  
  // console.log(userInfo)
  // console.log(subjectList,userYear)
  // console.log(userYear)
const fullData = {
  subjects : subjectList,
  userData : userInfo,
  year : userYear
}
  // Send the data to the server in JSON format.
   const JSONdata = JSON.stringify(fullData)


   // API endpoint where we send form data.
   const endpoint = '/api/form'
 
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
   const response = await fetch(endpoint, options)
 
   // Get the response data from server as JSON.
   // If server returns the name submitted, that means the form works.
   const result = await response.json()
   alert(`Is this your full name: ${result.data}`)
  
  };

  const inputHandler = () => {
setButtonOn(!buttonOn)

  }
  const formVarients = {
    hidden: {opacity:0},
    show: { opacity:1,
    transition: {when: "beforeChildren", staggerChildren:0.1},},
    
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
    <div className='scrollbar'>
    <motion.div className='h-screen'
    initial={{x:"100vw"}}
    animate={{x:0}}
    exit={{x:"-100vw"}}
    transition={{ease:"easeInOut"}}
    >
  <Header/>
<motion.form className='w-full ' variants={formVarients} initial="hidden" animate="show" onSubmit={handleSubmit(onSubmit)}   >
<div className='flex justify-center items-center flex-col md:flex-row  mt-12 '>
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
      <input className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
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
      <input className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
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
      <input className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
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
      <input className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={school} disabled {...register("SchoolName")}  />
    </div>
  </motion.div >
  <motion.div 
  variants={divVarients}
  className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <motion.label variants={inputVarients} className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Grade
      </motion.label>
    </div>
    <div className="md:w-2/3">
      <input className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
       type="text" defaultValue={""}  value={userYear} disabled {...register("Grade")} />
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
      <input className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
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
      <input className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" 
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
<Link href={"/page1"} passHref>
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

type="submit" className={`${buttonOn ? "text-gray-400 border-gray-400 " : "border-white text-white"}'flex items-center justify-center border ml-[30%] w-20 rounded-full p-2 mt-5'`}  disabled={false} id='submitButton'  >Submit</motion.button>
</motion.form>

<div className=' mt-[15%]'>

</div>

</motion.div></div>
    )
}

export default page5