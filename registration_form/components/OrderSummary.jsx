import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { useRecoilValue } from 'recoil'
import { subjectState } from '../atoms/subjectAtom'
import { subjectsAtom } from '../atoms/subjectsAtom'
import Coupon from './Coupon'
import {motion} from "framer-motion";
import { gradeAtom } from '../atoms/gradeAtom'
function OrderSummary() {

const totalPrice = useRecoilValue(subjectState)
const subjectList = useRecoilValue(subjectsAtom)
const couponPrice = 0

const [selectedGrade, setSelectedGrade] = useState([]);

useEffect(() =>{
const item = JSON.parse(localStorage.getItem("testGrade"));
if(item){
  setSelectedGrade(item);
}
},[]);
  return (
    
    <motion.div initial={{
        x:"100vw"
    }} 
    animate={{
        x:0
    }}
    transition={{
        delay:1
    }}
    className='m-7 w-[80%] md:mr-12 md:w-1/3'> Summary

<div>

{/* subject list  */}
<div className='rounded-md bg-slate-500 p-4'>    
Subjects:
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

}
{/* <div className='flex justify-between '>
    <div>Coupon Discount</div>
    <div>RM{couponPrice.toFixed(2)}</div>
</div>
<div className='flex justify-between border-t'>
    <div>Total</div>
    <div>RM{totalPrice.toFixed(2)}</div>
</div> */}
    {/* total pric  */}
</div>

</div>

    </motion.div>
  )
}

export default OrderSummary