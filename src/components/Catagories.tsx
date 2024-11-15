import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Catagories = () => {
  return (
    <div className='scrollbar-hide px-4 overflow-x-scroll'>
        <div className="flex gap-4 md:gap-8">
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:1/6'>
                <div className="relative bg-slate-100 w-full h-96"  >
                    <Image src="https://images.pexels.com/photos/28714404/pexels-photo-28714404/free-photo-of-honey-drizzle-from-wooden-dipper-on-yellow-background.jpeg" alt='' sizes='10vw' fill className='object-cover'/>
                </div>
                <h1 className='mt-8 font-light tracking-tight text-center'>all Profuct</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:1/6'>
                <div className="relative bg-slate-100 w-full h-96"  >
                    <Image src="https://images.pexels.com/photos/28714404/pexels-photo-28714404/free-photo-of-honey-drizzle-from-wooden-dipper-on-yellow-background.jpeg" alt='' sizes='10vw' fill className='object-cover'/>
                </div>
                <h1 className='mt-8 font-light tracking-tight text-center'>all Profuct</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:1/6'>
                <div className="relative bg-slate-100 w-full h-96"  >
                    <Image src="https://images.pexels.com/photos/28714404/pexels-photo-28714404/free-photo-of-honey-drizzle-from-wooden-dipper-on-yellow-background.jpeg" alt='' sizes='10vw' fill className='object-cover'/>
                </div>
                <h1 className='mt-8 font-light tracking-tight text-center'>all Profuct</h1>
            </Link>
        </div>
    </div>
  )
}

export default Catagories