import Image from "next/image";
import React from "react";


interface IService{
    id:number;
    title:string;
    icon:string
  
}

function ServiceCard({ id, title, icon }:IService) {
 

  return (
    // <div
    //   key={id}
   
    //   className="
    //     w-[180px] h-[180px] md:w-[160px] md:h-[160px] sm:w-[150px] sm:h-[150px]
    //     rounded-2xl shadow-service flex flex-col items-center justify-center
    //     p-6 md:p-5 sm:p-4 transform transition-transform duration-300 ease-in-out
    //     hover:scale-110 bg-primary
    //   "
    // >
    //   <div
    //     className="
    //       relative flex flex-col items-center justify-center
    //       h-[150px] p-4 text-secondary
    //     "
       
    //   >
    //     <i
    //       className="absolute top-[15%] -translate-y-1/2"
    //     >
    //       <span className="text-[2.8rem] md:text-[2.5rem] sm:text-[2.2rem] block hover:animate-magic">
    //         {icon}
    //       </span>
    //     </i>
    //     <h4
    //       className="
    //         absolute top-[60%] sm:top-1/2 h-[60px] flex items-center justify-center
    //         font-semibold text-center leading-tight
    //         text-[16px] md:text-[15px] sm:text-[13px] text-secondary
    //       "
       
    //     >
    //       {title}
    //     </h4>
    //   </div>
    // </div>

    <div
  key={id}
  className="
    w-[180px] h-[180px] md:w-[160px] md:h-[160px] sm:w-[150px] sm:h-[150px]
    rounded-2xl shadow-service flex flex-col items-center justify-center
    p-6 md:p-5 sm:p-4 transform transition-transform duration-300 ease-in-out
    hover:scale-110 bg-primary
  "
>
  <div
    className="
      relative flex flex-col items-center justify-center
      h-[150px] p-4 text-secondary
    "
  >
    <i className="absolute top-[15%] -translate-y-1/2">
      <Image
        src={icon} // pass image URL in icon prop
        alt={`${title} icon`}
        width={60}
        height={60}
        className="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] object-contain hover:animate-magic"
      />
    </i>
    <h4
      className="
        absolute top-[60%] sm:top-1/2 h-[60px] flex items-center justify-center
        font-semibold text-center leading-tight
        text-[16px] md:text-[15px] sm:text-[13px] text-secondary
      "
    >
      {title}
    </h4>
  </div>
</div>
  );
}

export default ServiceCard;
