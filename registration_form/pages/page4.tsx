import React, { useEffect } from 'react'
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  TextField,  } from '@mui/material';
import { errorSelector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { blue, green } from '@mui/material/colors';
import { subjectsAtom } from '../atoms/subjectsAtom';
import { subjectState } from '../atoms/subjectAtom';
import BackButton from '../components/BackButton';
import { userDataAtom } from '../atoms/userDataAtom';
import Link from 'next/link';
import Router from 'next/router';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { alpha, styled,createTheme,ThemeProvider } from '@mui/material/styles';
import { Palette } from '@mui/icons-material';
function page4() {
const [userData, setUserData] = useRecoilState(userDataAtom);
// const subjectList = useRecoilValue(subjectsAtom);
// const subjectListsss = useRecoilValue(subjectState);

// console.log('wanna test this shit out' , subjectListsss)
// console.log('wanna test this shit out for old shit' , subjectList)

const schema = yup.object().shape({
parentName : yup.string().required("Parent Name is a required field").min(2, "Parent Name must be at least 2 characters"),
studentName : yup.string().required("Student Name is a required field").min(2,"Student Name must be at least 2 characters"),
studentIC : yup.string().required("Student IC Number is a required field").matches(/^\d{6}\d{2}\d{4}$/, 'Invalid Student IC Number').max(13),
school : yup.string().required("School Name is a required field").min(3,'School Name must be at least 3 charaters'),
contact : yup.string().matches(/^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/, "Invalid Phone Number").max(12).required("Contact Number is a required field"),
email : yup.string().email().required("Email is a required field"),


}).required();

  const { control, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});

  const onSubmit =  async(data) => {
    
    
    setUserData(data)

//  // Send the data to the server in JSON format.
//     const JSONdata = JSON.stringify(data)
//   // API endpoint where we send form data.
//   const endpoint = '/api/form'

//   // Form the request for sending data to the server.
//   const options = {
//     // The method is POST because we are sending data.
//     method: 'POST',
//     // Tell the server we're sending JSON.
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // Body of the request is the JSON data we created above.
//     body: JSONdata,
//   }

//   // Send the form data to our forms API on Vercel and get a response.
//   const response = await fetch(endpoint, options)

//   // Get the response data from server as JSON.
//   // If server returns the name submitted, that means the form works.
//   const result = await response.json()
  // alert(`Is this your full name: ${result.data}`)
    // console.log(userData)
    Router.push("/page5")
    };


console.log("checking if the user data has put put in the put", userData)
console.log("testObject", Object.keys(userData))
useEffect(() => {
  localStorage.setItem("UserData",JSON.stringify(userData))
},[userData]);

const formVarients = {
hidden: {opacity:0},
show: { opacity:1,
transition: {when: "beforeChildren", staggerChildren:0.1},},

};
const textFieldVarients = {
  hidden: {x:"-100vw"},
  show: {opacity:1 ,x:0,
    transition: {
      type:"string",
      mass:0.4,
      damping:8,
    },
  },
};

// const themeColor = createTheme({
//   palette: {
//     primary:{
//       main : "#e3f2fd",
//       contrastText : "#e3f2fd",
  
      
//     },
//   },
// })
const theme = createTheme({
// fucking did it !
components : {
MuiTextField : {
 styleOverrides : {
  root : {'& label.Mui-focused': {
    color: 'white',
  },
  '& label': {
    color: 'white',
  },
  '& label.Mui': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
 },
},
},
},
})
// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'white',
//   },
//   '& label': {
//     color: 'white',
//   },
//   '& label.Mui': {
//     color: 'white',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'white',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'white',
//     },
//     '&:hover fieldset': {
//       borderColor: 'yellow',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'white',
//     },
//   },
// });

  return (
    <div className='h-[120vh] scrollbar'>
    <motion.div className='h-screen'
    initial={{x:"100vw"}}
    animate={{x:0}}
    exit={{x:"-100vw"}}
    transition={{ease:"easeInOut"}}
    >
<Header/>
<BackButton />

<h1 className='mt-[5%] justify-center items-center flex font-extrabold text-3xl'> Please fill in the fields below</h1>

<motion.form className='mt-[5%] justify-center items-center flex flex-col  ' onSubmit={handleSubmit(onSubmit)}
variants={formVarients}
initial="hidden"
animate="show">
  <ThemeProvider theme={theme}>
<Controller
defaultValue={""}
name={"parentName"}
control={control}
render={({field }) =>
<TextField component={motion.div} variants={textFieldVarients} color="primary" 
  sx={{label : "white",  width:"30%",   margin:"5px" } } {...field} label="Parent Full Name" variant='outlined' error={!!errors.parentName} helperText={errors.parentName ? errors.parentName.message : ""}/>  

}
/>
<Controller 
defaultValue={""}
name={"studentName"}
control={control}
render={({field }) =>
<TextField component={motion.div} variants={textFieldVarients} sx={{ width:"30%",    margin:"5px" } }  {...field} label="Student Full Name" variant='outlined' error={!!errors.studentName} helperText={errors.studentName ? errors.studentName.message : ""}/>  

}
/>
<Controller 
defaultValue={""}
name={"studentIC"}
control={control}
render={({field }) =>
<TextField component={motion.div} variants={textFieldVarients} sx={{ width:"30%",    margin:"5px" } }  {...field} label="Student IC Number" variant='outlined' error={!!errors.studentIC} helperText={errors.studentIC ? errors.studentIC.message : ""}/>  

}
/>
<Controller 
defaultValue={""}
name={"school"}
control={control}
render={({field }) =>
<TextField component={motion.div} variants={textFieldVarients} sx={{  width:"30%", margin:"5px" } }  {...field} label="School Name" variant='outlined' error={!!errors.school} helperText={errors.school ? errors.school.message : ""}/>  

}
/>
<Controller 
defaultValue={""}
name={"contact"}
control={control}
render={({field }) =>
<TextField component={motion.div} variants={textFieldVarients} sx={{ width:"30%",    margin:"5px" } }  {...field} label="Contact Number" variant='outlined' error={!!errors.contact} helperText={errors.contact ? errors.contact.message : ""}/>  

}
/>
<Controller 
defaultValue={""}
name={"email"}
control={control}
render={({field }) =>
<TextField className='text-white border-white '   component={motion.div} variants={textFieldVarients} sx={{ width:"30%",    margin:"5px" } }  {...field} label="Email" variant='outlined' error={!!errors.email} helperText={errors.email ? errors.email.message : ""}/>  

}
/>
</ThemeProvider>



<p></p>
{/* <Link href={"/page5"} passHref >  */} 
{/* <a > */} 
<motion.button
  whileHover={{
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)"
  }}
type="submit" className='border p-4 outline-1 rounded-full w-auto h-10 mt-3 flex items-center justify-center content-center'  >Submit </motion.button>
{/* </a> */} 
{/* </Link> */} 
</motion.form>

</motion.div></div>
    )
}

export default page4