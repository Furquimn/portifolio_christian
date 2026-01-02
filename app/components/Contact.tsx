import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-black pt-10 pb-20 ">
      <div className="container mx-auto px-4 lg:px-40 pt-10 ">
        <h2 className="text-white text-4xl font-bebas">Entre em contato</h2>
        <div className="flex gap-4 mt-4">
          {/* Whatsapp */}
          <a
            href="https://wa.me/5519999902008"
            target="_blank"
            className="h-12 w-12 rounded-full bg-lime-300 flex items-center justify-center"
          >
            <FaWhatsapp className="text-neutral-800" />
          </a>
          {/* Email */}
          <a
            href="mailto:christian.furquim@hotmail.com"
            target="_blank"
            className="h-12 w-12 rounded-full bg-lime-300 flex items-center justify-center"
          >
            <MdEmail className="text-neutral-800" />
          </a>

          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/christian-furquim/"
            target="_blank"
            className="h-12 w-12 rounded-full bg-lime-300 flex items-center justify-center"
          >
            <FaLinkedinIn className="text-neutral-800" />
          </a>
        </div>
      </div>
    </section>
  );
}
