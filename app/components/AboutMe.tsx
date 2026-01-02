import Image from "next/image";
import { Download } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="bg-black pt-20 ">
      <div className="container mx-auto px-4 lg:px-40 pt-10 ">
        <h2 className="text-white font-bebas text-6xl mb-5">Sobre mim</h2>

        <p className="text-white text-sm lg:text-lg">
          Desenvolvedor Front-End com background em audiovisual e experiência em
          projetos criativos e digitais. Crio interfaces web modernas,
          responsivas e funcionais, com foco em usabilidade, boas práticas e
          integração de APIs. Atuo com HTML, CSS, JavaScript , React.js, Next.js
          em projetos pessoais e freelances, unindo técnica, criatividade e
          aprendizado contínuo em times Front-End.
        </p>
        <a
          href="/CV_Christian_Furquim_Dev.pdf"
          download
          className="text-lime-300 font-manrope text-[16px] font-bold flex items-center gap-3 mt-5
             underline underline-offset-4 decoration-2 decoration-lime-300
             hover:opacity-80 transition"
        >
          Baixe o CV e saiba +
          <Download className="text-lime-300 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
