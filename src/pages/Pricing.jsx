import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pricing from "../assets/pricing/desktop/hero.jpg";
import pricingTab from "../assets/pricing/tablet/hero.jpg";
import pricingMobile from "../assets/pricing/mobile/hero.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import checkmark from "../assets/pricing/desktop/check.svg";

export default function Pricing() {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

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
          <div className="bg-black text-white w-full md:w-[610px] h-[419px] md:h-[567px] lg:h-[490px] flex items-center justify-center relative">
            <div className="hidden md:block w-[5px] h-72 bg-gradient-to-b from-mainAccentOne via-mainAccentTwo to-mainAccentThree absolute left-0"></div>
            <div className=" md:hidden w-32 h-[6px] bg-gradient-to-r from-mainAccentOne via-mainAccentTwo to-mainAccentThree absolute left-8 top-0"></div>
            <div>
              <h1 className="font-bold text-3xl md:text-5xl w-80 md:w-[26rem] lg:w-96 tracking-widest lg:tracking-normal uppercase">
                pricing.
              </h1>
              <p className="font-regular text-sm text-white/70 w-[22rem] my-5">
                Create a your stories, Photosnap is a platform for photographers
                and visual storytellers. It’s the simple way to create and share
                your photos.
              </p>
            </div>
          </div>
          <div className="flex flex-grow">
            <img
              src={pricing}
              alt=""
              className="flex-grow hidden lg:block h-[490px]"
            />
            <img
              src={pricingTab}
              alt=""
              className="hidden md:block lg:hidden h-[567px]"
            />
            <img src={pricingMobile} alt="" className="md:hidden" />
          </div>
        </div>

        <section className="my-20 flex flex-col justify-center items-center gap-16">
          <div className="flex items-center gap-2">
            <span
              className={isChecked ? "text-lg mx-5" : "text-lg mx-5 font-bold"}
            >
              Monthly
            </span>

            <label className="flex items-center space-x-2 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div
                  className={
                    isChecked
                      ? "block bg-black w-16 h-8 rounded-full shadow-inner"
                      : "block bg-lightGrey w-16 h-8 rounded-full shadow-inner"
                  }
                ></div>
                <div
                  className={`${
                    isChecked
                      ? "translate-x-8 bg-white"
                      : "translate-x-0 bg-black"
                  } absolute left-[.3rem] top-[.3rem] w-6 h-6 rounded-full transform transition-transform duration-500 ease-in-out`}
                ></div>
              </div>
            </label>
            <span
              className={isChecked ? "text-lg mx-5 font-bold" : "text-lg mx-5"}
            >
              Yearly
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="md:flex lg:block justify-between items-center w-80 md:w-[690px] bg-[#f5f5f5] lg:w-80 h-80 md:h-64 lg:h-80 p-10 text-center md:text-start lg:text-center">
              <div>
                <h2 className="font-bold text-2xl">Basic</h2>
                <p className="text-sm my-5 w-auto md:w-64 lg:w-auto">
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>
                <p className="font-bold text-4xl md:hidden lg:block">
                  {isChecked ? "$190.00" : "$19.00"}
                </p>
                <span className="text-sm md:hidden lg:block">per month</span>
                <button className="uppercase bg-black hover:bg-lightGrey hover:text-black text-white font-bold text-xs block w-full p-5 py-2 mt-7">
                  Pick plan
                </button>
              </div>
              <div>
                <p className="font-bold text-4xl hidden md:block lg:hidden">
                  {isChecked ? "$190.00" : "$19.00"}
                </p>
                <span className="text-sm hidden md:block lg:hidden">
                  per month
                </span>
              </div>
            </div>

            <div className="md:flex lg:block justify-between items-center w-80 md:w-[690px] bg-black relative h-96 md:h-auto lg:w-80 lg:h-96 text-white p-10 lg:bottom-8">
              <div className="hidden md:block w-full h-[6px] left-0 bg-gradient-to-b from-mainAccentOne via-mainAccentTwo to-mainAccentThree absolute top-0"></div>
              <div>
                <h2 className="font-bold text-2xl">Pro</h2>
                <p className="text-sm my-5 w-64 lg:w-auto">
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
                <p className="font-bold text-4xl md:hidden lg:block">
                  {isChecked ? "$390.00" : "$39.00"}
                </p>
                <span className="text-sm md:hidden lg:block">per month</span>
                <button className="uppercase bg-white hover:bg-lightGrey text-black font-bold text-xs block w-full p-5 py-2 mt-7">
                  Pick plan
                </button>
              </div>
              <div>
                <p className="font-bold text-4xl hidden md:block lg:hidden">
                  {isChecked ? "$390.00" : "$39.00"}
                </p>
                <span className="text-sm hidden md:block lg:hidden">
                  per month
                </span>
              </div>
            </div>

            <div className="md:flex lg:block justify-between items-center w-80 md:w-[690px] bg-[#f5f5f5] h-80 md:h-64 lg:w-80 lg:h-80 p-10">
              <div>
                <h2 className="font-bold text-2xl">Business</h2>
                <p className="text-sm my-5 w-64 lg:w-auto">
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
                <p className="font-bold text-4xl md:hidden lg:block">
                  {isChecked ? "$990.00" : "$99.00"}
                </p>
                <span className="text-sm md:hidden lg:block">per month</span>
                <button className="uppercase bg-black hover:bg-lightGrey hover:text-black text-white font-bold text-xs block w-full p-5 py-2 mt-7">
                  Pick plan
                </button>
              </div>
              <div>
                <p className="font-bold text-4xl hidden md:block lg:hidden">
                  {isChecked ? "$990.00" : "$99.00"}
                </p>
                <span className="text-sm hidden md:block lg:hidden">
                  per month
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="my-40 hidden md:block">
          <h2 className="font-bold text-4xl uppercase tracking-wider mb-20">
            compare
          </h2>
          <div className="flex items-center justify-center flex-col gap-4 w-[600px] mx-auto">
            <div className="flex uppercase text-start items-center justify-center gap-80 font-bold text-xs">
              <p className="mr-32">the features</p>
              <div className="flex items-center gap-20">
                <p>basic</p>
                <p>pro</p>
                <p>business</p>
              </div>
            </div>
            <div className="h-[1px] w-[600px] bg-black"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-[8.5rem]">unlimited story posting</p>
              <div className="flex items-start gap-28">
                <img src={checkmark} alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>

            <div className="h-[1px] w-[600px] bg-lightGrey"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-[8.6rem]">unlimited photo upload</p>
              <div className="flex items-start gap-28">
                <img src={checkmark} alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>

            <div className="h-[1px] w-[600px] bg-lightGrey"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-[6.9rem]">embedding custom content</p>
              <div className="flex items-start gap-28">
                <img src="" alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>

            <div className="h-[1px] w-[600px] bg-lightGrey"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-40">customize metadata</p>
              <div className="flex items-start gap-28">
                <img src="" alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>

            <div className="h-[1px] w-[600px] bg-lightGrey"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-[10.5rem]">advanced metrics</p>
              <div className="flex items-start gap-28">
                <img src="" alt="" className="w-4 h-3" />
                <img src="" alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>

            <div className="h-[1px] w-[600px] bg-lightGrey"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-[10.5rem]">photo downloads</p>
              <div className="flex items-start gap-28">
                <img src="" alt="" className="w-4 h-3" />
                <img src="" alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>

            <div className="h-[1px] w-[600px] bg-lightGrey"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-[8.5rem]">search engine indexing</p>
              <div className="flex items-start gap-28">
                <img src="" alt="" className="w-4 h-3" />
                <img src="" alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>

            <div className="h-[1px] w-[600px] bg-lightGrey"></div>

            <div className="flex my-3 uppercase text-start items-center justify-center gap-60 font-bold text-xs">
              <p className="mr-[10.5rem]">custom analytics</p>
              <div className="flex items-start gap-28">
                <img src="" alt="" className="w-4 h-3" />
                <img src="" alt="" className="w-4 h-3" />
                <img src={checkmark} alt="" className="w-4 h-3" />
              </div>
            </div>
          </div>
        </section>

        <section className="my-40 md:hidden p-10">
          <h2 className="uppercase font-bold text-xs text-start">
            the features
          </h2>
          <div className="h-[1px] w-[315px] bg-black my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">unlimited story posting</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p>basic</p>
                <img src={checkmark} alt="" />
              </div>
              <div>
                <p>pro</p>
                <img src={checkmark} alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">unlimited photo upload</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p>basic</p>
                <img src={checkmark} alt="" />
              </div>
              <div>
                <p>pro</p>
                <img src={checkmark} alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">embedding custom content</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p className="mb-5">basic</p>
                <img src="" alt="" />
              </div>
              <div>
                <p>pro</p>
                <img src={checkmark} alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">customize metadata</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p className="mb-5">basic</p>
                <img src="" alt="" />
              </div>
              <div>
                <p>pro</p>
                <img src={checkmark} alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">advanced metrics</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p className="mb-5">basic</p>
                <img src="" alt="" />
              </div>
              <div>
                <p className="mb-5">pro</p>
                <img src="" alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">photo downloads</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p className="mb-5">basic</p>
                <img src="" alt="" />
              </div>
              <div>
                <p className="mb-5">pro</p>
                <img src="" alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">search engine indexing</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p className="mb-5">basic</p>
                <img src="" alt="" />
              </div>
              <div>
                <p className="mb-5">pro</p>
                <img src="" alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>

          <div className="uppercase flex flex-col items-start gap-4">
            <h3 className="font-bold text-xs">custom analytics</h3>
            <div className="flex items-center gap-8 font-bold text-[10px]">
              <div>
                <p className="mb-5">basic</p>
                <img src="" alt="" />
              </div>
              <div>
                <p className="mb-5">pro</p>
                <img src="" alt="" />
              </div>
              <div>
                <p>business</p>
                <img src={checkmark} alt="" />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[315px] bg-lightGrey my-5"></div>
        </section>

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
        <Footer />
      </motion.main>
    </>
  );
}
