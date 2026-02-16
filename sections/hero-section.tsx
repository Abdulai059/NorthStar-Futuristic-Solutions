"use client";

import { companiesLogo } from "@/data/companies-logo";
import { ArrowRightIcon, StarIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="min-h-screen pb-20">
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-50 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 blur-[100px] opacity-30"></div>

          <div className="flex items-center gap-2 text-gray-500 mt-32  rounded-full px-4 py-2">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
            </div>
            <span>Book a live demo today</span>
          </div>

          <h1 className="text-3xl min-[640px]:text-[42px] font-gt font-medium max-w-5xl text-center mt-4 md:leading-17.5 text-white">
            Smart AI Systems for{" "}
            <span className="bg-clip-text text-primary text-nowrap">
              <br />

              <Typewriter
                options={{
                  strings: ["local businesses", "schools and retail", "NGOs"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>{" "}
          </h1>

          <p className="max-w-lg text-center text-secondary text-sm  md:text-sm my-7">
            NorthStar Futuristic Solutions helps local businesses automate their
            work, save hours every week, and grow faster using simple, no-code
            AI systems.
          </p>

          <div className="flex items-center gap-4 ">
            <Link
              href="/"
              className="bg-primary hover:bg-grayc text-white rounded-sm px-9 h-12 m-1 border-grayc  flex items-center transition-colors"
            >
              Book a Call
              <ArrowRightIcon className="ml-1 size-5" />
            </Link>
            <button className="flex items-center bg-grayc gap-2 border border-gray-600 hover:bg-primary transition rounded-sm px-7 h-12 text-zinc-300">
              <VideoIcon className="size-5" />
              <span>View demo</span>
            </button>
          </div>

          <p className="py-6 text-base text-secondary mt-14">
            Trusted by fast-growing teams worldwide
          </p>

          <div
            className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-3xl w-full mx-auto py-4"
            id="logo-container"
          >
            {companiesLogo.map((company, index) => (
              <React.Fragment key={index}>{company.logo}</React.Fragment>
            ))}
          </div>

          <a
            href=""
            target="_blank"
            className="group  group absolute top-[35%] right-[10%] flex flex-col items-center justify-center h-12.5  w-40 no-underline cursor-pointer z-9999"
          >
            <button className="absolute h-12.5 w-40 border-none rounded-[13px] bg-[hsla(155,100%,94%,1%)] shadow-[0px_-3px_15px_0px_hsla(155,100%,100%,25%)_inset] text-secondary  text-base flex flex-col items-center justify-center translate-y-0 transition-all duration-200 ease-in-out group-hover:translate-y-1.25">
              Watch Video
            </button>
            <span className="absolute bottom-[-50%] w-25 h-15 bg-[hsla(155,100%,100%,25%)] rounded-full blur-[20px] transition-all duration-200 ease-in-out group-hover:opacity-60"></span>
          </a>
        </div>
      </div>
    </>
  );
}
