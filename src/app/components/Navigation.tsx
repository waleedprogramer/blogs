import React from 'react';
import Link from 'next/link';
import { FaHome, FaAngleRight } from 'react-icons/fa';

interface NavigationProps {
  heading: string;
}

const Navigation = ({ heading } : NavigationProps) => {
  return (
    <div className="w-full  border-b-2 border-color p-8 mb-10">
      <nav className="flex items-center  space-x-8">
        <Link href="/">
          <div className="flex items-center space-x-2  cursor-pointer">
            <FaHome className="text-dark" size={20} />
            <p className="text-text font-medium flex items-center transition-all ease-in hover:text-dark">Home</p>
            <span>
            <FaAngleRight  className='text-dark'/>
            </span>
          </div>
        </Link>

        
        <Link href="/blog">
        <div className='flex items-center space-x-2'> 
          <p className="text-text font-medium cursor-pointer transition-all ease-in hover:text-dark ">Blogs</p>
          <span>
            <FaAngleRight  className='text-dark'/>
            </span>
            </div>
        </Link>
        
        <h1 className="text-color text-md">{heading}</h1>
      </nav>
    </div>
  );
};

export default Navigation;


