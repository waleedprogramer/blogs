import React from "react";
import Image from "next/image";
import c7 from '../images/c2.jpg'
import c1 from '../images/blg1.png'
import c2 from '../images/blg2.png'
import c3 from '../images/blg3.png'
import c4 from '../images/blg4.png'
import c5 from '../images/blg5.png'
import c6 from '../images/blg6.png'
import c8 from '../images/c3.jpg'
import c9 from '../images/c4.jpg'

const Instagram = () => {
  const images = [
    c7,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c8,
    c9,
  ];

  return (
    <div className="bg-card shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-3xl font-bold text-center py-4 text-dark">Follow us on instagram</h2>
      <div className="grid grid-cols-3 gap-3 p-4">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            width={100}
            height={100}
            alt={`Image ${index + 1}`}
            className="h-24 rounded-lg w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
