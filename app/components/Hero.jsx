import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="bg-black">
      <div className="container mx-auto max px-4 pt-10 ">
        <div className="flex flex-col md:flex-row md:gap-20 justify-center items-center">
          <div className="flex flex-col w-full">
            <h1 className="font-bebas text-4xl  xl:text-8xl lg:text-7xl 2xl:text-9xl text-gray-100 md:text-5xl">
              Olá, eu sou <br /> Christian Furquim.
            </h1>
            <p className="font-manrope leading-[150%] text-sm md:text-lg 2xl:text-4xl text-gray-100 mt-3">
              Desenvolvedor front-end, focado em criar sites interativos e
              funcionais.
            </p>
            <div className="flex mt-3 gap-3">
              <FaCss3Alt className="text-[#D3E97A] w-5 h-5" />
              <FaHtml5 className="text-[#D3E97A] w-5 h-5" />
              <RiTailwindCssFill className="text-[#D3E97A] w-5 h-5" />
              <IoLogoJavascript className="text-[#D3E97A] w-5 h-5" />
              <FaReact className="text-[#D3E97A] w-5 h-5" />
              <SiNextdotjs className="text-[#D3E97A] w-5 h-5" />
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://wa.me/5519999902008"
                target="_blank"
                className="bg-[#D3E97A] font-manrope text-[16px] gap-3 flex items-center justify-between font-bold  pr-1 pl-4 rounded-[100px] w-auto h-12"
              >
                Contact Me
                <span className="bg-black rounded-full h-10 w-10 flex items-center justify-center">
                  <ArrowUpRight className="text-white h-5 w-5" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/christian-furquim/"
                target="_blank"
                className=" h-12 w-12 rounded-full bg-[#222222] flex items-center justify-center "
              >
                <FaLinkedinIn className="text-[#D3E97A]" />
              </a>
              <a
                href="https://github.com/Furquimn"
                target="_blank"
                className="h-12 w-12 rounded-full bg-[#222222] flex items-center justify-center "
              >
                <FaGithub className="text-[#D3E97A]" />
              </a>
            </div>
          </div>
          <div className="mt-16 mb-10 w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/image.png"
              width={500}
              height={500}
              alt="Foto do Christian"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
