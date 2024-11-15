"use client";
import React, { useState } from "react";
import Image from "next/image";

const CartModel = () => {
  const cartItems = true;
  return (
    <div className="relative">
      <div className="w-[400px] absolute p-6 rounded-lg shadow-xl bg-white right-0 top-12 flex flex-col gap-6 z-20 max-h-[80vh] overflow-auto">
        {!cartItems ? (
          <div className="text-gray-500 text-center py-8">Aapki cart khali hai</div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {/* First Item */}
              <div className="flex gap-4 border-b pb-4">
                <Image
                  src="https://images.pexels.com/photos/28714404/pexels-photo-28714404/free-photo-of-honey-drizzle-from-wooden-dipper-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={80}
                  height={100}
                  alt="Random product"
                  className="object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <div className="flex flex-col justify-between w-full">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">Honey Bottle</h3>
                        <div className="font-semibold text-gray-900">₹100</div>
                      </div>
                      <div className="text-sm text-green-600">
                        In Stock
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Qty:</span>
                        <select className="border rounded px-2 py-1 text-sm">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                    <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* You can add more items here with the same structure */}
            </div>

            <div className="sticky bottom-0 bg-white pt-4">
              <div className="space-y-3 border-b pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹100</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹100</span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md font-medium transition-colors">
                  View Cart
                </button>
                <button className="flex-1 py-2.5 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModel;
