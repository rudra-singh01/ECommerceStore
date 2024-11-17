"use client";
import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [qnatity, setQuantity] = useState(0);
  // //tempo
  // const stock = 4;

  const hadleclick = (type: "s" | "a") => {
    if (type === "s" && qnatity > 0) {
      setQuantity(qnatity - 1);
    } else if (type === "a" && qnatity < stockNumber) {
      setQuantity(qnatity + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4>choose a qnatity</h4>
      <div className=" flex items-center gap-5">
        <div className="bg-gray-100 px-2 py-3 rounded-3xl flex items-center justify-between gap-10">
          <button
            className="cursor-pointer text-xl"
            onClick={() => hadleclick("s")}
          >
            -
          </button>
          {qnatity}
          <button
            className="cursor-pointer text-xl"
            onClick={() => hadleclick("a")}
          >
            +
          </button>
        </div>
        <div className="text-sm">
          only <span className="font-bold text-red-500">{stockNumber}</span> left!{" "}
          <br />
          {"Don't"} miss it{" "}
        </div>
      </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-red-500 text-red-500 py-2 px-4 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
        Add to Cart
      </button>
    </div>
  );
};

export default Add;
