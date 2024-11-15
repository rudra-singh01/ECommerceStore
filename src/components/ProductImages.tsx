"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/28802129/pexels-photo-28802129/free-photo-of-tranquil-lake-scene-with-mountains-and-boats.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3231643/pexels-photo-3231643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2817085/pexels-photo-2817085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          fill
          sizes="50vw"
          alt=""
          className="object-contain rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4">
        {images.map((img, i) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={()=>setIndex(i)}>
            <Image
              key={img.id}
              src={img.url}
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
