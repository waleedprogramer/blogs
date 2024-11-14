import Image from "next/image";
import blg2 from "../images/blg2.png";
import Instagram from "../components/Instagram";
import Tag from "../components/Tag";
import News from '../components/News'
import Comment from "../components/Comment";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div>
       <div>
        <Navigation heading=' Life is as free as eagles soaring high, or is it just endless loneliness?'/>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg2}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                Life is as free as eagles soaring high, or is it just endless loneliness?
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-text mb-4">
                Life can feel as free as eagles soaring high, with moments full of adventure, excitement, and endless possibilities. In these moments, we experience a sense of liberation and joy that seems to lift us above any obstacles. The world is full of opportunities, and it feels as though we have no boundaries, capable of achieving anything. The freedom we feel in these times is exhilarating, allowing us to embrace each new experience without hesitation. This sense of openness makes the world seem vast and full of potential, with the winds of possibility beneath us.
                </p>
                <blockquote className="bg-gray-900 p-4 italic border-l-4 border-dark text-clr mb-4">
                However, life is not always about soaring high. There are moments when it feels like an endless stretch of loneliness, where the vastness of the world can feel empty and disconnected. In these times, the noise of everyday life fades, and we may feel isolated, as though the freedom we once experienced is slipping away. Loneliness can make the world feel smaller, and the weight of being alone can overshadow the excitement of the highs. The moments of solitude can bring deep introspection, but they can also be disorienting and challenging, leaving us questioning our purpose.
                </blockquote>
                <p className="text-clr mb-4">
                Despite these contrasting emotions, life is about finding a balance between freedom and solitude. The interplay between these two forces helps us grow and evolve. While moments of freedom give us the energy to explore and create, the times of loneliness allow us to reflect, recharge, and reconnect with ourselves. Its during these quieter times that we uncover the strength to move forward, guiding us to appreciate the highs more fully and navigate the lows with grace.
                </p>
                <p className="text-clr mb-4">
                In the end, life is not just about the soaring highs or the deep lows. Its about learning to embrace both. The beauty of life lies in the balance between these extremes, shaping us into more complete individuals. Both freedom and loneliness offer lessons, and by accepting them, we unlock a deeper understanding of who we are and our place in the world.
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