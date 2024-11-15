'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, LogOut } from 'lucide-react'
import SearchBar from '@/components/SearchBar'
import NavIcons from '@/components/NavIcons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`h-20 top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary transition-colors duration-300 hover:text-primary-dark">
              Logo
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar/>
            {['Home', 'Shop', 'Deals', 'About', 'Contact'].map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-primary-light transform hover:-translate-y-1 hover:shadow-md"
              >
                {item}
              </Link>
            ))}
            <NavIcons/>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span 
                  className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`} 
                />
                <span 
                  className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'translate-y-2'
                  }`} 
                />
                <span 
                  className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span className="sr-only">Close main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          {['Home', 'Shop', 'Deals', 'About', 'Contact', 'Cart', 'Logout'].map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`block text-gray-600 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-primary-light transform ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}