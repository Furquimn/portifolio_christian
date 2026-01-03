import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  client: string;
  role: string;
  stacks: ReactNode;
  actions: {
    label: ReactNode;
    href: string;
  }[];
};

export default function CardProjeto({
  image,
  title,
  description,
  client,
  role,
  stacks,
  actions,
}: CardProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-30">
      {/* Coluna esquerda — FUNDO */}
      <div className=" rounded-xl bg-[#1A1A1A] p-8 flex justify-center items-center">
        <div className="relative w-full h-64 md:h-96 ">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Coluna direita — CONTEÚDO */}
      <div className="">
        <h3 className="font-manrope text-2xl md:text-3xl text-white leading-[140%] font-medium">
          {title}
        </h3>

        <p className="mt-4 font-manrope md:text-lg text-gray-400 leading-[160%]">
          {description}
        </p>

        <h4 className="mt-8 text-sm uppercase tracking-wide text-gray-400">
          Informações do projeto
        </h4>

        <div className="mt-3 border-t border-b border-gray-700 py-2 flex justify-between">
          <span className="font-manrope text-white">Cliente</span>
          <span className="font-manrope text-gray-400">{client}</span>
        </div>

        <div className="border-b border-gray-700 py-2 flex justify-between">
          <span className="font-manrope text-white">Cargo</span>
          <span className="font-manrope text-gray-400">{role}</span>
        </div>

         <div className="border-b border-gray-700 py-2 flex items-center justify-between">
          <span className="font-manrope text-white">Stacks</span>
          <span className="font-manrope text-gray-400">{stacks}</span>
        </div>

        <div className="mt-6 flex gap-6">
          {actions.map((action, index) => (
            <Link
              key={index}
              target="_blank"
              href={action.href}
              className="text-[#D3E97A] hover:text-lime-300 transition border-b-2 border-[#D3E97A]"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
