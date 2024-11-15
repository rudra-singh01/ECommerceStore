'use client'
import React, { useState } from "react";
import { Search, ShoppingCart, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CartModel from "./CartModel";

const NavIcons = () => {
  const router = useRouter()
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false; 

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev)=>!prev);
    setIsCartOpen((prev)=>!prev);
  };
  const handleClick2 = () => {
    setIsCartOpen((prev)=>!prev);
  };


  return (
    <div className="hidden md:flex items-center space-x-4 relative">
     {isProfileOpen && (
       <div className="absolute p-4 rounded-md top-12 left-0 text-sm text-black">
        <Link href={"/"}>profile</Link>
        <div className="mt-2 cursor-pointer">Logout</div>
       </div>
     )}
     <Image
       src="/profile.png"
       alt="profile" 
       width={22}
       height={22}
       onClick={handleClick}
     />
     <Image
       src="/cart.png"
       alt="profile" 
       width={22}
       height={22}
       onClick={handleClick2}
     />
     <div  className="absolute -top-3 right-[40%] w-6 h-6 bg-red-400 rounded-full text-white flex items-center justify-center">2</div>
     {!isCartOpen && <CartModel/>}

      <Link
        href="/logout"
        className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-primary-light transform hover:-translate-y-1 hover:shadow-md"
      >
        <LogOut size={20} />
      </Link>
    </div>
  )
};

export default NavIcons;