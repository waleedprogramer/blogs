import React from "react";
import Heading from "../components/Heading";
import Image from "next/image";
import img1 from "../images/img-1.png";
import img2 from "../images/img-3.png";

function About() {
  return (
    <>
      <div className="text-center ">
        <Heading
          title="About"
          subtitle="Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh."
        />
      </div>

      <div className="gap-16 flex flex-col lg:flex-row px-10  items-center text-text page">
        <div className="w-full lg:w-1/2">
          <Image
            src={img1}
            alt="Company history image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="content w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <span className="py-2 px-2 bg-dark rounded-full"></span>
            <h1 className="text-dark font-bold text-4xl">History</h1>
          </div>
          <p className="mt-8 text-lg text-color">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <p className="mt-5 text-lg text-color">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>

      <div className="gap-16 flex flex-col-reverse lg:flex-row px-10   items-center text-text page1">
        <div className="content w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <span className="py-2 px-2 bg-dark rounded-full"></span>
            <h1 className="text-dark font-bold text-4xl">Mission</h1>
          </div>
          <p className="mt-8 text-lg text-color">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <p className="mt-5 text-lg text-color">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src={img2}
            alt="Mission image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default About;
