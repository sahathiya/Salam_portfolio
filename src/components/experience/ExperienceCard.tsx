import Image from "next/image";
import React from "react";

interface IExperience {
  id: number;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
}
function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
}: IExperience) {
  return (
    <div
      key={id}
      className="flex items-start justify-start w-[90%] h-[140px] md:w-full md:h-auto p-6 md:p-4 mb-6 rounded-2xl transition-colors duration-200 bg-primary30"
    >
      {/* Icon */}
      <div className="flex items-center justify-center rounded-full w-[55px] h-[55px] flex-shrink-0 bg-primary">
        <Image
          src={"/images/experience/expImgBlack.svg"}
          alt=""
          width={36}
          height={36}
          className="w-9 md:w-8 pointer-events-none"
        />
      </div>

      {/* Text */}
      <div className="ml-2">
        <h6 className="text-sm font-bold mb-2 text-primary">
          {startYear} - {endYear}
        </h6>
        <h4 className="text-lg font-semibold leading-snug text-tertiary">
          {jobtitle}
        </h4>
        <h5 className="text-base font-semibold leading-snug text-thirtiary80">
          {company}
        </h5>
      </div>
    </div>
  );
}

export default ExperienceCard;
