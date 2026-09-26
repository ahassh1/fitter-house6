import Image from "next/image";
import React from "react";

import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-2 sm:py-8 lg:px-0">
      <div className="grid items-center gap-8 overflow-hidden rounded-2xl bg-gray-800 px-6 py-10 sm:px-10 md:grid-cols-2 md:py-12 lg:px-14">


        <div className="text-center md:text-left">
          <p className="mb-3 text-xs font-semibold tracking-[3px] text-[#C2F800] sm:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            TRAIN WITH INTENNT
            <br />
            <span className="text-[#C2F800]">LOG EVERY SET.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400 sm:text-base md:mx-0">
            FitLog is a dark, no-nonsense gym companion. Pick a lift,
            add it to today&apos;s plan, and watch your weekly progress
            build up.
          </p>

          <button className="mt-6 rounded-lg bg-[#C2F800] px-5 py-3 text-xs font-bold cursor-pointer text-black transition hover:bg-[#d5ff33] sm:text-sm">
            BROWSE WORKOUTS
          </button>
        </div>

    
        <div className="flex justify-center md:justify-end">
          <Image
            src={bannerImg}
            alt="FitLog workout"
            width={500}
            height={500}
            priority
            className="h-auto w-full `max-w-[280px]` object-contain `sm:max-w-[340px]` `md:max-w-[380px]` `lg:max-w-[430px]`"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;