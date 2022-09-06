import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { useRecoilValue } from 'recoil'
import { subjectState } from '../atoms/subjectAtom'
import { subjectsAtom } from '../atoms/subjectsAtom'
import Coupon from './Coupon'
import {motion} from "framer-motion";
import { gradeAtom } from '../atoms/gradeAtom'
import { useMediaQuery } from 'react-responsive'
import { artsSubjectAtom } from '../atoms/artsSubjectAtom'

function OrderSummary() {

const totalPrice = useRecoilValue(subjectState)
// const subjectList = useRecoilValue(subjectsAtom)
// const artsList = useRecoilValue(artsSubjectAtom);
const couponPrice = 0
const [subjectList,setSubjectList] = useState([]);

const [artsList,setArtsList] = useState([]);
const [selectedGrade, setSelectedGrade] = useState([]);
// const [animation ,setAnimation] = useState()
// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
useEffect(() =>{
    const subjectList = JSON.parse(localStorage.getItem("subjectList"));
    if(subjectList) {
        setSubjectList(subjectList);
    }
    const artList = JSON.parse(localStorage.getItem("artsSubjectList"));
    if(artList) {
        setArtsList(artList);
    }
if(item){
  setSelectedGrade(item);
}
const item = JSON.parse(localStorage.getItem("testGrade"));
if(item){
  setSelectedGrade(item);
}
},[]);
// useEffect(() => {
//     {isTabletOrMobile ? setAnimation(mobileVarients) : setAnimation(pcVarients)}

// },[isTabletOrMobile])
// console.log(animation)
const mobileVarients = {
    initial : { opacity : 0},
    animate : { opacity : 1,
    transition : { delay :1,         ease: "easeInOut"
},
    },
}
const pcVarients = {
    initial : {x : "100vw"},
    animate : {x : 0,
    transition : {
        delay :1,
        ease: "easeInOut"
    }}
}
  return (
    
    <motion.div variants={mobileVarients} initial= "initial" animate = "animate"
    className='m-7 w-[80%] md:mr-12 md:w-1/3'> Summary

<div>

{/* subject list  */}
<div className='rounded-md bg-slate-500 p-4'>  
{subjectList &&  subjectList.length ? <div> Tuition Subjects:
{ subjectList.map((list,index) => {
return(

<div className=' flex    justify-between  ' key={index}>
<div className='indent-10'>{
    list.subj    
    } ({selectedGrade})</div>
{/* <div className=''> RM{list.price.toFixed(2)}</div>  */}
</div>

);

}) 

}</div> : ''}  

{artsList && artsList.length ? <div>Arts Subjects:
{ artsList.map((list,index) => {
return(

<div className=' flex    justify-between  ' key={index}>
<div className='indent-10'>{
    list.subj    
    } </div>

</div>

);

}) 

}</div> : ''}

</div>



</div>

    </motion.div>
  )
}

export default OrderSummary