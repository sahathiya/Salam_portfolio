'use client'
import React, {useRef } from 'react'
import { motion } from 'framer-motion'
import { FiPhoneCall , FiInstagram  , FiLinkedin , FiDownload ,FiFacebook } from "react-icons/fi";

function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)


  return (
    <motion.div
      ref={containerRef}
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full bg-black px-6 py-10 sm:py-16 md:py-24 lg:py-28 md:px-7 space-y-20 md:space-y-24 lg:px-10 text-white "
    >
      <p className='text-center'>Contact</p>
      <motion.h1
        className={`flicker text-[100px] sm:text-[150px] md:text-[200px] leading-none md:leading-tight text-center `}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div
        className="mt-6 sm:mt-8 md:mt-10 space-y-10 sm:space-y-16 md:space-y-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium`}
        >
          Just drop a mail at :
        </motion.p>
        <div className='space-y-8 md:space-y-12'>
        <motion.a
          href="mailto:salamkrysalam@gmail.com"
          className={`inline-block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold hover:cursor-pointer `}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          salamkaraya4@gmail.com
        </motion.a>
        <div className='w-full flex items-center justify-center gap-4 sm:gap-8 md:gap-12'>
          <a target='_blank' href="tel:+918891555811" className='flex font-semibold transition-all duration-100 ease-out items-center gap-2 rounded-2xl py-1.5 px-3 hover:scale-[1.02] text-sm bg-green-900 hover:bg-green-600'><FiPhoneCall className='w-3 h-3 stroke-3' /> +91 9567320393</a>
           <a target='_blank' href='https://www.linkedin.com/in/salamkaraya' className='p-2 rounded-full transition-all duration-100 ease-out hover:scale-105 bg-blue-900 hover:bg-blue-600' ><FiLinkedin /></a>
          <a target='_blank' href='https://www.instagram.com/sala8846m?igsh=MTk1YTdlemljNzA0aQ==' className='p-2 rounded-full hover:scale-105 transition-all duration-100 ease-out bg-pink-900 hover:bg-pink-600' ><FiInstagram  /></a>
           <a target='_blank' href='https://www.facebook.com/share/174iuRJhsG' className='p-2 rounded-full transition-all duration-100 ease-out hover:scale-105 bg-blue-900 hover:bg-blue-600' ><FiFacebook  /></a>
         
          <a target='_blank' href='/files/ABDU SALAM K DM .pdf' title='Download My Resume' download={true} className='p-2 rounded-full transition-all duration-100 ease-out hover:scale-105 bg-orange-900 hover:bg-orange-600' ><FiDownload /></a>
        </div>
        </div>
      </motion.div>
      <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 , ease:"easeOut" }}
       className={`text-xs sm:text-sm md:text-base lg:text-lg text-center pt-10 sm:pt-12 md:pt-14 lg:pt-16 `}>Thank you for checking out</motion.p>
    </motion.div>
  )
}

export default Contact