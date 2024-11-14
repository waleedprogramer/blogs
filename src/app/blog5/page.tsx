import Image from "next/image";
import blg5 from "../images/blg5.png";
import Instagram from "../components/Instagram";
import Tag from "../components/Tag";
import News from '../components/News'
import Comment from "../components/Comment";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div>
      <div>
        <Navigation heading='Clouds drift aimlessly across the blue, is it freedom or endless wandering?'/>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg5}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                Clouds drift aimlessly across the blue, is it freedom or endless wandering?
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-clr mb-4">
                The clouds drift aimlessly across the vast blue sky, their shapes constantly changing, moving without destination. Some appear fluffy and serene, others dark and brooding. Their soft, slow journey evokes a sense of freedom, as if they are untethered, floating on a gentle breeze. Theres no rush, no obligation—just a tranquil, effortless movement through the endless expanse. In moments like these, its easy to imagine that the clouds embody a kind of pure freedom, unburdened by time or purpose, just existing in the flow of the atmosphere.
                </p>
                <blockquote className="bg-gray-900 p-4 italic border-l-4 border-dark text-clr mb-4">
                Yet, theres also something poignant about their endless wandering. Unlike birds that seem to soar with intent or airplanes that follow clear paths, clouds appear to move without direction. They are swept by the wind, always changing, but never truly arriving anywhere. Is this freedom, or is it a kind of aimless existence? The clouds seem to drift from one moment to the next, never lingering, never truly rooted. Theres a certain beauty in their journey, but also an underlying sadness, as though they are constantly searching for something they can never find.
                </blockquote>
                <p className="text-clr mb-4">
                In the quiet, vast expanse of the sky, the clouds reflect a part of us all—the desire to move freely, to explore, to be unconfined. But the question lingers: is this freedom or just an endless wandering with no clear end in sight? Freedom is often seen as purposeful, with the ability to choose a path, to determine ones direction. The clouds, however, seem to lack that agency. They are caught in the current of the wind, carried from place to place, without ever having the chance to decide their destination. In this sense, their wandering feels less like freedom and more like an endless search, a journey with no end, a quiet longing for something more.
                </p>
               
                <p className="text-clr mb-4">
                As the clouds continue their slow drift across the sky, we are left to ponder the nature of their existence. Are they truly free, or are they just drifting endlessly, carried by forces beyond their control? Maybe, in the end, the beauty lies in the ambiguity. They remind us that freedom, in its purest form, can sometimes be as uncertain and elusive as the clouds themselves.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
          <News heading='Search' />
            <Instagram />
            <Tag />
            <News heading='Newslatter' />
          </div>
        </div>
      </div>
      <Comment/>
    </div>
  );
};

export default Blog;