import Image from "next/image";
import blg6 from "../images/blg6.png";
import Instagram from "../components/Instagram";
import Tag from "../components/Tag";
import News from '../components/News'
import Comment from "../components/Comment";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div>
      <div>
        <Navigation heading='A child sits wide-eyed before the screen, is it wonder or a world lost to pixels?'/>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg6}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                A child sits wide-eyed before the screen, is it wonder or a world lost to pixels?
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-clr mb-4">
                A child sits wide-eyed before the screen, the soft glow illuminating their face as they are drawn into the world unfolding in front of them. Their eyes sparkle with wonder, captivated by the images, colors, and movements that shift before them. For a moment, it seems as though time stands still, and the child is lost in a realm of endless possibilities. The screen offers a universe of learning, entertainment, and discovery, sparking the imagination and curiosity of a young mind. Its a magical moment, where every swipe, click, and tap opens a new door to a world they have never seen before. In this moment, its hard to deny the beauty of that wonder—a wonder that only a child, untainted by the complexities of life, can fully experience.


                </p>
                <blockquote className="bg-gray-900 p-4 italic border-l-4 border-dark text-clr mb-4">
                But as the minutes and hours pass, one begins to wonder: is this wonder, or is it something deeper—perhaps a world lost to pixels? The screen, with its endless stream of images and sounds, becomes an all-encompassing force. The child, once immersed in the magic of play and discovery, is now disconnected from the physical world around them. Their attention, once so focused on the tangible things of life, is now held captive by the flickering pixels. The real world—its textures, sounds, and sensations—seems to fade into the background as the digital realm pulls them in further. The innocent wonder that once sparkled in their eyes begins to blur with the constant consumption of content, leaving behind a sense of detachment from the present moment.
                </blockquote>
                <p className="text-clr mb-4">
                As the child continues to stare at the screen, a question lingers: Is this wonder, or is it a loss of connection to the world beyond the pixels? The question is not one of blame, but rather of understanding. Technology has brought about incredible advancements and opportunities for growth, but it has also created a world where reality is often overshadowed by the artificial. In this delicate balance, the screen becomes both a window to new experiences and a barrier, separating the child from the beauty of the world outside. The wonder is still there, but its hidden behind the glow of the pixels, waiting to be rediscovered.
                </p>
                <p className="text-clr mb-4">
                As the childs gaze remains fixed on the screen, the world around them continues to move on. The sound of laughter, the rustle of leaves in the wind, the touch of a loved ones hand—all these real, tangible experiences fade into the background, replaced by the artificial stimulation of the digital world. The childs interactions become more focused on whats happening on the screen than on the vibrant life unfolding just beyond it. Theres a subtle shift, a quiet transformation, as the boundary between the real and the virtual begins to blur. The wonder is still there, but the depth of connection to the outside world begins to wane, replaced by the allure of the endless, captivating digital landscape. Its a delicate moment of change—one that calls for reflection on how we, as a society, navigate the balance between wonder and detachment, engagement and escape.
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