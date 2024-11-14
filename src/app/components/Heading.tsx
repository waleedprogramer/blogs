import React from 'react'

interface type{
  title :string 
  subtitle: string
}

function Heading({title, subtitle}:type) {
  return (
    <>
    <div className='text-center p-4 space-y-2 mt-10'>
    <h1 className='text-5xl font-bold text-dark'>{title}</h1> 
    <h2 className='text-md font-light text-color lg:px-72 md:px-32'>{subtitle}</h2>
    </div>
     
    </>
  )
}

export default Heading
