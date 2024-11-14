import Image from "next/image";
import blg4 from "../images/blg4.png";
import Instagram from "../components/Instagram";
import Tag from "../components/Tag";
import News from '../components/News'
import Comment from "../components/Comment";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div>
      <div>
        <Navigation heading='The sky dances with colors at dusk, is it beauty or a fading dream?'/>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg4}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                The sky dances with colors at dusk, is it beauty or a fading dream?
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-clr mb-4">
                As the sun dips below the horizon, the sky comes alive, dancing with hues of orange, pink, and purple. The colors blend and shift in a breathtaking display, filling the sky with a vibrant energy that seems to tell a story. This moment, fleeting and transient, holds a kind of magic that feels both real and dreamlike. The colors, intense yet soft, appear to paint the sky with strokes of wonder. The scene can evoke a sense of awe, as if the heavens are putting on a show, offering a visual feast for anyone fortunate enough to witness it. But beneath the beauty, there lies a question — is this brilliance truly a beauty, or is it simply a fading dream?
                </p>
                <blockquote className="bg-gray-900 p-4 italic border-l-4 border-dark text-clr mb-4">
                The sky at dusk has always held a sense of mystery. It is a moment where day and night meet, and time seems to slow down. The colors appear to be alive, constantly changing, reminding us of the impermanence of each day. Its as if the sky is bidding farewell to the sunlight, offering one last display before the night takes over. This transition feels like a dream in itself, where the lines between reality and imagination blur. One cant help but wonder if this dazzling array of colors is something real or just a beautiful illusion, destined to fade away as the evening sets in.
                </blockquote>
                <p className="text-clr mb-4">
                Yet, this fleeting beauty is what makes it special. The briefness of the moment adds to its allure. Its a reminder that all things, no matter how beautiful, are temporary. The sky at dusk doesnt need to last forever to leave an impression. In its short-lived grandeur, it touches something deep within us — the realization that beauty is often found in moments that pass us by, leaving only the memory behind.
                </p>
                <p className="text-clr mb-4">
                As the last colors of the sky fade into the night, we are left with the feeling of having witnessed something rare, something that exists between the boundaries of beauty and a fading dream. Its this ephemeral nature that makes dusk so captivating. The sky, with its ever-changing palette, reminds us that beauty doesnt always need to endure; sometimes, it is enough to simply be.
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