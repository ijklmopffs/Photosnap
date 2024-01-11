import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import share from "../assets/home/desktop/create-and-share.jpg";
import shareTablet from "../assets/home/tablet/create-and-share.jpg";
import shareMobile from "../assets/home/mobile/create-and-share.jpg";
import stories from "../assets/home/desktop/beautiful-stories.jpg";
import storiesTablet from "../assets/home/tablet/beautiful-stories.jpg";
import storiesMobile from "../assets/home/mobile/beautiful-stories.jpg";
import everyone from "../assets/home/desktop/designed-for-everyone.jpg";
import everyoneTablet from "../assets/home/tablet/designed-for-everyone.jpg";
import everyoneMobile from "../assets/home/mobile/designed-for-everyone.jpg";
import arrowRight from "../assets/shared/desktop/arrow.svg";
import mountains from "../assets/stories/desktop/mountains.jpg";
import mountainsMobile from "../assets/stories/mobile/mountains.jpg";
import cityscapes from "../assets/stories/desktop/cityscapes.jpg";
import cityscapesMobile from "../assets/stories/mobile/cityscapes.jpg";
import voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import voyageMobile from "../assets/stories/mobile/18-days-voyage.jpg";
import architecturals from "../assets/stories/desktop/architecturals.jpg";
import architecturalsMobile from "../assets/stories/mobile/architecturals.jpg";
import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "linear", type: "tween" }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center text-start">
          <div className="bg-black text-white w-full md:w-[610px] h-[419px] md:h-[567px] lg:h-[600px] flex items-center justify-center relative">
            <div className="hidden md:block w-[5px] h-72 bg-gradient-to-b from-mainAccentOne via-mainAccentTwo to-mainAccentThree absolute left-0"></div>
            <div className=" md:hidden w-32 h-[6px] bg-gradient-to-r from-mainAccentOne via-mainAccentTwo to-mainAccentThree absolute left-8 top-0"></div>
            <div>
              <h1 className="font-bold text-3xl md:text-5xl w-80 md:w-[26rem] lg:w-96 tracking-widest lg:tracking-normal uppercase">
                Create and share your photo stories.
              </h1>
              <p className="font-regular text-sm text-white/70 w-[22rem] my-5">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <div className="flex items-center gap-4 uppercase">
                <Link to="/invite" className="after-underline">
                  Get an invite
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="none" fillRule="evenodd" stroke="#fff">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-grow">
            <img
              src={share}
              alt=""
              className="h-[600px] flex-grow hidden lg:block"
            />
            <img
              src={shareTablet}
              alt=""
              className="hidden md:block lg:hidden h-[567px]"
            />
            <img src={shareMobile} alt="" className="md:hidden" />
          </div>
        </div>

        <div className="flex items-center text-start flex-col md:flex-row">
          <div className="flex flex-grow">
            <img
              src={stories}
              alt=""
              className="h-[600px] flex-grow hidden lg:block"
            />
            <img
              src={storiesTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={storiesMobile} alt="" className="md:hidden" />
          </div>

          <div className="w-full h-[419px] md:h-auto md:w-[610px] lg:h-[600px] flex items-center justify-center relative">
            <div>
              <h1 className="font-bold text-3xl md:text-5xl w-60 md:w-[23rem] lg:w-96 tracking-widest lg:tracking-normal uppercase">
                BEAUTIFUL STORIES EVERY TIME
              </h1>
              <p className="font-regular text-sm w-[22rem] my-5">
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
              <div className="flex items-center gap-4 uppercase">
                <Link to="/invite" className="after-underline">
                  view the stories
                </Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center text-start flex-col-reverse md:flex-row">
          <div className="w-full md:w-[610px] h-[419px] md:h-auto lg:h-[600px] flex items-center justify-center">
            <div>
              <h1 className="font-bold text-3xl md:text-5xl w-[26rem] lg:w-96 tracking-widest lg:tracking-normal uppercase">
                DESIGNED FOR EVERYONE
              </h1>
              <p className="font-regular text-sm w-[22rem] my-5">
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>
              <div className="flex items-center gap-4 uppercase font-bold text-xs">
                <Link to="/invite" className="after-underline">
                  view the stories
                </Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-grow">
            <img
              src={everyone}
              alt=""
              className="h-[600px] flex-grow hidden lg:block"
            />
            <img
              src={everyoneTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={everyoneMobile} alt="" className="md:hidden" />
          </div>
        </div>

        <div className="flex flex-wrap">
          <Link to="/">
            <motion.div
              whileHover={{ y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative after-underline_images"
            >
              <img
                src={mountains}
                alt="mountains"
                className="hidden md:block md:w-[384px] lg:w-auto"
              />
              <img
                src={mountainsMobile}
                alt="mountains"
                className="md:hidden"
              />
              <div className="absolute inset-0 bg-black opacity-30 w-[375px] md:w-auto"></div>
              <div className="text-start text-white absolute bottom-6 left-8 w-4/5">
                <h2 className="font-bold text-lg">The Mountains</h2>
                <p className="text-xs text-white/70">by John Appleseed</p>
                <div className="h-[1px] w-96 my-5 bg-[#979797]"></div>
                <Link to="/">
                  <div className="flex items-center justify-between">
                    <p>Read Story</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="14"
                    >
                      <g fill="none" fillRule="evenodd" stroke="#fff">
                        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                      </g>
                    </svg>
                  </div>
                </Link>
              </div>
            </motion.div>
          </Link>

          <Link to="/">
            <motion.div
              whileHover={{ y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative after-underline_images"
            >
              <img
                src={cityscapes}
                alt="cityscapes"
                className="md:w-[384px] lg:w-auto hidden md:block"
              />
              <img
                src={cityscapesMobile}
                alt="cityscapes"
                className="md:hidden"
              />
              <div className="absolute inset-0 bg-black opacity-30 w-[375px] md:w-auto"></div>
              <div className="text-start text-white absolute bottom-6 left-8 w-4/5">
                <h2 className="font-bold text-lg">Sunset Cityscapes</h2>
                <p className="text-xs text-white/70">by Benjamin Cruz</p>
                <div className="h-[1px] w-96 my-5 bg-[#979797]"></div>
                <Link to="/">
                  <div className="flex items-center justify-between">
                    <p>Read Story</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="14"
                    >
                      <g fill="none" fillRule="evenodd" stroke="#fff">
                        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                      </g>
                    </svg>
                  </div>
                </Link>
              </div>
            </motion.div>
          </Link>

          <Link to="/">
            <motion.div
              whileHover={{ y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative after-underline_images"
            >
              <img
                src={voyage}
                alt="voyage"
                className="md:w-[384px] lg:w-auto hidden md:block"
              />
              <img src={voyageMobile} alt="voyage" className="md:hidden" />
              <div className="absolute inset-0 bg-black opacity-30 w-[375px] md:w-auto"></div>
              <div className="text-start text-white absolute bottom-6 left-8 w-4/5">
                <h2 className="font-bold text-lg">18 Days Voyage</h2>
                <p className="text-xs text-white/70">by Alexel Borodin</p>
                <div className="h-[1px] w-96 my-5 bg-[#979797]"></div>
                <Link to="/">
                  <div className="flex items-center justify-between">
                    <p>Read Story</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="14"
                    >
                      <g fill="none" fillRule="evenodd" stroke="#fff">
                        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                      </g>
                    </svg>
                  </div>
                </Link>
              </div>
            </motion.div>
          </Link>

          <Link to="/">
            <motion.div
              whileHover={{ y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative after-underline_images"
            >
              <img
                src={architecturals}
                alt="architecturals"
                className="md:w-[384px] lg:w-auto hidden md:block"
              />
              <img
                src={architecturalsMobile}
                alt="architecturals"
                className="md:hidden"
              />
              <div className="absolute inset-0 bg-black opacity-30 w-[375px] md:w-auto"></div>
              <div className="text-start text-white absolute bottom-6 left-8 w-4/5">
                <h2 className="font-bold text-lg">Architectural</h2>
                <p className="text-xs text-white/70">by Sarmancha Brooke</p>
                <div className="h-[1px] w-96 my-5 bg-[#979797]"></div>
                <Link to="/">
                  <div className="flex items-center justify-between">
                    <p>Read Story</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="14"
                    >
                      <g fill="none" fillRule="evenodd" stroke="#fff">
                        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                      </g>
                    </svg>
                  </div>
                </Link>
              </div>
            </motion.div>
          </Link>
        </div>

        <div className="max-w-[1110px] mx-auto my-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-fit">
            <div className="mx-auto w-fit">
              <img src={responsive} alt="" />
            </div>
            <h3 className="font-bold text-lg mt-16">100% Responsive</h3>
            <p className="w-80 my-5 text-sm opacity-50">
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>

          <div className="w-fit">
            <div className="mx-auto w-fit">
              <img src={noLimit} alt="" />
            </div>
            <h3 className="font-bold text-lg mt-28">No Photo Upload Limit</h3>
            <p className="w-80 my-5 text-sm opacity-50">
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>

          <div className="w-fit">
            <div className="mx-auto w-fit">
              <img src={embed} alt="" />
            </div>
            <h3 className="font-bold text-lg mt-16">Available to Embed</h3>
            <p className="w-96 my-5 text-sm opacity-50">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>

        <Footer />
      </motion.main>
    </>
  );
}
