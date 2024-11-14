import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData; 
  alt: string;
  heading: string;
  description: string; 
}

function ImageWithText({ src, alt, heading, description }: Props ) {
  return (
    <div className="flex flex-col items-center justify-center p-4 page">
      <div className="w-full max-w-md ">
        <Image
          src={src}
          alt={alt} 
          width={500} 
          height={300} 
          className="rounded-lg h-96 w-full lg:w-96"
        />
      </div>
      <div className="text-center mt-4 ">
        <h2 className="text-2xl font-bold text-dark mb-2">{heading}</h2>
        <p className="text-color mb-4">{description}</p>
       
      </div>
    </div>
  );
};

export default ImageWithText;
