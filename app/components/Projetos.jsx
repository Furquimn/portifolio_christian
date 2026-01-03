import CardProjeto from "./cardProjeto";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {SiTypescript, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Projetos() {
  return (
    <section id="Projects" className="bg-black ">
      <div className="container mx-auto px-4 pt-10 ">
        <div className="flex md:grid md:grid-cols-2  ">
          <div>
            <h2 className="font-bebas text-3xl  xl:text-7xl lg:text-6xl 2xl:text-8xl text-gray-100 md:text-5xl">
              Projetos
            </h2>
            <p className=" font-manrope leading-[150%] text-sm md:text-lg 2xl:text-4xl text-gray-100 mt-3">
              Aqui estão alguns projetos realizados durante minha trajetoria
              profissional
            </p>
          </div>
        </div>

        <CardProjeto
          image={{
            src: "/TryCatchPrint.svg",
            alt: "Captura de tela do site tryCatch for match",
          }}
          title="TryCatch 4 Match"
          description="TryCatch For Match é uma plataforma colaborativa desenvolvida para organizar projetos, conectar pessoas, gerar portfólios reais e criar um ambiente que simula o mercado de trabalho."
          client="TryCatch For Match"
          role="Desenvolvedor FrontEnd"
          stacks={
            <div className="flex mt-3 gap-3 items-center">
              <FaReact className="text-[#D3E97A] w-5 h-5" />
              <SiNextdotjs className="text-[#D3E97A] w-5 h-5" />
              <SiTypescript className="text-[#D3E97A] w-5 h-5" />
              <RiTailwindCssFill className="text-[#D3E97A] w-5 h-5" />
            </div>
          }
          actions={[
            {
              href: "https://trycatch-omega.vercel.app/",
              label: (
                <span className="flex items-center gap-3 text-lime-300">
                  Ver projeto
                  <ArrowUpRight size={16} />
                </span>
              ),
            },
            {
              href: "https://github.com/Furquimn/trycatch",
              label: (
                <span className="flex items-center gap-3 text-lime-300 ">
                  GitHub
                  <FaGithub size={16} />
                </span>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
