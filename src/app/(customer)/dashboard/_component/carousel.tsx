/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Import icons
import { useRouter } from 'next/navigation'; // Import from Next.js


const Navbar = () => {
    const router = useRouter(); // Next.js router instead of useNavigate

  const slides = [
    {
      image: "https://www.coffeebean.com.my/media/wysiwyg/Artboard_1v2.png",
      title: "Hello there",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
      buttonText: "Get Started",
      link: "/dashboard" // Added link for routing
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/035/796/337/non_2x/ai-generated-an-aesthetic-studio-coffee-shop-interior-featuring-a-coffee-cup-and-plant-free-photo.jpg",
      title: "Discover New Flavors",
      description:
        "Experience the finest flavors of Indonesian coffee and food. Taste the rich heritage with every bite and sip.",
      buttonText: "Explore Now",
      link: "/dashboard/news" // Added link for routing
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/08/85/65/80/360_F_885658027_aCKoVfdLcQ3OTUuCFgb8zVi4iwM48EuU.jpg",
      title: "Join Our Community",
      description:
        "Become a part of our family. Share your love for coffee and learn more about our passion. Join us today!",
      buttonText: "Join Us",
      link: "/dashboard/member"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const gotoNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const gotoPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Handle button click with navigation
  const handleButtonClick = () => {
    const currentSlide = slides[currentIndex];
    if (currentSlide.link) {
      router.push(currentSlide.link);
    }
  };

  // Auto transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      gotoNextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

    return (
        <div className="relative w-full min-h-screen">
        <div
          className="min-h-screen hero"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                {slides[currentIndex].title}
              </h1>
              <p className="mb-5">{slides[currentIndex].description}</p>
              <button 
                onClick={handleButtonClick} 
                className="btn btn-primary"
              >
                {slides[currentIndex].buttonText}
              </button>
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={gotoPrevSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full left-5 top-1/2"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={gotoNextSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-5 top-1/2"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    );
};

export default Navbar;