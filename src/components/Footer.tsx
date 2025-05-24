import { FaGithub, FaLinkedin, FaHeart, FaCoffee } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative w-full backdrop-blur-sm px-6 py-4 overflow-hidden shadow-md ">
      {/* Glow mais intenso */}
      <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(93,120,185,0.20)_0%,transparent_70%)] before:blur-[60px]" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-3 text-center relative z-10">
        {/* Ícones sociais com efeitos melhorados */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/ThaisFReis"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border bg-lavender/10 border-lavender/20 text-pinkAccent hover:border-[#856aff87] transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-lavender group-hover:text-[#856aff87] transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/thaisfreis"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border bg-lavender/10 border-lavender/20 text-pinkAccent hover:border-[#856aff87] transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lavender group-hover:text-[#856aff87] transition-colors duration-300" />
          </a>
        </div>

        {/* Mensagem com ícones mais expressivos */}
        <p className="text-xs text-lavender flex items-center gap-1">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium hover:text-coral transition-colors duration-300">
            Thais Ferreira Reis
          </span>{" "}
          — feito com{" "}
          <span className="inline-flex items-center text-[#856aff87] mx-1">
            <FaHeart className="text-xs" />
          </span>{" "}
          e{" "}
          <span className="inline-flex items-center text-[#856aff87] ml-1">
            <FaCoffee className="text-xs" />
          </span>
        </p>

        {/* Texto adicional opcional */}
        <p className="text-[11.8px] text-lavender">
          Desenvolvido com React, Tailwind CSS e muita criatividade
        </p>
      </div>

      {/* A animação @keyframes float deve ser adicionada ao seu CSS global */}
    </footer>
  );
}
