// SkillSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { SkillData } from "@/constants";

const SkillSection = () => {
  return (
    <section className="w-full py-16 px-5 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        My Skills
      </h2>

      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {SkillData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white"
          >
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
            <span className="text-lg font-medium text-center mt-2">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
