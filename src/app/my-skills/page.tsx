"use client";
import React from "react";
import "swiper/css";
import JourneyCard from "@/components/JourneyCard";
import Skill from "@/components/Skill"

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg1.jpg)" }}
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center py-40 px-4"
    >
      <div className="flex flex-col max-w-5xl w-full text-center items-center">
        <div className="flex flex-col items-center gap-4 ">
          <h1 className="font-semibold text-white text-4xl md:text-5xl">
            Journey{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              & Skills
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl justify-center">
            Below are my journey and skills developed throughout my life.
          </p>
        </div>

        {/* Timeline / JourneyCard */}
        <div className="flex flex-col md:flex-row gap-30 w-full items-start justify-center px-4">
          <div className="w-full md:w-1/2">
            <JourneyCard />
          </div>

          <div className="w-full md:w-1/2">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
