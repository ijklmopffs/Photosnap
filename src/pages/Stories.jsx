import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import storiesBg from "../assets/stories/desktop/moon-of-appalacia.jpg";
import storiesBgTab from "../assets/stories/tablet/moon-of-appalacia.jpg";
import storiesBgMobile from "../assets/stories/mobile/moon-of-appalacia.jpg";
import mountains from "../assets/stories/desktop/mountains.jpg";
import mountainsMobile from "../assets/stories/mobile/mountains.jpg";
import cityScapes from "../assets/stories/desktop/cityscapes.jpg";
import cityScapesMobile from "../assets/stories/mobile/cityscapes.jpg";
import voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import voyageMobile from "../assets/stories/mobile/18-days-voyage.jpg";
import architecturals from "../assets/stories/desktop/architecturals.jpg";
import architecturalsMobile from "../assets/stories/mobile/architecturals.jpg";
import worldTour from "../assets/stories/desktop/world-tour.jpg";
import worldTourMobile from "../assets/stories/mobile/world-tour.jpg";
import unforeseen from "../assets/stories/desktop/unforeseen-corners.jpg";
import unforeseenMobile from "../assets/stories/mobile/unforeseen-corners.jpg";
import kingOnAfrica from "../assets/stories/desktop/king-on-africa.jpg";
import kingOnAfricaMobile from "../assets/stories/mobile/king-on-africa.jpg";
import tripToNowhere from "../assets/stories/desktop/trip-to-nowhere.jpg";
import tripToNowhereMobile from "../assets/stories/mobile/trip-to-nowhere.jpg";
import seaRage from "../assets/stories/desktop/rage-of-the-sea.jpg";
import seaRageMobile from "../assets/stories/mobile/rage-of-the-sea.jpg";
import runningFree from "../assets/stories/desktop/running-free.jpg";
import runningFreeMobile from "../assets/stories/mobile/running-free.jpg";
import behindWaves from "../assets/stories/desktop/behind-the-waves.jpg";
import behindWavesMobile from "../assets/stories/mobile/behind-the-waves.jpg";
import calmWaters from "../assets/stories/desktop/calm-waters.jpg";
import calmWatersMobile from "../assets/stories/mobile/calm-waters.jpg";
import milkyWay from "../assets/stories/desktop/milky-way.jpg";
import milkyWayMobile from "../assets/stories/mobile/milky-way.jpg";
import darkForest from "../assets/stories/desktop/dark-forest.jpg";
import darkForestMobile from "../assets/stories/mobile/dark-forest.jpg";
import somwarpet from "../assets/stories/desktop/somwarpet.jpg";
import somwarpetMobile from "../assets/stories/mobile/somwarpet.jpg";
import dreamLand from "../assets/stories/desktop/land-of-dreams.jpg";
import dreamLandMobile from "../assets/stories/mobile/land-of-dreams.jpg";

const storiesArray = [
  {
    id: 0,
    imgSrc: mountains,
    imgSrcMobile: mountainsMobile,
    alt: "the mountains",
    date: "April 16th, 2020",
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    id: 1,
    imgSrc: cityScapes,
    imgSrcMobile: cityScapesMobile,
    alt: "cityscapes",
    date: "April 14th, 2020",
    title: "Sunset Cityscapes",
    author: "by Benjamim Cruz",
  },
  {
    id: 2,
    imgSrc: voyage,
    imgSrcMobile: voyageMobile,
    alt: "18 days voyage",
    date: "April 11th, 2020",
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    id: 3,
    imgSrc: architecturals,
    imgSrcMobile: architecturalsMobile,
    alt: "architecturals",
    date: "April 9th, 2020",
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
  {
    id: 4,
    imgSrc: worldTour,
    imgSrcMobile: worldTourMobile,
    alt: "world tour",
    date: "April 7th, 2020",
    title: "World Tour 2019",
    author: "by Timothy Wagner",
  },
  {
    id: 5,
    imgSrc: unforeseen,
    imgSrcMobile: unforeseenMobile,
    alt: "unforeseen",
    date: "April 3rd, 2020",
    title: "Unforeseen Corners",
    author: "by William Malcolm",
  },
  {
    id: 6,
    imgSrc: kingOnAfrica,
    imgSrcMobile: kingOnAfricaMobile,
    alt: "king on africa",
    date: "March 26th, 2020",
    title: "King On Africa: Part II",
    author: "by Tim Hillenburg",
  },
  {
    id: 7,
    imgSrc: tripToNowhere,
    imgSrcMobile: tripToNowhereMobile,
    alt: "trip to nowhere",
    date: "March 21st, 2020",
    title: "The Trip to Nowhere",
    author: "by Felicia Rourke",
  },
  {
    id: 8,
    imgSrc: seaRage,
    imgSrcMobile: seaRageMobile,
    alt: "rage of the sea",
    date: "March 19th, 2020",
    title: "Rage of the Sea",
    author: "by Mohammed Abdul",
  },
  {
    id: 9,
    imgSrc: runningFree,
    imgSrcMobile: runningFreeMobile,
    alt: "running free",
    date: "March 16th, 2020",
    title: "Running Free",
    author: "by Michelle",
  },
  {
    id: 10,
    imgSrc: behindWaves,
    imgSrcMobile: behindWavesMobile,
    alt: "behind the waves",
    date: "March 11th, 2020",
    title: "Behind the Waves",
    author: "by Lamarr Wilson",
  },
  {
    id: 11,
    imgSrc: calmWaters,
    imgSrcMobile: calmWatersMobile,
    alt: "calm waters",
    date: "March 9th, 2020",
    title: "Calm Waters",
    author: "by Samancha Brooke",
  },
  {
    id: 12,
    imgSrc: milkyWay,
    imgSrcMobile: milkyWayMobile,
    alt: "milky way",
    date: "March 5th, 2020",
    title: "The Milky Way",
    author: "by Benjamin Cruz",
  },
  {
    id: 13,
    imgSrc: darkForest,
    imgSrcMobile: darkForestMobile,
    alt: "dark forest",
    date: "March 4th, 2020",
    title: "Night at the Dark Forest",
    author: "by Mohammed Abdul",
  },
  {
    id: 14,
    imgSrc: somwarpet,
    imgSrcMobile: somwarpetMobile,
    alt: "somwarpet",
    date: "March 1st, 2020",
    title: "Somwarpet's Beauty",
    author: "by Michelle",
  },
  {
    id: 15,
    imgSrc: dreamLand,
    imgSrcMobile: dreamLandMobile,
    alt: "land of dreams",
    date: "February 25th, 2020",
    title: "Land of Dreams",
    author: "by William Malcolm",
  },
];

export default function Stories() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "linear", type: "tween" }}
        exit={{ opacity: 0, y: -100 }}
      >
        <section className="relative">
          <img src={storiesBg} alt="" className="hidden lg:block" />
          <img
            src={storiesBgTab}
            alt=""
            className="hidden md:block lg:hidden"
          />
          <img src={storiesBgMobile} alt="" className="md:hidden" />
          <div className="bg-black md:bg-transparent p-10 md:p-0 md:absolute top-40 left-20 text-white text-start">
            <p className="font-bold text-xs">LAST MONTH’S FEATURED STORY</p>
            <h1 className="font-bold text-3xl md:text-5xl w-60 md:w-80 my-5">
              HAZY FULL MOON OF APPALACHIA
            </h1>
            <p className="text-xs opacity-60 my-5">
              March 2nd 2020 by John Appleseed
            </p>
            <p className="w-80 md:w-[26rem] md:opacity-60 text-sm md:text-base">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>

            <div className="flex items-center gap-4 uppercase mt-5">
              <Link to="/invite" className="after-underline">
                Read the story
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap">
          {storiesArray.map((item) => (
            <Link key={item.id} className="after-underline_images">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ y: -20 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="relative after-underline_images"
              >
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="hidden md:block md:w-[384px] lg:w-auto"
                />
                <img
                  src={item.imgSrcMobile}
                  alt={item.alt}
                  className="md:hidden"
                />
                <div className="absolute inset-0 bg-black opacity-30 w-full md:w-auto"></div>

                <div className="text-start text-white w-[300px] absolute bottom-10 left-[4.25rem] lg:left-5 font-bold">
                  <p className="text-xs opacity-75 font-normal">{item.date}</p>
                  <h3 className="text-lg my-2">{item.title}</h3>
                  <p className="font-normal text-xs text-white/80">
                    {item.author}
                  </p>
                  <div className="w-[280px] h-[1px] bg-[#979797] mt-3"></div>
                  <div className="flex items-center justify-between w-[280px] gap-4 uppercase mt-5">
                    <Link to="/invite" className="after-underline">
                      Read story
                    </Link>
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
                </div>
              </motion.div>
            </Link>
          ))}
        </section>

        <Footer />
      </motion.main>
    </>
  );
}
