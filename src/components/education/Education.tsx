import React from "react";

import { educationData } from "@/data/educationData";
import EducationCard from "./EducationCard";
import Image from "next/image";

function Education() {
  return (
    <div id="resume" className="min-h-screen bg-secondary">
      <div className="flex flex-row items-center justify-center w-full text-[hsla(117,56%,49%,0.7)]">
       
        <div className="flex-1 md:flex-[0.65] p-8 flex flex-col items-start justify-center ml-7 md:ml-[7%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 self-center sm:self-start text-primary">
            Education
          </h1>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
              logo={edu.logo}
            />
          ))}
        </div>

        <div className="flex-[0.35] p-4 mt-4 pointer-events-none hidden md:block">
          <Image
            src="/images/education/eduBlack.svg"
            width={400}
            height={400}
            alt="Education illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
