import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Feature from "../components/Feature";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import features from "../assets/features/desktop/hero.jpg";
import featuresTablet from "../assets/features/tablet/hero.jpg";
import featuresMobile from "../assets/features/mobile/hero.jpg";
import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import domain from "../assets/features/desktop/custom-domain.svg";
import exposure from "../assets/features/desktop/boost-exposure.svg";
import drag from "../assets/features/desktop/drag-drop.svg";

export default function Features() {
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
                features.
              </h1>
              <p className="font-regular text-sm text-white/70 w-[22rem] my-5">
                We make sure all of our features are designed to be loved by
                every aspiring and even professional photographers who wanted to
                share their stories.
              </p>
            </div>
          </div>
          <div className="flex flex-grow">
            <img
              src={features}
              alt=""
              className="h-[600px] flex-grow hidden lg:block"
            />
            <img
              src={featuresTablet}
              alt=""
              className="hidden md:block lg:hidden h-[567px]"
            />
            <img src={featuresMobile} alt="" className="md:hidden" />
          </div>
        </div>

        <div className="max-w-[1110px] mx-auto my-20 flex flex-col lg:flex-row items-center justify-between">
          <Feature
            imageSrc={responsive}
            title="100% Responsive"
            description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
          />

          <Feature
            imageSrc={noLimit}
            title="No Photo Upload Limit"
            description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          />

          <Feature
            imageSrc={embed}
            title="Available to Embed"
            description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
          />
        </div>

        <div className="max-w-[1110px] mx-auto my-20 flex flex-col lg:flex-row items-center justify-between">
          <Feature
            imageSrc={domain}
            title="Custom Domain"
            description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
          />

          <Feature
            imageSrc={exposure}
            title="Boost your exposure"
            description="Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list."
          />

          <Feature
            imageSrc={drag}
            title="Drag & Drop Image"
            description="Easily drag and drop your image and get beautiful shots every-time. No over the top tooling to add friction to creating stories."
          />
        </div>

        <div className="bg-bg-features p-20 bg-no-repeat relative">
          <div className="hidden md:block w-[5px] h-[17.5rem] bg-gradient-to-b from-mainAccentOne via-mainAccentTwo to-mainAccentThree absolute left-0 top-0"></div>
          <div className=" md:hidden w-32 h-[6px] bg-gradient-to-r from-mainAccentOne via-mainAccentTwo to-mainAccentThree absolute left-8 top-0"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-[1110px] mx-auto text-white">
            <h2 className="font-bold text-4xl uppercase w-80 tracking-wide text-start">
              We’re in beta. Get your invite today!
            </h2>

            <div className="flex items-center gap-4 uppercase justify-center md:justify-normal mt-10 md:mt-0">
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
      </motion.main>
      <Footer />
    </>
  );
}
