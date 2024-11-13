"use client";
import React, { useEffect, useState } from 'react';

// Define the props interface for MenuCard
interface MenuCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

// MenuCard component with defined prop types
const MenuCard: React.FC<MenuCardProps> = ({ imageSrc, title, description }) => (
    <div className="transition-transform duration-300 transform shadow-xl card bg-base-100 w-96 hover:rotate-3">
        <figure className="overflow-hidden">
            <img src={imageSrc} alt={title} className="transition-transform duration-300 transform group-hover:rotate-3" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
);

const Dashboard: React.FC = () => {
    const slides = [
        {
            image: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
            title: "Hello there",
            description: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
            buttonText: "Get Started",
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1632130560464-206d2e16c05c.jpg",
            title: "Discover New Flavors",
            description: "Experience the finest flavors of Indonesian coffee and food. Taste the rich heritage with every bite and sip.",
            buttonText: "Explore Now",
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1610582682609-de3cee90047c.jpg",
            title: "Join Our Community",
            description: "Become a part of our family. Share your love for coffee and learn more about our passion. Join us today!",
            buttonText: "Join Us",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const gotoNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Function to go to the previous slide
    const gotoPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Auto transition to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            gotoNextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col drawer-content">
                    {/* Navbar */}
                    <div className="fixed top-0 left-0 z-10 w-full navbar bg-base-300 text-base-content">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div>
                        <div className="flex-none p-1 px-1 mx-2">
                            <div className="join">
                                <input className="input input-bordered join-item" placeholder="Search" />
                                <select className="select select-bordered join-item">
                                    <option disabled selected>Filter</option>
                                    <option>Sci-fi</option>
                                    <option>Drama</option>
                                    <option>Action</option>
                                </select>
                                <div className="indicator">
                                    <span className="indicator-item badge badge-secondary">new</span>
                                    <button className="btn join-item">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Page content here */}
                    <div className="relative w-full min-h-screen">
                        <div
                            className="min-h-screen hero"
                            style={{
                                backgroundImage: `url(${slides[currentIndex].image})`,
                            }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="text-center hero-content text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">{slides[currentIndex].title}</h1>
                                    <p className="mb-5">
                                        {slides[currentIndex].description}
                                    </p>
                                    <button className="btn btn-primary">{slides[currentIndex].buttonText}</button>
                                </div>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <button
                            onClick={gotoPrevSlide}
                            className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full left-5 top-1/2">
                            Prev
                        </button>
                        <button
                            onClick={gotoNextSlide}
                            className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-5 top-1/2">
                            Next
                        </button>
                    </div>

                    {/* Menu Section */}
                    <div className="w-full min-h-screen bg-base-100">
                        <div className="flex flex-col items-center justify-center p-4">
                            <p className="text-lg font-bold">From the best Indonesian specialty coffee to heart-warming foods</p>
                            <div className="text-4xl p-7 badge badge-secondary badge-outline">Our Menu</div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                                {/* Card Data (You can fetch this data dynamically) */}
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <MenuCard
                                        key={index}
                                        imageSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        title="Shoes!"
                                        description="If a dog chews shoes whose shoes does he choose?"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="py-10 bg-base-200">
                            <div className="flex flex-col items-center justify-center px-4">
                                <div className="p-4 mb-6 text-4xl badge badge-secondary badge-outline">Short Story</div>
                                <p className="max-w-2xl mx-auto mb-8 text-lg font-semibold text-center">
                                    Our coffees are made to be shared because when we talk over coffee, we fill our cups in all kinds of ways.
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="w-full h-auto max-w-lg p-6 shadow-xl card bg-base-100">
                                        <h2 className="mb-4 text-2xl font-bold">Welcome to Cafe Dibimbing</h2>
                                        <p className="text-lg">
                                            At Cafe Dibimbing, we believe that coffee is more than just a beverage; it’s a catalyst for connection and conversation.
                                            Our coffees are made to be shared, crafted with care and passion, inviting you to fill your cup and heart with warmth.
                                        </p>
                                        <br />
                                        <p className="text-lg">
                                            Imagine sitting down with friends, family, or even new acquaintances, as the rich aroma of freshly brewed coffee envelops you.
                                            Every sip ignites heartfelt discussions, laughter, and stories that weave our experiences together. Each cup we serve is a celebration
                                            of life’s moments — from intimate chats to lively gatherings.
                                        </p>
                                        <br />
                                        <p className="text-lg">
                                            Our menu features a delightful variety of artisanal coffees sourced from the finest beans, expertly roasted to bring out
                                            their unique flavors. Whether you’re savoring a bold espresso or a smooth cappuccino, our offerings are designed to inspire
                                            dialogue and foster connections.
                                        </p>
                                        <br />
                                        <p className="text-lg">
                                            So, come join us at [Your Coffee Shop Name], where every cup tells a story and every conversation enriches our lives.
                                            Let’s fill our cups and our hearts — one coffee at a time.
                                        </p>
                                    </div>

                                    <div className="w-full h-auto max-w-lg shadow-xl card bg-base-200">
                                        <img
                                            src="https://cdn.bitrix24.id/b14044525/landing/7ba/7bab5dccad7b1d57c7c8112c420ff41e/Coffee_Toffee_-_Our_Story_1x.png"
                                            alt="Our Story"
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Gallery Section */}
                    <div className="w-full min-h-screen bg-base-100">
                        <div className="flex flex-col items-center justify-center p-4">
                            <p className="mt-4 text-5xl font-bold">Our Gallery</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                                <div className="carousel carousel-vertical rounded-box h-96">
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                                    </div>
                                    <div className="h-full carousel-item">
                                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="p-10 footer bg-base-200 text-base-content">
                        <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                        <form>
                            <h6 className="footer-title">Newsletter</h6>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                    <button className="btn btn-primary join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
