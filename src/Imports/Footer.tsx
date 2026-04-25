"use client";
import Image from "next/image";
import { NavLinks } from "@/constants/navbar";
import Link from "next/link";

const Footer = () => {

  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div>
      <div
        className="lg:w-1/2 transition-[height] duration-700 ease-in-out w-full mx-auto">
        <Image
          src="/emmanuelagida_brand_banner.svg"
          alt="Emmanuel Agida"
          className="grayscale mx-auto"
          width={400}
          height={400}
          priority
          draggable={false}
        />
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 space-between flex-col gap-10 lg:gap-20 px-4 py-10">
        
        <div className="flex flex-col items-center lg:items-start gap-4">
          <Image
            src="/emmanuelagida_logo.svg"
            alt="Emmanuel Agida"
            className="object-cover object-top"
            width={100}
            height={50}
            priority
            draggable={false}
          />
          <p className="text-white/50 mt-4">Equipping Lives for Purpose, Leadership, and Impact.</p>
        </div>

        <div>
          <p className="text-white/50 font-bold">Quick Links</p>

          <nav className="flex flex-col items-start gap-2">
            {NavLinks.map(link => {
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  className={`
                    py-1 px-8 text-white/70 transition-all duration-200 ease-out
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <p className="text-white/50 font-bold">Supports</p>
          <div className="mt-2">
            <p className="text-white/50 text-sm">Reach me directly?</p>
            <p>(123) 567 8901</p>
          </div>

          <div>
            <p className="text-white/50 text-sm">Need Support?</p>
            <p>help@emmanuelagida.com</p>
          </div>
        </div>

        <div>
          <p className="text-white/50 font-bold">Stay in the Loop</p>
          <p>Get design insights and project updates straight in your inbox</p>
        </div>
      </div>

      <div className="border-t border-t-gray-500 w-full h-16 flex items-center justify-center">
        <p className="text-sm">&copy; {currentYear} Emmanuel Agida. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;