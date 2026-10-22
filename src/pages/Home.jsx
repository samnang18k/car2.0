import React, { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Cog,
  ArrowRight,
  Timer,
 ShieldCheck,
  Tag,
  CircleDollarSign ,
   Users,
} from "lucide-react";

import car1 from "../assets/pic/car1.png";
import car2 from "../assets/pic/car2.jpg";
import car3 from "../assets/pic/car3.jpg";
import car4 from "../assets/pic/car4.png";
import car5 from "../assets/pic/car5.jpg";
import car6 from "../assets/pic/car6.jpg";
import logos1 from "../assets/pic/logos1.jpg"
import logos2 from "../assets/pic/logos2.jpg"
import logos3 from "../assets/pic/logos3.jpg"
import logos4 from "../assets/pic/logos4.jpg"
import logos5 from "../assets/pic/logos5.png"
import logos6 from "../assets/pic/logos6.png"
import FACEBOOK from "../assets/pic/FACEBOOK.png"
import YOYUBE from "../assets/pic/YOYUBE.webp"
import INSTARGRAM from "../assets/pic/INSTAGRAM.avif"

const carItems = [
  {
    title: "Car 1",
    description: "This is a description for Car 1.",
    image: car1,
  },
  {
    title: "Car 2",
    description: "This is a description for Car 2.",
    image: car2,
  },
  {
    title: "Car 3",
    description: "This is a description for Car 3.",
    image: car3,
  },
  {
    title: "Car 4",
    description: "This is a description for Car 4.",
    image: car4,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous car
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carItems.length - 1 : prevIndex - 1,
    );
  };

  // Go to the next car
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carItems.length);
  };

  return (
    <div>
      <section className="relative w-full h-[580px] overflow-hidden bg-gray-900">
        {/* Car slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* Dark overlay for readable text */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Title and description at the left bottom */}
        <div className="absolute bottom-20 left-6 md:left-16 lg:left-24 z-10 max-w-xl text-white">
          <p className="mb-13 text-5xl font-bold uppercase text-gray-200 ">
            Premium Cars With High Performance And Luxury Features
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            {carItems[currentIndex].title}
          </h1>

          <p className="max-w-md text-base leading-7 text-gray-200 md:text-lg">
            {carItems[currentIndex].description}
          </p>

          <button
            type="button"
            className="mt-6 rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Explore Car
          </button>
        </div>

        {/* Previous and next buttons */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous car"
            className="pointer-events-auto rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next car"
            className="pointer-events-auto rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-3">
          {carItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to ${item.title}`}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="py-10">
          <h1 className="text-2xl font-bold uppercase text-gray-800">
            feature Inventory
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              <div className="w-75 h-90  rounded-2xl overflow-hidden shadow-xl/30 transition-transform duration-300 ">
                <div className="w-full h-45 relative">
                  <img
                    src={car1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full absolute top-5 justify-between flex items-center px-5">
                    <span className="bg-amber-400 px-3 py-1 rounded-lg font-medium text-white ">
                      2020
                    </span>
                    <div className="text-white cursor-pointer" >
                      <Heart size={30} />
                    </div>
                  </div>
                </div>
                <div className="px-4 ">
                  <h1 className="text-lg font-semibold text-gray-800 mt-3 ">
                    2020 BMW 3 Series
                  </h1>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-600 mt-1 flex justify-center items-center">
                      <Timer /> 20,000 miles
                    </span>
                    <div className="text-gray-600 mt-1 flex items-center gap-2">
                      <Cog size={20} />
                      Automatic
                    </div>
                  </div>
                  <p className="text-gray-800 text-xl font-medium  mt-1">
                    $35,000
                  </p>
                  <button className="flex items-center justify-center mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                    <ArrowRight />
                  </button>
                </div>
              </div>
              <div className="w-75 h-90  rounded-2xl overflow-hidden shadow-xl/30 transition-transform duration-300 ">
                <div className="w-full h-45 relative">
                  <img
                    src={car2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full absolute top-5 justify-between flex items-center px-5">
                    <span className="bg-amber-400 px-3 py-1 rounded-lg font-medium text-white ">
                      2021
                    </span>
                    <div className="text-white cursor-pointer">
                      <Heart size={30} />
                    </div>
                  </div>
                </div>
                <div className="px-4 ">
                  <h1 className="text-lg font-semibold text-gray-800 mt-3 ">
                    2021 , BYD Atto 3 SUV{" "}
                  </h1>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-600 mt-1 flex justify-center items-center">
                      <Timer /> 20,000 miles
                    </span>
                    <div className="text-gray-600 mt-1 flex items-center gap-2">
                      <Cog size={20} />
                      Automatic
                    </div>
                  </div>
                  <p className="text-gray-800 text-xl font-medium  mt-1">
                    $35,000
                  </p>
                  <button className="flex items-center justify-center mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                    <ArrowRight />
                  </button>
                </div>
              </div>
              <div className="w-75 h-90  rounded-2xl overflow-hidden shadow-xl/30 transition-transform duration-300 ">
                <div className="w-full h-45 relative">
                  <img
                    src={car3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full absolute top-5 justify-between flex items-center px-5">
                    <span className="bg-amber-400 px-3 py-1 rounded-lg font-medium text-white ">
                      2020
                    </span>
                    <div className="text-white cursor-pointer">
                      <Heart size={30} />
                    </div>
                  </div>
                </div>
                <div className="px-4 ">
                  <h1 className="text-lg font-semibold text-gray-800 mt-3 ">
                    2020 Ferrari F80
                  </h1>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-600 mt-1 flex justify-center items-center">
                      <Timer /> 20,000 miles
                    </span>
                    <div className="text-gray-600 mt-1 flex items-center gap-2">
                      <Cog size={20} />
                      Automatic
                    </div>
                  </div>
                  <p className="text-gray-800 text-xl font-medium  mt-1">
                    $35,000
                  </p>
                  <button className="flex items-center justify-center mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                    <ArrowRight />
                  </button>
                </div>
              </div>
              <div className="w-75 h-90  rounded-2xl overflow-hidden shadow-xl/30 transition-transform duration-300 ">
                <div className="w-full h-45 relative">
                  <img
                    src={car4}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full absolute top-5 justify-between flex items-center px-5">
                    <span className="bg-amber-400 px-3 py-1 rounded-lg font-medium text-white ">
                      2020
                    </span>
                    <div className="text-white cursor-pointer">
                      <Heart size={30} />
                    </div>
                  </div>
                </div>
                <div className="px-4 ">
                  <h1 className="text-lg font-semibold text-gray-800 mt-3 ">
                    2020 BMW 3 Series
                  </h1>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-600 mt-1 flex justify-center items-center">
                      <Timer /> 20,000 miles
                    </span>
                    <div className="text-gray-600 mt-1 flex items-center gap-2">
                      <Cog size={20} />
                      Automatic
                    </div>
                  </div>
                  <p className="text-gray-800 text-xl font-medium  mt-1">
                    $35,000
                  </p>
                  <button className="flex items-center justify-center mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <button className="flex justify-center items-center bg-blue-600 text-white py-1 px-4 rounded-sm font-medium hover:bg-blue-700 hover:scale-97 transition cursor-pointer">
              Load More
            </button>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-gray-100">
        <div className="py-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2 w-70 p-4">
            <ShieldCheck size={55} color="" />
            <h1 className="text-lg font-bold uppercase text-gray-800">
              QUALITY YOU CAN TRUST
            </h1>
            <p className="text-gray-600 text-center max-w-2xl w-50 font-normal">
              lorem ipsum dolor sit amet,  Sed do eiusmod commodo consequat.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-70 p-4">
            <Tag  size={55} color="" />
            <h1 className="text-lg font-bold uppercase text-gray-800">
              BEST PRICE GUARANTEE
            </h1>
            <p className="text-gray-600 text-center max-w-2xl w-50 font-normal">
              lorem ipsum dolor sit amet,  Sed do eiusmod commodo consequat.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-70 p-4">
            <CircleDollarSign  size={55} color="" />
            <h1 className="text-lg font-bold uppercase text-gray-800">
              FLEXIBLE FINANCING
            </h1>
            <p className="text-gray-600 text-center max-w-2xl w-50 font-normal">
              lorem ipsum dolor sit amet,  Sed do eiusmod commodo consequat.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-70 p-4">
            <Users  size={55} color="" />
            <h1 className="text-lg font-bold uppercase text-gray-800">
              EXPERT SUPPORT
            </h1>
            <p className="text-gray-600 text-center max-w-2xl w-50 font-normal">
              lorem ipsum dolor sit amet,  Sed do eiusmod commodo consequat.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-full flex items-center justify-center py-16">
          <div className="flex items-center justify-center  ">
            <div className="flex flex-col items-start ml-14 gap-1.5">
              <span className="text-sm font-bold uppercase text-rose-500">
                EASY TO FIND YOUR DREAM CAR
              </span>
              <span>
                <h1 className="text-2xl font-bold uppercase text-gray-800">
                  GET BEHIND THE WHEEL OF YOUR DREAM CAR TODAY
                </h1>
              </span>
              <span>
                <p className="text-gray-600 max-w-2xl w-50 font-medium">
                  Find Out How much Your Current Vehicle Is worth In Just a Few Minutes
                </p>
              </span>
              <button className="mt-2 uppercase flex justify-center items-center bg-blue-600 text-xs text-white py-3 px-4 rounded-sm font-medium hover:scale-97 transition">
                Get Pre-Aproverd
              </button>
            </div>
            <div>
                <img src={car5} alt="" className="w-80 h-47 object-cover" />
            </div>
          </div>
          <div className="flex items-center justify-center  ">
            <div className="flex flex-col items-start ml-14 gap-1.5">
              <span className="text-sm font-bold uppercase text-rose-500">
                EASY TO FIND YOUR DREAM CAR
              </span>
              <span>
                <h1 className="text-2xl font-bold uppercase text-gray-800">
                  GET BEHIND THE WHEEL OF YOUR DREAM CAR TODAY
                </h1>
              </span>
              <span>
                <p className="text-gray-600 max-w-2xl w-50 font-medium">
                  Find Out How much Your Current Vehicle Is worth In Just a Few Minutes
                </p>
              </span>
              <button className="mt-2 uppercase flex justify-center items-center border border-blue-600 text-xs text-blue-600 py-3 px-4 rounded-sm font-medium hover:scale-97 transition">
                Get Pre-Aproverd
              </button>
            </div>
            <div>
                <img src={car6} alt="" className="w-80 h-47 object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full">
        <div className="w-full justify-center items-center py-5">
          <h3 className="text-center font-bold text-xl tracking-[3px]">
            WE PROUDLY CARRY TOP BRAND
            <div className="flex items-center justify-between w-full px-35 py-10 ">
              <img src={logos1} alt="" className="w-20" />
              <img src={logos2} alt="" className="w-15" />
              <img src={logos3} alt="" className="w-20" />
              <img src={logos4} alt="" className="w-25" />
              <img src={logos5} alt="" className="w-25" />
              <img src={logos6} alt="" className="w-20" />
            </div>
          </h3>
        </div>
      </section>
            <footer className="bg-gray-950 text-gray-300">
        {/* Main Footer */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

          {/* Brand Information */}
          <div>
            <a href="/" className="mb-5 inline-flex items-center gap-2 text-2xl font-bold tracking-wide text-white">
              <Cog size={30} className="text-blue-500" />
              AUTO<span className="text-blue-500">DRIVE</span>
            </a>

            <p className="mb-6 max-w-xs text-sm leading-7 text-gray-400">
              Discover your dream car with confidence. Explore premium vehicles,
              compare prices, and find the perfect car for your lifestyle.
            </p>

            <div className="flex gap-3">
              <a href="https://facebook.com" aria-label="Facebook"
                className="rounded-lg bg-gray-800 p-3 w-2 transition hover:bg-blue-600 hover:text-white">
                
              </a>
              <a href="https://instagram.com" aria-label="Instagram"
                className="rounded-lg bg-gray-800 p-3 transition hover:bg-pink-600 hover:text-white">
               
              </a>
              <a href="https://youtube.com" aria-label="YouTube"
                className="rounded-lg bg-gray-800 p-3 transition hover:bg-red-600 hover:text-white">
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-white">Quick Links</h2>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="transition hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="transition hover:text-blue-400">About Us</a></li>
              <li><a href="/cars" className="transition hover:text-blue-400">Our Cars</a></li>
              <li><a href="/contact" className="transition hover:text-blue-400">Contact Us</a></li>
              <li><a href="/favorites" className="transition hover:text-blue-400">My Favorites</a></li>
            </ul>
          </div>

          {/* Car Categories */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-white">Explore Cars</h2>
            <ul className="space-y-4 text-sm">
              <li><a href="/cars/suv" className="transition hover:text-blue-400">SUV</a></li>
              <li><a href="/cars/sedan" className="transition hover:text-blue-400">Sedan</a></li>
              <li><a href="/cars/sports" className="transition hover:text-blue-400">Sports Cars</a></li>
              <li><a href="/cars/electric" className="transition hover:text-blue-400">Electric Cars</a></li>
              <li><a href="/cars/luxury" className="transition hover:text-blue-400">Luxury Cars</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-white">Contact Us</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <icon name="map-pin" size="20" />
                <span>Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-3">
                <icon name="phone" size="20" />
                <a href="tel:+85512345678" className="transition hover:text-blue-400">
                  +855 12 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <icon name="mail" size="20" />
                <a href="mailto:info@autodrive.com" className="break-all transition hover:text-blue-400">
                  info@autodrive.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <icon name="clock" size="20" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Banner */}
        <div className="border-y border-gray-800">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-8 md:flex-row md:items-center lg:px-10">
            <div>
              <h2 className="text-xl font-bold text-white">Stay in the Driver's Seat</h2>
              <p className="mt-2 text-sm text-gray-400">
                Discover new arrivals and the latest car deals.
              </p>
            </div>

            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing!");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-gray-500 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} AutoDrive. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
