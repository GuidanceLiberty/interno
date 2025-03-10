import { RiArrowRightLine, RiCompasses2Line, RiMagicLine, RiToolsLine } from '@remixicon/react'
import React from 'react'
import {animate, motion} from 'framer-motion'

export const SlideLeft = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: -100,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: delay,
          ease: 'easeInOut'
        }
      }
  
    }
  }
  
  
  
const Steps = () => {
  return (
    <section className='steps mt-80px lg:mt-[200px] relative z-20'> 
    <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div variants={SlideLeft(0.3)} initial='initial' whileInView={"animate"} viewport={{once: true}}  className="step_step text-center">
                <div className="flex justify-center mb-4">
                    <RiCompasses2Line size={40} className='text-5xl text-accent'  />
                </div>
                <h2 className='text-3xl mb-5 '>Project Planning</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    We begin by gathering requirements, understanding the project objectives, and establishing the project timeline.
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </motion.div>
            
            <motion.div variants={SlideLeft(0.6)} initial='initial' whileInView={"animate"} viewport={{once: true}}  className="step_step text-center">
                <div className="flex justify-center mb-4">
                    <RiMagicLine size={40} className='text-5xl text-accent'  />
                </div>
                <h2 className='text-3xl mb-5 '>Gaining Materials</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    We begin by gathering requirements, understanding the project objectives, and establishing the project timeline.
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </motion.div>
            
            <motion.div variants={SlideLeft(0.9)} initial='initial' whileInView={"animate"} viewport={{once: true}} className="step_step text-center">
                <div className="flex justify-center mb-4">
                    <RiToolsLine size={40} className='text-5xl text-accent'  />
                </div>
                <h2 className='text-3xl mb-5 '>Project Execution</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    We begin by gathering requirements, understanding the project objectives, and establishing the project timeline.
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </motion.div>
            
        </div>
    </div> 
    </section>
  )
}

export default Steps