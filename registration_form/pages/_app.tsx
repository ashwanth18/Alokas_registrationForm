import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import {AnimatePresence} from "framer-motion";
import { StyledEngineProvider } from '@mui/material';
function MyApp({ Component, pageProps, router }: AppProps) {
  
  return(
    
  <RecoilRoot>
     <AnimatePresence exitBeforeEnter >
     <StyledEngineProvider injectFirst>


  <Component {...pageProps} key={router.route} />
  </StyledEngineProvider>
     </AnimatePresence>

   </RecoilRoot>

   )
}

export default MyApp
