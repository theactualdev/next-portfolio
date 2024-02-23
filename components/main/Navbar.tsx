import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[50] md:px-10 pr-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="Logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowsspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            theactualdev
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042F861] bg-[#0300145E] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer ">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer ">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer ">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <a href={social.url} target="_blank" referrerPolicy="no-referrer" key={index}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
