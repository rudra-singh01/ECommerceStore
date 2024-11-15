"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Replace FaArrowLeft/Right with lucide icons

const Slider = () => {
  const sliderData = [
    {
      title: 'New Arrivals',
      subtitle: 'winter collection is here',
      buttonText: 'Shop Now',
      imgSrc: 'https://images.pexels.com/photos/12324552/pexels-photo-12324552.jpeg',
      imgAlt: 'Placeholder Image',
      bgColor: 'bg-yellow-200',
    },
    {
      title: 'Summer Deals',
      subtitle: 'cool deals for hot days',
      buttonText: 'Discover',
      imgSrc: 'https://images.pexels.com/photos/12324553/pexels-photo-12324553.jpeg',
      imgAlt: 'Placeholder Image',
      bgColor: 'bg-blue-200',
    },
    {
      title: 'Spring Collection',
      subtitle: 'fresh styles await',
      buttonText: 'Explore',
      imgSrc: 'https://images.pexels.com/photos/12324554/pexels-photo-12324554.jpeg',
      imgAlt: 'Placeholder Image',
      bgColor: 'bg-green-200',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cycle through slides automatically every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [sliderData.length]);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className="relative h-screen">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`w-full md:w-1/2 flex flex-col items-center justify-center ${slide.bgColor} px-4 md:px-10 py-10 md:py-0`}>
            <h3 className="text-2xl md:text-4xl font-medium text-center md:text-left mb-2 md:mb-4">{slide.title}</h3>
            <h1 className="text-3xl md:text-5xl font-semibold text-center">{slide.subtitle}</h1>
            <button className="mt-4 md:mt-6 py-2 px-4 bg-black text-white rounded-md hover:bg-black/45 transition-colors">
              {slide.buttonText}
            </button>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
            <img src={slide.imgSrc} alt={slide.imgAlt} className="object-cover w-full h-full" />
          </div>
        </div>
      ))}

      {/* Navigation buttons with icons */}
      <button onClick={handlePrev} className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        <ArrowLeft />
      </button>
      <button onClick={handleNext} className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        <ArrowRight />
      </button>
    </div>
  );
};

export default Slider;
