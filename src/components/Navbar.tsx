import { Socials } from "@/constants";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Link
            href="/"
            className="rounded-[20px] group bg-transparent p-2 text-white flex justify-center items-center"
          >
            <ArrowLeft size={24} />
        </Link>
        <div className="relative">
          <Image
            src="/saya1.JPG"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Tiara Yuliandari{" "}
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          social.src ? (
            <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition">
              <Image
                src={social.src}
                alt={social.name}
                width={35}
                height={35}
              />
            </a>
          ) : null
        ))}
      </div>

    </div>
  );
};

export default Navbar;