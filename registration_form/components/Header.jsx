import {motion} from "framer-motion";
import Image from "next/image";
import Head from 'next/head'

function Header() {
  return (
    <motion.header
    initial = {{
      y:-250
    }}
    animate= {{ y:0}}
    transition={{delay:0.1, type:"tween", stiffness:120}}
    >
      <Head>
        <title>Alokas Registration Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="flex items-center justify-center">
<Image src={"/Finalversion-1"} width={160} height={160}></Image>
{/* <Logo></Logo> */}
</div>
      <div className="bg-white border-b border-solid " />


    </motion.header>
  )
}

export default Header