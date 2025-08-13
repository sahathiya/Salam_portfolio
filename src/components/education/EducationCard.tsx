import Image from "next/image";
import React from "react";

interface IEducation {
  id: number;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
}
function EducationCard({
  id,
  institution,
  course,
  startYear,
  endYear,
}: IEducation) {
  return (
    <div
      key={id}
      className="flex flex-row items-start justify-start w-[90%] h-[140px] p-6 rounded-[20px] mb-6 transition-colors duration-200 hover:opacity-90 sm:w-full sm:p-6 sm:mb-6 sm:h-[140px] md:p-4 md:h-[130px] bg-primary30"
    >
      <div className="flex items-center justify-center flex-shrink-0 rounded-full w-[55px] h-[55px] md:w-[45px] md:h-[45px] bg-primary">
        <Image
          src={"/images/svg/eduImgWhite.svg"}
          alt=""
          width={40}
          height={40}
          className="w-[40px] md:w-[30px]"
        />
      </div>

      <div className="ml-2">
        <h6 className="text-[0.85rem] font-bold mb-2 md:mb-[0.45rem] text-primary">
          {startYear} - {endYear}
        </h6>
        <h4 className="text-[1.225rem] font-semibold leading-[126%] md:text-[1.125rem] text-tertiary">
          {course}
        </h4>
        <h5 className="text-[1.15rem] font-semibold leading-[126%] md:text-[1.05rem] text-thirtiary80">
          {institution}
        </h5>
      </div>
    </div>
  );
}

export default EducationCard;
