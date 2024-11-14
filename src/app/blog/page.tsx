import React from 'react'
import Heading from '../components/Heading'
import Card from '../components/Cards';
import blg1 from '../images/blg1.png';
import blg2 from '../images/blg2.png';
import blg3 from '../images/blg3.png';
import blg4 from '../images/blg4.png';
import blg5 from '../images/blg5.png';
import blg6 from '../images/blg6.png';


const Blog = () => {
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
        author="Joseph"
        date="25 April 2024"
        url='/blog1'
      />
      <Card
        imgSrc={blg2}
        title="#Lifestyle"
        time="10 mins read"
        description="Life is as free as eagles soaring high, or is it just endless loneliness?"
        author="Joseph"
        date="14 May 2024"
        url='/blog2'
      />
      <Card
        imgSrc={blg3}
        title="#Photograph"
        time="6 mins read"
        description="Unique architectural designs but not lacking in solid structure"
       
        author="Joseph"
        date="20 May 2024"
       url='/blog3'
      />
      <Card
        imgSrc={blg4}
        title="#Design"
        time="05 mins read"
        description="The sky dances with colors at dusk, is it beauty or a fading dream?"
        author="Joseph"
        date="25 July 2024"
         url='/blog4'
        
      />
      
      <Card
        imgSrc={blg5}
        title="#Photograph"
        time="15 mins read"
        description="Clouds drift aimlessly across the blue, is it freedom or endless wandering?"
        author="Joseph"
        date="29 Sep 2024"
         url='/blog5'
      />
      <Card
        imgSrc={blg6}
        title="#Lifestyle"
        time="08 mins read"
        description="A child sits wide-eyed before the screen, is it wonder or a world lost to pixels?"
        author="Joseph"
        date="26 October 2024"
         url='/blog6'
      />
    </div>
      
    </>
  )
}

export default Blog
