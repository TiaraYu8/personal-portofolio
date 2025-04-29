// Timeline.tsx
"use client";

import React from "react";
import { Journey } from "@/constants";

const Timeline = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-16 text-center">My Journey</h2>

      <div className="relative max-w-3xl w-full">
        {/* Vertical line */}
        <div className="absolute top-0 left-6 md:left-8 w-1 h-full bg-gray-700" />

        <div className="space-y-12">
          {Journey.map((item, index) => {
            // Pastikan item.description adalah array
            const descriptions = Array.isArray(item.description)
              ? item.description
              : item.description.split(';').map(desc => desc.trim());

            return (
              <div key={index} className="relative flex gap-6 items-start">
                {/* Dot */}
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-5 top-2.5" />

                {/* Content Box */}
                <div className="ml-12 bg-gray-900 border border-gray-700 rounded-xl p-5 w-full">
                  <h5 className="text-xl text-left font-medium text-white">{item.year}</h5>
                  <h3 className="text-lg text-left font-semibold text-purple-400 mt-1">{item.title}</h3>

                  {/* Display Description as List */}
                  <ul className="list-disc pl-5 mt-2 text-left text-gray-400">
                    {descriptions.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
