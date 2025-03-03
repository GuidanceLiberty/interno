import { RiBaseStationFill, RiChatDeleteFill, RiCheckboxCircleFill, RiCheckboxMultipleFill, RiCheckDoubleFill, RiCheckLine, RiCloseFill, RiCloseLargeFill, RiCompass2Fill, RiCompass2Line, RiCompass3Fill, RiDeleteBack2Fill, RiDeleteBack2Line, RiDeleteBackFill, RiDeleteBackLine, RiDeleteBin2Fill, RiDeleteBin2Line, RiDeleteBin3Fill, RiHome2Fill, RiHomeSmile2Fill, RiHotelLine, RiHotspotFill, RiHotspotLine, RiMoonClearFill, RiSettings2Fill } from '@remixicon/react'
import React from 'react'

const Price = () => {
  return (
    <section className='z-20 mt-[80px] lg:mt-[150px]'>
        <div className="container-mx-auto">
            <h1 className='text-4xl font-normal mb-3 text-center'>
                See Our Price List
            </h1>
            <div className="price__grid grid grid-cols-1 lg:grid-cols-3 gap-[27px] py-7">
                <div className="grid__item w-full max-w-[382px] h-[520] border border-primary/20 rounded-[15px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                    <div className="flex gap-3  justify-center">
                        <RiSettings2Fill size={40} className='text-5xl text-accent' />
                        <p className=''>Basic</p>
                    </div>
                    <div className="flex flex-col gap-1 grid-cols-1">
                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Decoration
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Wall Painting
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Arts & Design
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Lightings
                        <RiCloseFill className="text-lg text-red-400" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        CCTV Cameras
                        <RiCloseFill className="text-lg text-red-400" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Solar Device
                        <RiCloseFill className="text-lg text-red-400" />
                        </p>
                    </div>
                </div>

                <div className="grid__item w-full max-w-[382px] h-[520] border border-primary/20 rounded-[15px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                    <div className="flex gap-3  justify-center">
                        <RiCompass3Fill size={40} className='text-5xl text-accent' />
                        <p className=''>Standard</p>
                    </div>
                    <div className="flex flex-col gap-1 grid-cols-1">
                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Decoration
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Wall Painting
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Arts & Design
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Lightings
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        CCTV Cameras
                        <RiCloseFill className="text-lg text-red-400" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Solar Device
                        <RiCloseFill className="text-lg text-red-400" />
                        </p>
                    </div>
                </div>

                <div className="grid__item w-full max-w-[382px] h-[520] border border-primary/20 rounded-[15px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                    <div className="flex gap-3  justify-center">
                        <RiCheckboxCircleFill size={40} className='text-5xl text-accent' />
                        <p className=''>Premium</p>
                    </div>
                    <div className="flex flex-col gap-1 grid-cols-1">
                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Decoration
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Wall Painting
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Arts & Design
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Lightings
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        CCTV Cameras
                        <RiCheckLine className="text-lg text-accent" />
                        </p>

                        <p className='text-lg font-[550] mt-4 flex justify-between  rounded-[10px] p-[8px] bg-accent-secondary'>
                        Solar Device
                        <RiCheckLine className="text-lg text-accent" />
                        </p>
                    </div>
                </div>
                
            </div>
        </div> 
    </section>
  )
}

export default Price
