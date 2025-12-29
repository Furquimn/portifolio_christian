import CardProjeto from "./cardProjeto";
import { ArrowUpRight } from "lucide-react";

export default function Projetos() {
  return (
    <section className="bg-black h-screen">
      <div className="container mx-auto max px-4 pt-10 ">
        <div className="grid grid-cols-2 ">
          <div>
            <h2 className="font-bebas text-3xl  xl:text-7xl lg:text-6xl 2xl:text-8xl text-gray-100 md:text-5xl">
              Projetos
            </h2>
            <p className="font-manrope leading-[150%] text-sm md:text-lg 2xl:text-4xl text-gray-100 mt-3">
              Aqui estão algun projetos realizados durante minha trajetoria
              profissional
            </p>
          </div>
        </div>
        <CardProjeto
          image={{
            src: "/teste.svg",
            alt: "teste",
          }}
          title="Promotional landing page for our favorite show"
          description="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."
          client="cliente teste"
          role="Desenvolvedor FrontEnd"
          actions={[
            {
              href: "/projetos/tryCatch4Match",
              label: (
                <span className="flex items-center gap-3 text-[#D3E97A]">
                  Ver projeto
                  <ArrowUpRight size={16} />
                </span>
              ),
            },
            {
              href: "https://github.com/Furquimn/trycatch",
              label: (
                <span className="flex items-center gap-3 text-[#D3E97A] ">
                  GitHub
                  <ArrowUpRight size={16} />
                </span>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
