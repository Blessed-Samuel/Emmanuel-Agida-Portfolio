"use client";

import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import StratigicServicesSection from "@/components/ui/StrategicServicesSection";
import { serviceList } from "@/constants/strategicServices";

const StrategicServices = () => {
  return (
    <section id="strategic-services" className="w-full bg-primaryGold font-jost pt-5">
      <Container>
        <div className="my-10">
          <div className="border-b border-white/10 pb-5">
            <Badge title="SERVICES" strokeColor="white" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading as="h3" className="lg:text-4xl font-bold text-white/70 tracking-tighter w-full lg:w-1/2">
              Strategic Services <br />
              <span className="text-primaryBlack">For lasting impact.</span>
            </Heading>
            <div className="w-full lg:w-2/5 text-white/60 text-md font-light">
              A suite of high-value services designed to support organizations, 
              institutions, and leaders—delivering expert guidance, 
              strategic insight, and actionable solutions that drive growth.
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-around">
            {serviceList.map((service) => (
              <StratigicServicesSection 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                url={service.url}
                urlText={service.urlText}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StrategicServices;
