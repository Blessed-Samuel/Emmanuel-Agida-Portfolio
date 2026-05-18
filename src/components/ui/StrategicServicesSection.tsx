"use client";

import { useState } from "react";
import { ServicesProps } from "@/types/strategicServices";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const StratigicServicesSection = ({
  id,
  title,
  description,
  url,
  urlText,
}: ServicesProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full hover:bg-[#BC8E32] border-[#BC8E32] border-b-1 border-opacity-20 
      text-white/60 flex flex-col sm:flex-row items-start justify-between px-4 py-8 gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row gap-4 w-full sm:max-w-2/3">
        <span className="text-sm tracking-widest mt-2">{id}</span>
        <div className="flex flex-col gap-6">
          <span className="text-xl sm:text-3xl uppercase font-bold tracking-tighter">{title}</span>
          <span className={`text-sm sm:text-lg ${!isHovered ? "hidden" :  "block"}`}>{description}</span>
        </div>
      </div>
      <Link
        href={url}
        className={`bg-black p-4 flex flex-row items-center gap-4 hover:bg-gray-500 ${!isHovered ? "hidden" :  ""}`}
      >
        <span className="uppercase text-sm w-max">{urlText}</span>
        <ExternalLink className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default StratigicServicesSection;
