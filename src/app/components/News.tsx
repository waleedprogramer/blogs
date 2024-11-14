import React from "react";

interface type{
  heading:string
}

const Newsletter = ({ heading }: type) => {
  return (
    <div className="p-10 bg-card rounded-lg my-8">
      {/* Heading received as a prop */}
      <h2 className="text-3xl font-bold text-center text-dark mb-4">{heading}</h2>

      {/* Input for email */}
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Subscribe button */}
      <button className="w-full bg-dark text-white py-2 rounded-md hover:opacity-90 transition duration-200">
        Subscribe
      </button>
    </div>
  );
};

export default Newsletter;
