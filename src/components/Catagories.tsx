import { WixClientServer } from '@/lib/WixClientServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Catagories = async () => {
    const mywixClient = await WixClientServer()
    const cata = await mywixClient.collections.queryCollections().find();
  return (
    <div className='scrollbar-hide px-4 overflow-x-scroll'>
        <div className="flex gap-4 md:gap-8">
            {cata.items.map((items)=>(

                <Link key={items._id} href={`/list?cat=${items.slug}`} className='flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:1/6'>
                <div className="relative bg-slate-100 w-full h-96"  >
                    <Image src={items.media?.mainMedia?.image?.url} alt='' sizes='10vw' fill className='object-cover'/>
                </div>
                <h1 className='mt-8 font-light tracking-tight text-center'>{items.name}</h1>
            </Link>
            ))}
        </div>
    </div>
  )
}

export default Catagories