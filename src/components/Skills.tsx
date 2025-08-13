import React from "react";
import Marquee from "react-fast-marquee";

import { skillsData } from "@/data/skillsData";
import Image from "next/image";

function Skills() {
  const skillBoxStyle = {
    backgroundColor: `bg-secondary`,
    boxShadow: `0px 0px 30px bg-primary30`,
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-[60vh] p-10 sm:p-4 bg-secondary">
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-center text-[3.5rem] sm:text-[3.2rem] xs:text-[2.5rem] text-primary">
          Skills
        </h2>
      </div>

      <div className="flex items-center justify-center w-full mt-14 sm:mt-4 px-8 sm:px-4">
        <div className="w-full mx-8 sm:mx-0">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            className="py-12"
          >
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center w-[160px] h-[160px] sm:w-[150px] sm:h-[150px] xs:w-[135px] xs:h-[135px] m-6 sm:m-5 xs:m-4 rounded-lg p-8 sm:p-6 transition-transform duration-300 ease-in-out hover:scale-115 shadow-lg"
                style={skillBoxStyle}
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="h-[50px] sm:h-[45px] xs:h-[40px] pointer-events-none"
                />
                <h3 className="mt-4 text-[22px] sm:text-[20px] xs:text-[18px] text-center font-medium text-tertiary">
                  {skill.name}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
