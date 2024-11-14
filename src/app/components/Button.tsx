import React from "react";
import Link from "next/link";

interface type{
  text:string
}

function Button( {text}: type ) {
  return (
    <>
      <Link href="/">
        <button className=" btn-gradient text-white px-4 font-bold py-2 rounded hover:bg-opacity-90 transition ease-in">
          {text}
        </button>
      </Link>
    </>
  );
}

export default Button;
