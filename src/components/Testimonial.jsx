import React from 'react'
import test_1 from '..//assets/testimonial/01.png'
import test_2 from '..//assets/testimonial/02.png'
import test_3 from '..//assets/testimonial/03.png'
import test_4 from '..//assets/testimonial/04.png'
import { RiUser3Line } from '@remixicon/react'

const Testimonial = () => {
  return (
    <section className='mt-[120px] container mx-auto' id='testimonials'>
        <h1 className='text-4xl font-semibold mb-8 text-center'>What our client says</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-8 h-full overflow-hidden">
            <div className="slide">
                <div className="title">
                    <img src={test_1} alt="" className='w-14'/>

                    <div className="">
                        <h2 className='text-lg font-medium'>Nattasha Mith</h2>
                        <span className='text-sm text-gray-500'>Greenville, USA</span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been.
                </div>

                <div className="text-center mt-4">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}></RiUser3Line>
                        Home owner</span>
                </div>

            </div>

            <div className="slide">
                <div className="title">
                    <img src={test_2} alt="" className='w-14'/>

                    <div className="">
                        <h2 className='text-lg font-medium'>Kamaya Drake</h2>
                        <span className='text-sm text-gray-500'>Greenville, USA</span>
                    </div>
                </div>

                <div className="mt-8 text-sm">
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been.
                </div>

                <div className="text-center mt-4">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}></RiUser3Line>
                        Tenant</span>
                </div>

            </div>

            <div className="slide">
                <div className="title">
                    <img src={test_3} alt="" className='w-14'/>

                    <div className="">
                        <h2 className='text-sm font-medium'>Hines Joe</h2>
                        <span className='text-sm text-gray-500'>Greenville, USA</span>
                    </div>
                </div>

                <div className="mt-8 text-sm">
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been.
                </div>

                <div className="text-center mt-4">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}></RiUser3Line>
                        Estate Developer</span>
                </div>

            </div>

            <div className="slide">
                <div className="title">
                    <img src={test_4} alt="" className='w-14'/>

                    <div className="">
                        <h2 className='text-lg font-medium'>Mary Jane</h2>
                        <span className='text-sm text-gray-500'>Greenville, USA</span>
                    </div>
                </div>

                <div className="mt-8 text-sm">
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been.
                </div>

                <div className="text-center mt-4">
                    <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm'>
                        <RiUser3Line size={15}></RiUser3Line>
                        Interior Expert</span>
                </div>

            </div>

        </div>
      
    </section >
  )
}

export default Testimonial
