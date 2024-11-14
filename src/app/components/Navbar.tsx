'use client'
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { ImBlogger } from "react-icons/im";
import { GrClose } from "react-icons/gr"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md p-8 border-b ">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-3xl font-bold text-text cursor-pointer flex">
          <ImBlogger className='text-dark' />LOGS
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <ul className="md:flex md:space-x-6 hidden md:block">
          <li>
            <Link href="/" className="text-text hover:text-dark transition ease-in-out cursor-pointer">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-text hover:text-dark transition ease-in-out cursor-pointer">About</Link>
          </li>
          <li>
            <Link href="/catogaries" className="text-text hover:text-dark transition ease-in-out cursor-pointer">Catogaries</Link>
          </li>
          <li>
            <Link href="/blog" className="text-text hover:text-dark transition ease-in-out cursor-pointer">Blogs</Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link href="/subscribe">
            <Button text="Subscribe" />
          </Link>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out fixed inset-0 bg-background bg-opacity-90 z-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex justify-between items-center p-8">
          <div className="text-3xl font-bold text-text cursor-pointer flex">
            <ImBlogger className='text-dark' />LOGS
          </div>
          <button onClick={() => setIsOpen(false)} className="text-text text-3xl">
            <GrClose />
          </button>
        </div>

        <ul className="flex flex-col items-center mt-20 space-y-8">
          <li>
            <Link href="/" className="block text-text hover:text-dark transition ease-in-out text-2xl font-bold">Home</Link>
          </li>
          <li>
            <Link href="/about" className="block text-text hover:text-dark transition ease-in-out text-2xl font-bold">About</Link>
          </li>
          <li>
            <Link href="/catogaries" className="block text-text hover:text-dark transition ease-in-out text-2xl font-bold">Catogaries</Link>
          </li>
          <li>
            <Link href="/blog" className="block text-text hover:text-dark transition ease-in-out text-2xl font-bold ">Blogs</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
