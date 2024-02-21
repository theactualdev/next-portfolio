import React from "react";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const date = new Date();
let year = date.getFullYear();

let nickName = "<theActualDev />";

import { FaYoutube, FaHandPaper } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://www.youtube.com/@theActualDev"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex flex-row items-center my-[15px]"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="https://github.com/theactualdev/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/_theactualdev_/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/theactualdev"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="www.linkedin.com/in/theactualdev"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="#about-me"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <Image src="/favicon.ico" alt="Logo" width={15} height={15} />
              <span className="text-[15px] ml-[6px]">About Me</span>
            </a>
            <a
              href="https://wa.me/+2348165930089"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <Image
                src="/whatsapp.png"
                alt="whatsapp"
                width={20}
                height={20}
              />
              <span className="text-[15px] ml-[6px]">Whatsapp</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaHandPaper />
              <span className="text-[15px] ml-[6px]">Portfolio</span>
            </a>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; {nickName} {year} Inc. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
