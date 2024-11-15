import FeatureProduct from '@/components/FeatureProduct'
import Filter from '@/components/Filter'
import Image from 'next/image'
import React from 'react'

const list = () => {
  return (
    <div className=' px-4 md:px-8 xl:32 2xl:px-64 mb-[4vw] relative'>
      <div className="image-conatiner flex items-center justify-between bg-pink-200 w-full h-[40vh]">
        <div className="w-2/3 flex items-center justify-center text-center flex-col gap-3 ">
          <h1 className='text-xl capitalize text-center'>grab upto 20% </h1>
          <button className='px-2 py-2 border-2 bg-red-400 rounded-lg border-red-700'>buy now</button>
        </div>
        <div className="relative w-1/3">
          <Image src='/woman.png' width={275} height={275}   alt='' className='object-contain'/>  
        </div>        
      </div> 
      <div className=" pt-[6vw]">
      <Filter/>
      </div>
      <h1 className='pt-20 text-xl font-semibold'>Shoes for you</h1>
      <FeatureProduct/>
    </div>
  )
}

export default list