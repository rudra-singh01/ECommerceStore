import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-5 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="">All Types</option>
          <option value="physical">physical</option>
          <option value="digital">digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price "
          className="text-xs rounded-lg pl-2 w-24 ring-1 ring-gray-200"
        />
        <input
          type="text"
          name="max"
          placeholder="max price "
          className="text-xs rounded-lg pl-2 w-24 ring-1 ring-gray-200"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="">Size</option>
          <option value="size">Size</option>
        </select>
        <select
          name="price"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="">Price</option>
          <option value="price">Price</option>
        </select>
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Catagory</option>
          <option value="New Arrived">New Arrived</option>
          <option value="popular">Papular</option>
        </select>
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>All Filter</option>
        </select>
        
        <div className="">
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium border-2 border-black"
        >
          <option>Sort By</option>
          <option value="">price(low to high)</option>
          <option value="">price(high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
