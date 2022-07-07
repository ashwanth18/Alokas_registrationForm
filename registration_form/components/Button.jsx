import React from 'react'
import {motion,AnimatePresence, animate} from "framer-motion";

function Button({value,handler}) {

  const pulseVarients = {
initial : {
  y: "100vh",
  opacity :0,
},
animate : {
  y:0,
opacity:1,
transition : {
delay : 0.2,
},
},

    exit: {
      y : ["-5vh , 100vh"],
      opacity : 0,
      transition : {
        duration : 0.4,
        ease : "easeInOut"
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        repeat: "Infinity",
        repeatType : "reverse",
      },

    },
  };
  return (
    <div>
        <AnimatePresence >
 <motion.button 
 variants={pulseVarients} whileHover="hover" exit={"exit"} initial={"initial"} animate={"animate"}
 className='rounded-full bg-blue-900 h-20 w-20 hover:shadow-md ' value={value} onClick={handler}>
    {value} 
</motion.button></AnimatePresence>

    </div> 
  )
}

export default Button