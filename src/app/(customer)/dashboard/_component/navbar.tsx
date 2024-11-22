import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filter, setFilter] = useState(""); 

  const handleSearch = () => {
    router.push(`/dashboard/news?search=${searchTerm}&filter=${filter}`);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full lg:navbar bg-base-300 text-base-content hidden">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        <Image
          src="/dibimbing.png"
          alt="Logo"
          width={100}
          height={100}  // Or remove height for automatic proportional scaling based on width
          className="w-12 h-12" //  Or adjust these values as needed
          style={{ background: 'transparent' }} // Make background transparent
        />
        
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/news">News</Link>
          </li>
          <li>
            <Link href="/dashboard/article">Article</Link>
          </li>
          <li>
            <Link href="/dashboard/member">Member</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none p-1 px-1 mx-2">
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="select select-bordered join-item"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="" disabled>
              Filter
            </option>
            <option value="Coffee">Coffee</option>
            <option value="Drink">Drink</option>
            <option value="Cake">Cake</option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn join-item" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
