import aboutImg from "../../assets/images/about.png";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container w-10/12 mx-auto">
        <div
          className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 
          flex-col lg:flex-row"
        >
          <div className="relative w-3/4 lg:w-1/2  xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div
              className="absolute z-20 bottom-4 lg:w-[200px] md:w-[300px] right-[-10%] md:right[-7%]
            lg:right-[12%]"
            >
              <img src={aboutCard} alt="" />
            </div>
          </div>

          {/* ..................aboutcontent.................... */}

          <div className="w-full flex flex-col lg:w-1/2 xl:w-[670px] order-1 lg:order-2 gap-[30px]">
            <p className="text-4xl font-bold text-richblack-700">
              Proud to be one of the nations best
            </p>
            <p className="text-s text-richblack-400 ">
              loremDeserunt consequat est ad est sint quis exercitation anim. Et
              officia ipsum cillum Esse dolor veniam laboris tempor cillum duis
              quis nisi minim adipisicing nisi.psum magna consectetur culpa sit ad elit. Proident aute labore
            </p>

            <p className="text-s text-richblack-400 ">
              ipsum magna consectetur culpa sit ad elit. Proident aute labore
              dolore duis labore tempor nulla nostrud est pariatur aliqua. Quis
              sunt reprehenderit est sint qui veniam aliqua velit sit nisi et
              nisi veniam nisi.qui veniam aliqua velit sit nisi et
            </p>

            <div>
                <Link to="/">
                <button className="px-6 py-4 bg-blue-200 text-white hover:bg-richblack-800 hover:text-yellow-100">
                    Learn More
                </button>
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
