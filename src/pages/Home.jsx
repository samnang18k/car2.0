
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import car1 from '../assets/pic/car1.png'
import car2 from '../assets/pic/car2.jpg'
import car3 from '../assets/pic/car3.jpg'
import car4 from '../assets/pic/car4.png'

const carItems = [
  {
    title: 'Car 1',
    description: 'This is a description for Car 1.',
    image: car1,
  },
  {
    title: 'Car 2',
    description: 'This is a description for Car 2.',
    image: car2,
  },
  {
    title: 'Car 3',
    description: 'This is a description for Car 3.',
    image: car3,
  },
  {
    title: 'Car 4',
    description: 'This is a description for Car 4.',
    image: car4,
  },
]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Go to the previous car
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? carItems.length - 1
        : prevIndex - 1
    )
  }

  // Go to the next car
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % carItems.length
    )
  }

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
          currentIndex === index
            ? 'w-8 bg-white'
            : 'w-2.5 bg-white/50'
        }`}
      />
    ))}
  </div>

</section>

    </div>
  )
}

export default Home
