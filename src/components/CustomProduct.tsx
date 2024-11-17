"use client";
import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "./Add";

const CustomProduct = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOption, setSelectedOption] = useState<{
    [key: string]: string;
  }>({});

  const [selectedVariants, setSelectedVariants] = useState<products.Variant>()
  useEffect(()=>{
    const variant = variants.find((v)=>{
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return(
        Object.entries(selectedOption).every(([key, value]) => variantChoices[key] === value)
      )
    });
    setSelectedVariants(variant);
  }, [selectedOption, variants]);


  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOption((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choice: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;
      return (
        Object.entries(choice).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  console.log("Selected Option State:", selectedOption); // Check selectedOption output

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div key={option.name} className="flex flex-col gap-4">
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
          {option.choices?.map((choice) => {
            const disabled = !isVariantInStock({
              ...selectedOption,
              [option.name!]: choice.description!,
            });
            const selected =
              selectedOption[option.name!] === choice.description!;

            const clickHnadler = disabled?undefined:()=>handleOptionSelect(option.name!, choice.description!);
            
            return option.name == "Color" ? (
              <li
                key={choice.description}
                className="w-8 h-8 flrx  ring-1 rounded-full ring-gray-300 relative cursor-pointer" style={{backgroundColor:choice.value,cursor:disabled? "not-allowed" : "pointer"}}
                onClick={clickHnadler}
              >
                {selected && <div className="absolute w-10 h-10 rounded-full ring-2 ring-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>}
                {disabled && <div className="absolute w-10 h-10 rounded-full ring-2 ring-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>}
              </li>
            ) : (
              <li className="px-5 py-2 rounded-xl ring-1 ring-red-500 text-xl font-bold hover:ring-white transition-all hover:bg-red-300 hover:text-2xl hover:text-white"style={{cursor:disabled?"not-allowed":"pointer",backgroundColor:selected ? "salmon":disabled?"#F5DADF":"white",color:selected || disabled ? "white":"salmon"}} onClick={clickHnadler}>
                {choice.description}
              </li>
            );
          })}
          </ul>
        </div>
      ))}
      <Add productId={productId} variantId={selectedOption.id || "00000000-000000-000000-000000000001"} stockNumber={selectedVariants?.stock?.quantity || 0}/>
    </div>
  );
};

export default CustomProduct;

{
  /* <h4 className="font-medium">{option.name}</h4>
    <ul className="flex items-center gap-5">
      <li className="w-8 h-8 ring-1 rounded-full ring-gray-300 relative cursor-pointer bg-red-500">
        <div className="absolute w-10 h-10 rounded-full ring-2 ring-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </li>
      <li className="w-8 h-8 ring-1 rounded-full ring-gray-300 relative cursor-pointer bg-blue-500"></li>
      <li className="w-8 h-8 ring-1 rounded-full ring-gray-300 relative cursor-pointer bg-green-500">
      <div className="absolute w-10 h-[2px] rounded-full rotate-45 ring-2 ring-red-500 bg-red-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </li>
    </ul> */
}

{
  /* <h4 className="font-medium">Choose the size</h4>
<ul className="flex items-center gap-3">
  <li className="px-5 py-2 rounded-xl ring-1 ring-red-500 text-xl font-bold hover:ring-white transition-all hover:bg-red-300 hover:text-2xl hover:text-white">
    small
  </li>
  <li className="px-5 py-2 rounded-xl ring-1 ring-red-500 text-xl font-bold hover:ring-white transition-all hover:bg-red-300 hover:text-2xl hover:text-white">
    medium
  </li>
  <li className="px-5 py-2 rounded-xl ring-1 ring-red-500 text-xl font-bold hover:ring-white transition-all hover:bg-red-300 hover:text-2xl hover:text-white">
    large
  </li>
</ul> */
}
