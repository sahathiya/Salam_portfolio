import React from 'react'
import { heroData } from '@/data/heroData'
import Image from 'next/image'
import Link from 'next/link'
function Hero() {
  return (

        <section id="intro" className="bg-black min-h-screen flex items-center px-8 md:px-16 lg:px-32 py-16">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-12">
        
        
        <div className="text-white max-w-2xl">
          <p className="text-sm text-[#d3b675] mb-4">Hello, I am {heroData.name}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-[#f6f1e7]">
            {heroData.title}
          </h1>
          <p className="text-sm text-secondary mb-4">{heroData.desciption}</p>

<div className="flex space-x-8 mt-6">
  <Link href="#contact">
  <button className="rounded-md bg-secondary  text-black px-6 py-2 font-medium hover:bg-primary hover:border border-secondary hover:text-white transition-colors duration-300">
    Contact
  </button>
  </Link>
  <button className="rounded-md border border-secondary text-secondary px-6 py-2 font-medium hover:bg-secondary hover:text-black transition-colors duration-300">
    Resume
  </button>
</div>

        </div>

        {/* Image */}
        <div className="relative w-full max-w-sm lg:max-w-md">
          <Image
            src={heroData.image||"/images/profile/salam-image.jpeg"}
            alt={heroData.name}
            width={500}
            height={333}
            className="w-full h-auto object-cover rounded-md"
          />
         
        </div>
      </div>

      
    </section>
  )
}

export default Hero


