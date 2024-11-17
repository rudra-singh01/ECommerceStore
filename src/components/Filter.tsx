"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);  
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-5 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
          onChange={handleFilterChange}
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
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price "
          className="text-xs rounded-lg pl-2 w-24 ring-1 ring-gray-200"
          onChange={handleFilterChange}
        />
        
        <select
          name="cat"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="New Arrived">New Arrived</option>
          <option value="popular">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>All Filter</option>
        </select>
        
        <div className="">
          <select
            name="sort"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium border-2 border-black"
            onChange={handleFilterChange}
          >
            <option>Sort By</option>
            <option value="asc price">price(low to high)</option>
            <option value="desc price">price(high to low)</option>
            <option value="asc lastUpdate">Newest</option>
            <option value="desc lastUpdate">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
