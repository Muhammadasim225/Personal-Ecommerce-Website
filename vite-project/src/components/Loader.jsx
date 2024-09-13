import React, { useState } from 'react'
import {easeOut, motion, transform,useCycle} from 'framer-motion'

const Loader = () => {

    const loaderVariant={
        aniOne:{
            x:[-20,20],
            y:[0,-30],
            transition:{
                x:{yoyo:Infinity,duration:0.5,repeatType: "reverse",},
                y:{yoyo:Infinity,duration:0.25,ease:"easeOut", repeatType: "reverse",
},
            }
        },
        aniTwo:{
          y:[0,-40],
          x:0,
          transition:{
            y:{
              yoyo:Infinity,
              duration:0.25,
              ease:"easeOut",
      
            }
          }
        }



    }


    const [first,second]=useCycle("aniOne","aniTwo");
  return (
    <>
     <motion.div className='loader' variants={loaderVariant} animate={first}>
      
      </motion.div>


      <div onClick={()=>second()}>
        Cycle Loader

  
  
      </div>
    
    </>

   
  )
}

export default Loader
