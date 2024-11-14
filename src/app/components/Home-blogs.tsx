import ImageWithText from './Catogary'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import Heading from './Heading'
import Button2 from './Button2'
import Link from 'next/link'

const Page = () => {
  return (
    <>
     <div>
      <Heading title='Top Categories' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
     </div>
     
    <div className='grid grid-cols-1 lg:grid-cols-3 page1'>
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
    </div>
    
    <div className='text-center'>
    <Link href="/catogaries">
    <Button2 text='See More'/>
    </Link>
      </div>
 

    </>
  )
}

export default Page
