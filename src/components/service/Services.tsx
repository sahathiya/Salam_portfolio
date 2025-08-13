import { serviceData } from '@/data/serviceData';
import React from 'react';
import ServiceCard from './ServiceCard';


function Services() {
 

  return (
    <>
      {serviceData.length > 0 && (
        <div
          id="services"
        //   style={{ backgroundColor: theme.secondary }}
          className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-10 bg-secondary"
        >
          {/* Header */}
          <div className="flex items-center justify-center w-full">
            <h1
            //   style={{ color: theme.primary }}
              className="mb-5 text-4xl sm:text-5xl md:text-[3.5rem] font-bold font-primary text-center text-primary"
            >
              Services
            </h1>
          </div>

          {/* Body */}
          <div className="flex flex-col items-center justify-start mb-8 w-full">
            <p
            //   style={{ color: theme.tertiary80 }}
              className="font-primary font-normal text-lg sm:text-xl md:text-2xl text-center mb-12 sm:mb-16 md:mb-24 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] text-thirtiary80"
            >
              These are some of the services I offer. Reach out to me if I can help you with any!
            </p>

            {/* Services container */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
              {serviceData.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
