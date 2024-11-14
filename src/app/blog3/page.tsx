import Image from "next/image";
import blg3 from "../images/blg3.png";
import Instagram from "../components/Instagram";
import Tag from "../components/Tag";
import News from '../components/News'
import Comment from "../components/Comment";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div>
      <div>
        <Navigation heading=' Unique architectural designs but not lacking in solid structure'/>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg3}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                Unique architectural designs but not lacking in solid structure
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-clr mb-4">
                Unique architectural designs blend creativity with function, transforming spaces into works of art while maintaining a solid structural foundation. These designs are often a reflection of both cultural influences and modern innovation, creating structures that stand out for their originality. From sweeping curves to sharp angles, the architecture pushes the boundaries of what is traditionally seen, offering fresh perspectives on how we view buildings and spaces. However, despite the artistic flair, the importance of a strong, reliable structure is never compromised.
                </p>
                <blockquote className="bg-gray-900 p-4 italic border-l-4 border-dark text-clr mb-4">
                In designing these remarkable structures, architects carefully balance aesthetics with engineering principles. While the exterior may feature bold, unconventional forms, the internal structure is built to withstand the forces of nature and everyday wear. Materials are selected not only for their visual appeal but also for their durability and strength. Steel, concrete, glass, and wood are often used in combination, allowing the architect to create something visually striking while ensuring the buildings safety and longevity.
                </blockquote>
                <p className="text-clr mb-4">
                The challenge in creating such designs lies in integrating beauty and function. Architects often have to think outside the box, using cutting-edge technology and innovative techniques to realize their vision without sacrificing stability. From the iconic, twisting towers of skyscrapers to residential homes with complex, angular facades, these designs show that architecture is not just about the building itself, but about the experience it offers to its inhabitants. Spaces are made to feel open, fluid, and dynamic, offering an immersive environment while still being safe and secure.
                </p>
                <p className="text-clr mb-4">
                What makes these designs truly special is their ability to break from traditional patterns while still adhering to the laws of engineering. The result is a built environment that inspires, elevates, and endures. These unique structures serve as testaments to human creativity and ingenuity, offering both beauty and stability for generations to come. Ultimately, the fusion of artistic vision and sound construction principles ensures that these buildings will remain relevant, functional, and admired for years into the future.
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