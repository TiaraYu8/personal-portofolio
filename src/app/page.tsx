"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      
      {/* Background + Layout */}
      <div
        className="flex flex-col md:flex-row items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/bg1.jpg)" }}
      >
        {/* Foto untuk Mobile */}
        <div className="flex md:hidden justify-center mt-40">
          <Image
            src="/foto.png"
            alt="MyPhoto"
            height={200}
            width={200}
            className="object-contain rounded-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-5 z-[10] max-w-[750px] pl-5 pr-5 md:pl-40 md:pr-0 pb-10 md:pb-20 mt-10 md:mt-0">
          <h1 className="text-[40px] md:text-[50px] text-white font-semibold leading-tight">
            Tiara Yuliandari, I am a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}Software Developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
          Hello, I'm Tiara Yuliandari, usually called by "Tiara". I am an EX-Backend Engineer Intern at <b>FIFGROUP</b> and an EX-Software Engineer at <b>PT Indonesia Air Asia</b>. I am also a Bachelor of Computer Science from <b>Institut Teknologi Del</b>
          </p>

          {/* Paragraf deskripsi - hidden di mobile */}
          <p className="text-gray-200 md:hidden">
          Hello, I'm Tiara Yuliandari, usually called by "Tiara". I am an EX-Backend Engineer Intern at <b>FIFGROUP</b> and an EX-Software Engineer Intern at <b>PT Indonesia Air Asia</b>. I am also a Bachelor of Computer Science from <b>Institut Teknologi Del</b>
          </p>

          {/* Button group untuk Desktop */}
          <div className="hidden md:flex gap-5 mt-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex absolute right-80 bottom-60 translate-x-[-50%] mb-10">
        <Image
          src="/foto.png"
          alt="MyPhoto"
          width={400}
          height={400}
          className="object-contain rounded-full"
        />
      </div>

      {/* Button Group untuk Mobile */}
      <div className="absolute flex bottom-10 right-5 flex-col md:hidden gap-5 z-[20]">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] text-center"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
        >
          Contact me
        </Link>
      </div>

    </main>
  );
}
