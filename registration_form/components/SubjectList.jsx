import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { subjectState } from '../atoms/subjectAtom';
import { subjectsAtom } from '../atoms/subjectsAtom';
import TotalPrice from './TotalPrice';
import {motion, AnimatePresence} from "framer-motion";

function SubjectList(prop) {

const [totalPrice , setTotalPrice] = useRecoilState(subjectState);
const [subjectsSelectedList, setSubjectsSelectedList] = useRecoilState(subjectsAtom);
const subjects = prop.subjects
// console.log("what do i get here?",subjects)
// console.log("test", Array.isArray(subjects)) 

  // const subjects = [
  //   {
  //     id : 0,
  //     subj : "eng",
  //     price : 60,
  //   },
  //   {
  //      id : 1,
  //     subj : "bm",
  //     price : 60,
  //   },
  //   {
  //      id : 2,
  //     subj : "bi",
  //     price : 60,
  //   },
  //   {
  //      id : 3,
  //     subj : "matqqqqqqq",
  //     price : 60,
  //   },
  //   {
  //      id : 4,
  //     subj : "red",
  //     price : 60,
  //   },
  //   {
  //      id : 5,
  //     subj : "jpn",
  //     price : 60,
  //   },

  // ];
// console.log("dataType", subjects)//

    const [checked , setChecked] = useState(
      new Array(subjects.length).fill(false)
    );

const [submitButton , setSubmitButton] = useState(false)
    const [checkedALL , setCheckedALL] = useState(false);

    const handlers = (position) => {

     const updateCheckStatus = checked.map((list,index) => 
      index === position ? !list:list
      ) ;
      setChecked(updateCheckStatus);
const updateSelectALL = ((e) =>
e == true
);
updateCheckStatus.every(updateSelectALL) ? setCheckedALL(true):setCheckedALL(false);

let test = false;

updateCheckStatus.find((e) => 
e == true
? test = true : test = false);

// if(updateCheckStatus.every(updateSelectALL)){
//   setCheckedALL(true); 
// }
setSubmitButton(test);

// console.log(checked);
// console.log(position);
// console.log(updateCheckStatus);
// console.log(setChecked(updateCheckStatus));


 const updateTotalPrice = updateCheckStatus.reduce((sum,currVal,currIndex) => 
 {
  if( currVal === true){

     sum = sum + subjects[currIndex].price;
  }
  return sum;
 },
 0 // this fucking shit makes a difference ggwp
 );
 // console.log(updateTotalPrice);
 setTotalPrice(updateTotalPrice);

    };
const handler1 = (e) => {
// const toggle = useCallback(() => setCheckedALL(checkedALL => !checkedALL), []);
setCheckedALL(e.target.checked);
const selectAll = checked.map((list,index) =>
e.target.checked ? list = true : list = false
)   ;
setChecked(selectAll);
setSubmitButton(e.target.checked);
// console.log(checkedALL);
// console.log(e.target.checked);


const updateTotalPrice = selectAll.reduce((sum,currVal,currIndex) => 
{
 if( currVal === true){

    sum = sum + subjects[currIndex].price;
 }
 return sum;
},
0 // this fucking shit makes a difference ggwp
);
// console.log(updateTotalPrice);
setTotalPrice(updateTotalPrice);
};


const submitHandler = () => {
 const subjectsSelected = checked.map((currVal,currIndex) => {
  
if(currVal) { return subjects[currIndex]; }

  })
  const filteredSubjects = subjectsSelected.filter((currVal,currIndex) => {
    if(currVal !== undefined) { return subjects[currIndex]; }


  },[]
  )
  // console.log(checked);
  // console.log(subjectsSelected);
  // console.log(filteredSubjects);
  setSubjectsSelectedList(filteredSubjects);

}
useEffect(() => {
  localStorage.setItem("totalPrice",JSON.stringify(totalPrice))
  localStorage.setItem("subjectList",JSON.stringify(subjectsSelectedList))
  localStorage.setItem("idkIfitWillWorks", JSON.stringify(checked))
},[subjectsSelectedList,checked,totalPrice]);
// useEffect(() => {

//   const item = JSON.parse(localStorage.getItem("idkIfitWillWorks"));

//     setChecked(item);
//     console.log("checked",checked)
//     console.log("item",item)
  
// },[]);
  return (
    <motion.div className=' justify-center items-center content-center ml-[25%]' initial={{y:"100vh"}}
    animate={{y:0}}
    transition={{type:"spring",stiffness:120,delay:0.5}}>

      <motion.div  whileHover={{scale:1.3,originX:0,color:"red"}}
    transition={{type:"spring", stiffness:300}}>
    <FormControlLabel
    label="Select ALL"
    control={
      <Checkbox color='secondary' sx={{
        color: "secondary",
      }}
        checked={checkedALL}
        onChange={ handler1}
      />
    }
  /> </motion.div>
  <div className='grid grid-cols-1  md:grid-cols-3 md:justify-center items-center content-center'>
 {subjects.map((list,index) =>{
  return (
    <div key={index} >
    <motion.div className=' flex  mt-8 '  
    whileHover={{scale:1.3,originX:0,color:"yellow"}}
    transition={{type:"spring", stiffness:300}} > 
  <Box  >
  <FormControlLabel
     label={list.subj}
    control={<Checkbox  sx={{
      color: "#ad1457",
      '&.Mui-checked': {
        color: "#d81b60",
      },
    }} checked={checked[index]} onChange={() => handlers(index)} />}
  />

</Box>

{/* <div>
  {`  ${list.subj}` }
</div> */}
</motion.div></div>
 );
 }) }
 </div>

<div className=''>
{/* <TotalPrice/> */}<AnimatePresence>

{submitButton && 

<Link href={"/page4"} passHref ><a>
  <motion.button
initial={{x : "-100vw",
opacity: 0,
  }}
  animate={{x : 0,
    opacity: 1,
  }}
  whileHover={{
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)"
  }}
  exit={{
  opacity:0
}}
  className='border p-4 rounded-full w-auto h-[40px] justify-center items-center flex ml-[30%] mt-8' onClick={submitHandler}> Confirm</motion.button>
  </a></Link>

}</AnimatePresence>
</div>
  </motion.div >
  )
}

export default SubjectList