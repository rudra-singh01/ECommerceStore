"use client";
import Image from "next/image";
import React, { useState } from "react";


const ProductImages = ({items}:{items:any}) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          fill
          sizes="50vw"
          alt=""
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4">
        {items.map((item:any, i:number) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8" key={item._id} onClick={()=>setIndex(i)}>
            <Image

              src={item.image?.url}
              fill
              sizes="30vw"
              alt=""
              className="object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
