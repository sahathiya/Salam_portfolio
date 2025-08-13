


// import { aboutData } from '@/data/aboutData';
// import Image from 'next/image';
// import React from 'react';



// function About() {


//   return (
//     <div
//       id="about"
//       className="min-h-screen relative  bg-secondary"
    
//     >
//       {/* Line styling */}
//       <div
//         className="absolute top-[50px] left-1/2 transform -translate-x-1/2 flex items-center justify-between h-[50px] w-[85%]"
//       >
//         <div
//           className="rounded-full bg-primary"
//           style={{
           
//             width: '10px',
//             height: '10px',
//           }}
//         />
//         <div
//           className="rounded-full bg-primary"
//           style={{
           
//             width: '10px',
//             height: '10px',
//           }}
//         />
//         <div
//           className="rounded-xl bg-primary"
//           style={{
           
//             width: '95%',
//             height: '5px',
//           }}
//         />
//       </div>

  

// {/* About body */}
// <div className="flex flex-col md:flex-row items-center justify-around pt-32 md:pt-8 h-fit">
//   {/* Description */}
//   <div className="flex flex-col items-start justify-evenly flex-[0.5] w-full h-fit p-5 md:flex-[0.6] md:p-5 order-2 md:order-1">
//     <h2
//       className="mb-10 text-[3.5rem] font-sans md:text-[3rem] md:mb-5 md:self-start sm:text-[2.5rem] text-primary"
//     >
//       {aboutData.title}
//     </h2>
//     <p
//       className="text-xl  font-sans md:text-lg sm:text-base text-thirtiary80"
//     >
//       {aboutData.description1}
//       <br />
//       <br />
//       {aboutData.description2}
//     </p>
//   </div>

//   {/* Image */}
//   <div className="mt-10 pointer-events-none flex-[0.5] md:flex-[0.4] order-1 md:order-2">
//   <Image
//     src="/images/about/bwTheme-boy.svg"
//     alt="About"
//     width={380} // Adjust for largest size
//     height={380}
//     className="w-[380px] md:w-[300px] sm:w-[250px] xs:w-[200px] h-auto"
//   />
// </div>

// </div>



      
//     </div>
//   );
// }

// export default About;

import { aboutData } from '@/data/aboutData';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-secondary relative flex flex-col items-center px-4 sm:px-6 lg:px-12 py-16"
    >
      {/* Decorative line */}
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 flex items-center justify-between w-[85%]">
        <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
        <span className="flex-1 h-1 mx-2 bg-primary rounded"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-28 md:pt-20 gap-10 w-full max-w-6xl">
        
        {/* Image Section */}
        <div className="flex justify-center flex-[0.5] md:flex-[0.4]">
          <Image
            src="/images/about/bwTheme-boy.svg"
            alt="About"
            width={380}
            height={380}
            className="w-[280px] sm:w-[240px] md:w-[300px] lg:w-[360px] h-auto drop-shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col flex-[0.5] md:flex-[0.6] space-y-5 text-center md:text-left p-4">
          <h2 className="text-primary font-sans font-bold text-[2.3rem] sm:text-[2.8rem] lg:text-[3rem] leading-tight">
            {aboutData.title}
          </h2>
          <p className="text-thirtiary80 text-base sm:text-lg leading-relaxed max-w-xl">
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-3">
            <button className="px-5 py-2 bg-primary text-white rounded-md shadow-md hover:bg-primary/90 transition-all">
              Learn More
            </button>
            <button className="px-5 py-2 border-2 border-primary text-primary rounded-md shadow-md hover:bg-primary hover:text-white transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

