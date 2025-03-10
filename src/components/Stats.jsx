import { RiCalendar2Line, RiCheckLine, RiGroup3Line, RiToolsLine } from '@remixicon/react'
import React from 'react'
import {animate, motion} from 'framer-motion'

export const SlideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: 'easeInOut'
      }
    }

  }
}


const Stats = () => {
  return (
    <>
    <h1 className='mt-[80px] lg:[200px] text-4xl font-normal mb-8 text-center'>Statistics</h1>

    <section className='start z-20 bg-accent-secondary py-[80] lg:py-[150px]'>
        <div className="container-mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-12">
            <motion.div variants={0.3} initial='initial' whileInView={animate} viewport={{once: true}} className="stat__items text-center border-r lg:border-accent">
              <div className="flex justify-center bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
              
              <RiCalendar2Line size={30} className='text-accent' />
              </div> 

              <h3 className='text-5xl font-semibold text-accent font-primary'>12</h3>
              <p className='text-lg text-slate-500'>Years of experience</p>
            
            </motion.div>

            <motion.div variants={0.3} initial='initial' whileInView={animate} viewport={{once: true}} className="stat__items text-center border-r lg:border-accent">
              <div className="flex justify-center bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
              <RiCheckLine size={30} className='text-accent' />
              </div>  

              <h3 className='text-5xl font-semibold text-accent font-primary'>80</h3>
              <p className='text-lg text-slate-500'>Project Completed</p>
           
            </motion.div>

            <motion.div variants={0.3} initial='initial' whileInView={animate} viewport={{once: true}} className="stat__items text-center border-r lg:border-accent">
              <div className="flex justify-center bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
              <RiToolsLine size={30} className='text-accent' />
              </div> 

              <h3 className='text-5xl font-semibold text-accent font-primary'>15</h3>
              <p className='text-lg text-slate-500'>Active Project</p>
            
            </motion.div>

            <motion.div variants={0.3} initial='initial' whileInView={animate} viewport={{once: true}} className="stat__items text-center">
              <div className="flex justify-center bg-accent/20 w-fit mx-auto p-3 rounded-full mb-3">
              <RiGroup3Line size={30} className='text-accent' />
              </div>  

              <h3 className='text-5xl font-semibold text-accent font-primary'>93</h3>
              <p className='text-lg text-slate-500'>Happy Customer</p>
           
            </motion.div>

            
          </div>
        </div>
    </section>
    
    </>
    
  )
}

export default Stats
