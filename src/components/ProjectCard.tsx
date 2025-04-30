import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  text: string;
  sourceCodeLink: string;
}

const ProjectCard = ({ image, title, text, sourceCodeLink }: Props) => {
  return (
    <div className="w-[350px] h-[450px] bg-gray-900 rounded-lg overflow-hidden flex flex-col">
      <div
        style={{ backgroundImage: `url(/personal-portofolio${image})` }}
        className="w-full h-[50%] bg-cover bg-center bg-no-repeat"
      ></div>

      <div className="p-5 flex flex-col justify-between h-[40%]">
        <h1 className="text-white text-2xl font-semibold">{title}</h1>
        <p className="text-gray-300 text-sm">{text}</p>

        {/* Button with gradient hover
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 px-6 py-2 bg-transparent border-2 border-purple-600 text-purple-600 rounded-md transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-red-500 hover:text-white">
            View Source Code
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default ProjectCard;
