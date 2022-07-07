import {motion} from "framer-motion";
import Image from "next/image";

function Header() {
  return (
    <motion.header
    initial = {{
      y:-250
    }}
    animate= {{ y:0}}
    transition={{delay:0.1, type:"tween", stiffness:120}}
    >


        <div className="flex items-center justify-center">
<Image src={"/ALokasFinalLogoSmall.png"} width={160} height={160}></Image>
{/* <Logo></Logo> */}
</div>
      <div className="bg-white border-b border-solid " />


    </motion.header>
  )
}

export default Header