import Add from '@/components/Add'
import CustomProduct from '@/components/CustomProduct'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const page = () => {
  return (
    <div className='px-4 md:px-8 xl:32 2xl:px-64 mb-[4vw] relative flex flex-col lg:flex-row gap-16'>
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages/>
      </div>
      <div className="w-full lg:1/2 flex flex-col gap-6">
        <h1 className='text-4xl font-medium'>Products Name</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim, laudantium ipsum alias voluptatem debitis quas, voluptas nesciunt harum iste labore, ratione eaque doloribus? Molestias deserunt eveniet architecto explicabo accusamus</p>
        <div className="h-[1px] bg-slate-400"/>
        <div className="flex items-center gap-10">
          <h3 className='text-gray-500 line-through'>$50</h3>
          <h1 className='text-xl font-semibold '>$50</h1>
        </div>
        <div className="h-[.5px] bg-slate-400"/>
        <CustomProduct/>
        <Add/>
        <div className="h-[1px] bg-slate-400"/>
        <div className="text-sm">
          <h4 className='font-medium mb-4 '>Title</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa suscipit rerum a sint dolore eaque explicabo sapiente, perspiciatis eius beatae. Illo suscipit magnam possimus iure similique blanditiis reprehenderit nam aut!</p>
        </div>
      </div>
    </div>
  )
}

export default page