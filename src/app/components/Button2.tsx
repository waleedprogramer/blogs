import React from "react";

interface type{
  text:string
}

function Button2( {text}: type ) {
  return (
    <>
        <button className=" btn-gradient text-white px-16 font-bold py-4 rounded-full">
          {text}
        </button>
    </>
  );
}

export default Button2;
