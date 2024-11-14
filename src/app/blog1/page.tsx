import Image from "next/image";
import blg1 from "../images/blg1.png";
import Instagram from "../components/Instagram";
import Tag from "../components/Tag";
import News from '../components/News'
import Comment from "../components/Comment";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div>
      <div>
        <Navigation heading='Beautiful aurora in the sky over the city, a spectacular sight.'/>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg1}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full  h-auto"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                Beautiful aurora in the sky over the city, a spectacular sight.
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-clr mb-4">
                The night sky lit up with a stunning aurora, casting waves of green, purple, and pink light over the city. The vibrant colors moved gracefully, shifting and swirling across the horizon, creating a surreal, magical atmosphere. It felt as though the universe was putting on a performance, turning the night into something extraordinary. The entire city seemed to pause, captivated by the natural beauty unfolding above.
                </p>
                <blockquote className="bg-gray-900 p-4 italic border-l-4 border-dark text-clr mb-4">
                People gathered in open spaces, on rooftops, and along streets, all looking up in awe. The usual distractions of city life faded away as everyone focused on the sky. Cameras and phones tried to capture the display, but no image could truly convey the breathtaking sight of the aurora in person. The colors seemed alive, moving in harmony with the stars, filling the night with a sense of wonder and mystery. It was a scene that drew people together, united in their amazement at the rare event.
                </blockquote>
                <p className="text-clr mb-4">
                The city itself took on a new, softer glow under the aurora. The bright lights of buildings and streets seemed dim compared to the brilliance overhead. Cars slowed, and people stood still, mesmerized by the colors. It was as though the city had quieted, giving full attention to the display in the sky. Strangers exchanged smiles, sharing in the beauty of the moment as the aurora continued its celestial dance.
                </p>
                <p className="text-clr mb-4">
                As the night went on, the colors gradually began to fade. The waves of light that had once dominated the sky slowly retreated, returning the night to its normal, starry calm. Even as the aurora disappeared, the memory of its beauty lingered in the minds of those who had seen it. The event left a lasting impression, a reminder of the wonders of nature, offering a rare glimpse of magic in the midst of everyday life. People stood quietly for a while longer, still gazing at the sky as if hoping for one last burst of color. There was a shared understanding that they had experienced something rare and special—something that would stay with them long after the lights had faded. The night sky returned to its normal state, but the awe and wonder of the moment continued to resonate. It was a powerful reminder of the natural worlds beauty and mystery, showing that even in the midst of our everyday lives, there are moments of pure magic that can leave a lasting impression. For those who had been lucky enough to see it, the aurora would be a cherished memory, a brief yet unforgettable glimpse of natures extraordinary powers.
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