import sideImg from "../assets/images/hero-img01.png";
import sideImg2 from "../assets/images/hero-img02.png";
import sideImg3 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServicesList from "../Components/Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";

const Home = () => {
  return (
    <div>
      {/* ....................herosection........................... */}
      <section className="hero_section pt-[60px] 2xl h-[800px]">
        <div className="container w-10/12 mx-auto">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ...................hero content 1.................................. */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-richblack-600 font-bold md:text-[50px] md:leading-[60px]">
                  We are here to help patients to live a healthy and longer life
                </h1>
                <p className="xs text-richblack-300 pt-3 w-3/4 mt-4 mb-4">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <button
                  className="rounded-full text-yellow-100 bg-richblack-900 py-4 px-12 mt-5 border-1
                 border-richblack-25 hover:text-white hover:bg-blue-200"
                >
                  Request an Appointement
                </button>
              </div>

              {/* ........................hero counter............................. */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg-gap-[30px]">
                <div>
                  <h2 className="text-3xl leading-8 lg:text-4xl lgleading-10 font-bold text-richblack-700">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-100 rounded-full block mt-[-14px]"></span>
                  <p className="mt-4">Year of Experience</p>
                </div>

                <div>
                  <h2 className="text-3xl leading-8 lg:text-4xl lgleading-10 font-bold text-richblack-700">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-blue-200 rounded-full block mt-[-14px]"></span>
                  <p className="mt-4">Year of Experience</p>
                </div>

                <div>
                  <h2 className="text-3xl leading-8 lg:text-4xl lgleading-10 font-bold text-richblack-700">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-pink-200 rounded-full block mt-[-14px]"></span>
                  <p className="mt-4">patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/*........... .........hero content 2.................................... */}
            <div className="flex justify-end gap-10">
              <div>
                <img className="w-full mt-[20px]" src={sideImg} alt="" />
              </div>
              <div>
                <img src={sideImg2} className="w-full mb-[30px]" alt="" />
                <img src={sideImg3} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ........................herosection end.................... */}
      <section>
        <div className="container w-10/12 mx-auto mt-4 flex flex-col">
          <div className="lg:w-[470px] mx-auto flex flex-col">
            <p className="text-4xl text-center font-bold text-richblack-900">
              Providing the best medical services
            </p>
            <p className="text-s text-center text-blue-400 mt-4">
              World class care for everyone. Our health System offers unmatched,
              expert health care with all latest equipments and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 gap-5 lg:gap-[30px] mt-1 lg:mt-[55px]">
            <div className="py-10 px-4">
              <div className="flex justify-center items-center">
                <img src={icon1} alt="" />
              </div>

              <div className="mt-10 ">
                <h2 className="text-xl text-center font-semibold leading-9">
                  Find a Doctor
                </h2>
                <p className="text-center text-xs mt-4 text-richblack-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quo. Qui veniam est nostrud ullamco tempor elit qui
                  laborum ut voluptate nisi veniam nulla.
                </p>
                <Link
                  to="/doctor"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                     border-black mx-auto flex justify-center items-center group hover:bg-yellow-100 mt-4"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-10 px-4">
              <div className="flex justify-center items-center">
                <img src={icon2} alt="" />
              </div>

              <div className="mt-10 ">
                <h2 className="text-xl text-center font-semibold leading-9">
                  Find a Location
                </h2>
                <p className="text-center text-xs mt-4 text-richblack-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quo. Qui veniam est nostrud ullamco tempor elit qui
                  laborum ut voluptate nisi veniam nulla.
                </p>
                <Link
                  to="/doctor"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                     border-black mx-auto flex justify-center items-center group hover:bg-blue-100 mt-4"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-10 px-4">
              <div className="flex justify-center items-center">
                <img src={icon3} alt="" />
              </div>

              <div className="mt-10 ">
                <h2 className="text-xl text-center font-semibold leading-9">
                  Book Appointment
                </h2>
                <p className="text-center text-xs mt-4 text-richblack-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quo. Qui veniam est nostrud ullamco tempor elit qui
                  laborum ut voluptate nisi veniam nulla.
                </p>
                <Link
                  to="/doctor"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                     border-black mx-auto flex justify-center items-center group hover:bg-pink-200 mt-4"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      <About />

      {/* ..........................service section start ...................................... */}
      <section>
        <div className="container w-10/12 mx-auto mt-4">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-4xl text-richblack-700 font-bold text-center mt-10">
              Our Medical Services
            </h2>
            <p className="text-s text-richblack-400 text-center mt-4">
              World class care for everyone. Our health System offers unmatched,
              expert health care
            </p>
          </div>

          <ServicesList />
        </div>
      </section>
      {/* ................................service section end ........................................ */}

      {/* .....................................feature section........................................ */}
      <section>
        <div className="container w-10/12 mt-[100px] mx-auto ">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-x-[150px]">
            {/* ..............fexture content................ */}
            <div className="w-full mt-3 leading-9">
              <h2 className="text-4xl text-richblack-800 font-bold text-left p-2">
                Get Virtual Treatment <br />
                anytime
              </h2>
              <ul className="pl-4 gap-6 pb-4 leading-9">
                <li className="text-s text-richblack-400">1.Schedule the appointment directly.</li>
                <l1 className="text-s text-richblack-400">
                  2.Search for your physican here, and contact their office
                </l1>
                <li className="text-s text-richblack-400 leading-7">3.View our physician who are accepting new patients, 
                use the online scheduling technologies
                   to select  an appointment time
                </li>
              </ul>
              <Link to="/">
                <button className="px-5 py-3 bg-blue-200 text-white rounded-full
                 hover:bg-richblack-800 hover:text-yellow-100">
                    Learn More
                </button>
                </Link>
            </div>

                  {/* .................feature img ..................... */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} alt=""/>
            </div>
          </div>
        </div>
      </section>
      {/* .....................................feature section end...................................... */}
    </div>
  );
};

export default Home;
