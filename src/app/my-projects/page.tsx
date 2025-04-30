"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg1.jpg)" }}
      className="min-h-screen bg-cover bg-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[90%] px-5 py-30 mx-auto justify-items-center">
        {Projects.map((project, index) => (
          <div key={index} className={`flex justify-center ${Projects.length === 4 && index === 3 ? 'col-span-1 sm:col-span-2 lg:col-span-1' : ''}`}
          >
            <ProjectCard
              title={project.title}
              text={project.text}
              image={project.src}
              sourceCodeLink={project.sourceCodeLink} // Pass source code link here
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
