import React from 'react'
import Heading from '../components/Heading'
import Card from '../components/Cards';
import blg1 from '../images/blg1.png';
import blg2 from '../images/blg2.png';
import blg3 from '../images/blg3.png';
import Button2 from './Button2';
import Link from 'next/link';

const Cards = () => {
  return (
    <>
      <div>
        <Heading
          title="Latest Blogs"
          subtitle="Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh."
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center  p-10 gap-10">
      <Card
        imgSrc={blg1}
        title="#Photograph"
        time="12 mins read"
        description="Beautiful aurora in the sky over the city, a spectacular sight."
        url="Genz"
        author="Joseph"
        date="25 April 2024"
      />
      <Card
        imgSrc={blg2}
        title="#Lifestyle"
        time="10 mins read"
        description="Life is as free as eagles soaring high, or is it just endless loneliness?"
        url="Genz"
        author="Joseph"
        date="14 May 2024"
      />
      <Card
        imgSrc={blg3}
        title="#Photograph"
        time="6 mins read"
        description="Unique architectural designs but not lacking in solid structure"
        url="Genz"
        author="Joseph"
        date="20 May 2024"
      />
      </div>
      <div className='text-center mb-10'>
        <Link href='/blog'>
        <Button2 text='More Blogs'/></Link>
        
      </div>
    </>
  )
}

export default Cards
