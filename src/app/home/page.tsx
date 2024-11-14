import React from "react";
import Button from "../components/Button2";
import Image from "next/image";
import c1 from "../images/home.png";

function Main() {
  return (
    <>
      <div className="py-24 px-6 lg:px-10 w-full bg-background gap-10 flex flex-col lg:flex-row items-center text-text ">
        <div className="w-full lg:w-1/2 lg:pr-10">
          <h2 className="text-dark text-lg">Welcome to Blog Hub</h2>
          <h1 className="text-5xl lg:text-6xl font-black mt-4">
            Better to be
            <span className="text-dark"> authentic </span>
            than
            <span className="text-dark"> perfect</span>.
          </h1>
          <p className="text-lg mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur, illo numquam. Tempora, similique doloremque debitis.
          </p>
          <div className="mt-8">
            <Button text="Learn More" />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={c1}
            alt="Main Banner"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
