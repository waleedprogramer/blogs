import React from 'react';
import Image from 'next/image';
import Button from './Button';
import c7 from '../images/c7.jpg';

function End() {
  return (
    <>
      <div className="bg-card flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-24 rounded-xl my-10 p-6 lg:p-10 shadow-lg">
        <div className="lg:w-1/2 space-y-6 lg:space-y-4 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-dark">
            Bibendum Arcu Vitae Elementum
          </h1>
          <p className="text-color text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore dolore.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button text="Read More" />
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={c7}
            alt="End Section Image"
            width={300}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default End;
