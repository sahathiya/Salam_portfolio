// import React from "react";

// import ExperienceCard from "./ExperienceCard";
// import { experienceData } from "@/data/experienceData";
// import Image from "next/image";

// function Experience() {


//   return (
//     <div
//       id="experience"
//       className="min-h-screen w-full py-12 bg-secondary"
      
//     >
//       <div className="flex  items-center justify-center w-full px-6 md:flex-col">
        
//         {/* Left image */}
//         <div className="w-[35%] ml-[7%] mt-4">
//           <Image
//             src={'/images/experience/expBlack.svg'}
//             alt="Experience"
//             width={300}
//             height={300}
//             className="w-full pointer-events-none"
//           />
//         </div>

//         {/* Right content */}
//         <div className="flex flex-col items-end md:items-center justify-center flex-[0.65] w-full px-8 md:px-4">
//           <h1
//             className="text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] mb-8 text-right md:text-center font-bold text-primary"
            
//           >
//             Experience
//           </h1>

//           {experienceData.map((exp) => (
//             <ExperienceCard
//               key={exp.id}
//               id={exp.id}
//               jobtitle={exp.jobtitle}
//               company={exp.company}
//               startYear={exp.startYear}
//               endYear={exp.endYear}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;



import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/data/experienceData";
import Image from "next/image";

function Experience() {
  return (
    <div id="experience" className="min-h-screen w-full py-12 bg-secondary">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 px-6 lg:px-12">
        
        {/* Left image */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-start">
          <Image
            src="/images/experience/expBlack.svg"
            alt="Experience"
            width={300}
            height={300}
            className="w-full max-w-[300px] pointer-events-none"
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col items-center md:items-end justify-center md:w-[65%] w-full">
          <h1
            className="text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] mb-8 text-center md:text-right font-bold text-primary"
          >
            Experience
          </h1>

          <div className="flex flex-col gap-6 w-full">
            {experienceData.map((exp) => (
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
                logo={exp.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
