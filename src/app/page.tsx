// "use client"
import Catagories from "@/components/Catagories"
import FeatureProduct from "@/components/FeatureProduct"
import Footer from "@/components/Footer"
import Slider from "@/components/Slider"
import { WixClientContext } from "@/context/WixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { WixClientServer } from "@/lib/WixClientServer"
import { Suspense, useContext, useEffect } from "react"


const HomePage = async() => {
  // const myWixClient = useWixClient()
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await myWixClient.products.queryProducts().find();
  //     console.log(res);
      
  
  //   }
  //   getProducts()
  // },[myWixClient])


  

  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 xl:32 2xl:px-6">
        <h1 className="text-2xl px-8">FeatureProduct</h1>
        <Suspense fallback={"loading"}>
          <FeatureProduct categoryId={process.env.NEXT_PUBLIC_FAETURED_PRODUCTS_CATEGORY_ID!} limit={3}/>
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-8">Catagories</h1>
        <Catagories/>
      </div>
      <div className="mt-24 px-4 md:px-8 xl:32 2xl:px-6">
        <h1 className="text-2xl px-8">New Product</h1>
        {/* <FeatureProduct/> */}
      </div>
    </div>
  )
}

export default HomePage