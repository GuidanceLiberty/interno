
import test_1 from '..//assets/testimonial/01.png'
import test_2 from '..//assets/testimonial/02.png'
import test_3 from '..//assets/testimonial/03.png'
import test_4 from '..//assets/testimonial/04.png'
import { RiUser3Line } from '@remixicon/react'
import { animate, motion } from 'framer-motion'



const Testimonial = () => {
  return (
    <section className='mt-[120px] container mx-auto' id='testimonials'>
        <h1 className='text-4xl font-semibold mb-8 text-center'>What our client says</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-8 h-full overflow-hidden">
            <div className="slide">
                <div className="title">
                    <img src={test_1} alt="" className='w-14'/>

                    <div className="">
                        <h2 className='text-lg font-medium'>Nattasha SMith</h2>
                        <span className='text-sm text-gray-500'>Greenville, USA</span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                        "Working with this team was an amazing experience from start to finish. They truly listened to our needs and vision for the home, and it showed in every detail. The construction process was seamless, with clear communication throughout. We felt supported every step of the way, and they exceeded our expectations. The final result is a beautiful home that we are proud of. Every room feels exactly how we imagined it—comfortable, stylish, and functional. We're so happy with how it turned out and grateful for all the hard work. Highly recommend them to anyone looking to build their dream home!"
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
                        <span className='text-sm text-gray-500'>Texas, USA</span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                    "Living here has been a great experience! The property is well-maintained, and any issues I’ve had were addressed quickly. The management team is responsive and truly cares about the tenants. I’m very happy with my home!"
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

                <div className="mt-8 text-sm line-clamp-3">
                        "Working on this project has been incredibly rewarding. We focused on quality, innovation, and customer satisfaction every step of the way. Seeing the positive impact on the community and knowing we've delivered exceptional properties makes all the hard work worth it. It's been a pleasure to help people find their dream homes!"
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
                        <span className='text-sm text-gray-500'>NewYork, USA</span>
                    </div>
                </div>

                <div className="mt-8 text-sm line-clamp-3">
                        "Transforming spaces is my passion, and this project was a true highlight. Collaborating with the team to bring clients' visions to life was incredibly rewarding. The end result is a perfect blend of style, functionality, and comfort. It’s always fulfilling to see clients love their new space!"
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
