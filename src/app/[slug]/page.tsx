import Add from "@/components/Add";
import CustomProduct from "@/components/CustomProduct";
import ProductImages from "@/components/ProductImages";
import { WixClientServer } from "@/lib/WixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const mywixClient = await WixClientServer();
  const products = await mywixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }
  const product = products.items[0];
  console.log(product.productOptions);
  
  return (
    <div className="px-4 md:px-8 xl:32 2xl:px-64 mb-[4vw] relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-sm">{product.description}</p>
        <div className="h-[1px] bg-slate-400" />
        <div className="flex items-center gap-10">
          {product.price?.price === product.price?.discountedPrice ? (
            <h1 className="text-xl font-semibold ">
              ${product.price?.discountedPrice}
            </h1>
          ) : (
            <>
              <h3 className="text-gray-500 line-through">
                ${product.price?.price}
              </h3>
              <h1 className="text-xl font-semibold ">
                ${product.price?.discountedPrice}
              </h1>
            </>
          )}
        </div>
        <div className="h-[.5px] bg-slate-400" />
        {product.variants && product.productOptions ? (
          <CustomProduct
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ):(

        <Add productId={product._id!} variantId={"00000000-000000-000000-000000000001"} stockNumber={product.stock?.quantity || 0} /> 
        )}
        <div className="h-[1px] bg-slate-400" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.id}>
            <h4 className="font-medium mb-4 ">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
