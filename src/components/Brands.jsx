import brands_1 from '../assets/brands/01.svg'
import brands_2 from '../assets/brands/02.svg'
import brands_3 from '../assets/brands/03.svg'
import brands_4 from '../assets/brands/04.svg'
import brands_5 from '../assets/brands/05.svg'

const Brands = () => {
  return (
    <section className='brands mt-[80] lg:mt-[200px] z-20'>
      <h1 className='text-4xl font-semibold mb-12 text-center'>Our Trusted Customers</h1>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <img src={brands_1} alt="brand 1" />
            <img src={brands_2} alt="brand 2" />
            <img src={brands_3} alt="brand 3" />
            <img src={brands_4} alt="brand 4" />
            <img src={brands_5} alt="brand 5" />
        </div>
      </div>
    </section>
  )
}

export default Brands
