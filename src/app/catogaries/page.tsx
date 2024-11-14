import ImageWithText from '../components/Catogary'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import c5 from '../images/c5.jpg'
import c6 from '../images/c6.jpg'
import c7 from '../images/c7.jpg'
import c8 from '../images/c8.jpg'
import Heading from '../components/Heading'

const Catogaries = () => {
  return (
    <>
     <div>
      <Heading title='Top Categories' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
     </div>
     
    <div className='grid grid-cols-1 lg:grid-cols-3 '>
      <ImageWithText
        src={c1}
        alt="An image description"
        heading="Visual Impact"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
      <ImageWithText
        src={c2}
        alt="An image description"
        heading="Creative Designs"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
       <ImageWithText
        src={c3}
        alt="An image description"
        heading="Image Power"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
       <ImageWithText
        src={c4}
        alt="An image description"
        heading="Design Aesthetics"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
       <ImageWithText
        src={c5}
        alt="An image description"
        heading="Web Imagery"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
       <ImageWithText
        src={c6}
        alt="An image description"
        heading="Bold Visuals"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
       <ImageWithText
        src={c7}
        alt="An image description"
        heading="Graphic Harmony"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
       <ImageWithText
        src={c8}
        alt="An image description"
        heading="Picture Perfect"
        description="Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod."
      />
      
    </div>
 

    </>
  )
}

export default Catogaries
