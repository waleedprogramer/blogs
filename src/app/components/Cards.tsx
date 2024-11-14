import React from 'react';
import Image, { StaticImageData } from 'next/image';


interface CardProps {
  imgSrc : StaticImageData;
  title: string;
  time: string;
  description: string;
  author: string;
  date: string;
  url: string;

}

function Card ({ imgSrc, title, time, description, url, author, date }: CardProps)  {
  return (
    <div className="max-w rounded-lg overflow-hidden shadow-lg bg-card">
      <Image 
        src={imgSrc} 
        alt={title} 
        className="w-full h-64 p-3 rounded-3xl object-cover"
        width={500}
        height={300}
      />

      <div className="p-6">
        <div className='flex justify-between'>

        <h2 className="font-semibold mb-2 text-gray-600">{title}</h2>

        <p className="text-gray-600 text-sm mb-2">{time}</p>
        </div>
        <p className="text-color font-bold text-2xl  mb-4 hover:text-dark transition-all ease-in-out">
          {description}
        </p>

        

        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>{author}</p>
          <p>{date}</p>
        </div>
        <div>
         
        <div className="text-dark mt-6">
           <a href={url}>
           Read More
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
