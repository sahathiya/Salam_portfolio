"use client"

// import React, { useState, useEffect } from 'react'
// import { inter } from '@/lib/font'
import { motion } from 'framer-motion'
 import React from 'react'
// import { useLenisScroll } from '@/lib/hooks/useLenisScroll'

function Navbar() {
//   const lenis = useLenisScroll()
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     if (lenis) {
//       lenis.on('scroll', ({ scroll }: { scroll: number }) => {
//         setIsScrolled(scroll > 50)
//       })
//     }
//   }, [lenis])

//   const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
//     e.preventDefault()
//     if (lenis) {
//       lenis.scrollTo(target, {
//         duration: 1.5,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
//       })
//     }
//   }

  return (
    <motion.div
    //  className={`fixed select-none w-full flex justify-between items-center py-5 md:py-7 lg:py-7 px-6 md:px-7 lg:px-10 font-bold text-stone-700 z-50 transition-all duration-300 ${inter.className} ${isScrolled?'bg-transparent':'bg-white'}`}>
    className={`fixed select-none w-full flex justify-between items-center py-5 md:py-7 lg:py-7 px-6 md:px-7 lg:px-10 font-bold text-stone-700 z-50 transition-all duration-300 `}>
      <motion.a
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      href='#'
    //   onClick={(e) => handleSmoothScroll(e, 'top')}
       className='text-lg tracking-tighter hover:cursor-pointer'>Abdu Salam</motion.a>
      <div className='flex gap-3 md:gap-5 lg:gap-6 text-base'>
        <motion.a
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href='#projects'
        // onClick={(e) => handleSmoothScroll(e, '#projects')}
         className='text-sm hover:cursor-pointer'>Work</motion.a>
        <motion.a
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href='#about'
        // onClick={(e) => handleSmoothScroll(e, '#profile')}
         className='text-sm hover:cursor-pointer'>About</motion.a>
        <motion.a
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href='#contact'
        // onClick={(e) => handleSmoothScroll(e, '#contact')}
         className='text-sm hover:cursor-pointer'>Contact</motion.a>
      </div>
    </motion.div>
  )
}

export default Navbar


// "use client"

// import React, { useState } from 'react'


// import { IoMenu } from "react-icons/io5";
// import { FiX } from "react-icons/fi";
// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//   <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
//       {/* Logo */}
//       <div className="text-2xl font-bold">TG</div>

//       {/* Links */}
//       <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//         <li className="hover:text-black cursor-pointer">About me</li>
//         <li className="hover:text-black cursor-pointer">Skills</li>
//         <li className="hover:text-black cursor-pointer">Portfolio</li>
//       </ul>

//       {/* Contact Button */}
//       <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
//         Contact Me
//       </button>
//     </nav>
//   )
// }

// export default Navbar
